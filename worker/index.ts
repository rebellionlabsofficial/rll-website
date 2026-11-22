// Cloudflare Worker for rebellionlabs.app.
//
// Cloudflare serves every page and file in out/ (the static export) straight
// from its cache. This code only runs for requests that don't match a file:
// the enquiry form's POST to /api/enquiry, and unknown URLs, which get the
// site's 404 page.
//
// Enquiries are emailed to our inbox through Cloudflare Email Routing. The
// send_email binding in wrangler.jsonc can only send to that one verified
// address, so this endpoint can't be abused to email anyone else.

// Keep in sync with WORK_TYPES in src/components/ContactForm.tsx.
const WORK_TYPES = [
  "A website",
  "An app",
  "AI for my business",
  "PADLR.",
  "Something else",
];

const LIMITS = { name: 120, email: 254, phone: 40, message: 5000 };

// Pages the form is allowed to be posted from: the live site, plus
// Cloudflare preview addresses for this Worker.
function allowedOrigin(origin: string | null, host: string): boolean {
  if (!origin) return false;
  try {
    const url = new URL(origin);
    return (
      url.host === host ||
      url.hostname === "rebellionlabs.app" ||
      url.hostname === "www.rebellionlabs.app" ||
      url.hostname.endsWith(".workers.dev")
    );
  } catch {
    return false;
  }
}

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  });
}

// Trims a field and removes control characters (except new lines in the
// message), so nothing odd ends up in the email.
function clean(value: File | string | null, multiline = false): string {
  if (typeof value !== "string") return "";
  const pattern = multiline
    ? /[\u0000-\u0009\u000B\u000C\u000E-\u001F\u007F]/g
    : /[\u0000-\u001F\u007F]/g;
  return value.replace(/\r\n?/g, "\n").replace(pattern, "").trim();
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function handleEnquiry(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { Allow: "POST" },
    });
  }

  const host = new URL(request.url).host;
  if (!allowedOrigin(request.headers.get("Origin"), host)) {
    return json(403, { ok: false, error: "origin" });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json(400, { ok: false, error: "form" });
  }

  // The hidden "bot-field" is only ever filled in by spam bots. Pretend it
  // worked so they move on.
  if (clean(form.get("bot-field"))) return json(200, { ok: true });

  const name = clean(form.get("name"));
  const email = clean(form.get("email"));
  const phone = clean(form.get("phone"));
  const topic = clean(form.get("topic"));
  const message = clean(form.get("message"), true);

  const valid =
    name.length > 0 &&
    name.length <= LIMITS.name &&
    email.length <= LIMITS.email &&
    EMAIL_PATTERN.test(email) &&
    phone.length <= LIMITS.phone &&
    WORK_TYPES.includes(topic) &&
    message.length > 0 &&
    message.length <= LIMITS.message;
  if (!valid) return json(400, { ok: false, error: "fields" });

  const text = [
    "New enquiry from rebellionlabs.app",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "not given"}`,
    `Type of work: ${topic}`,
    "",
    "Message:",
    message,
    "",
    "Reply to this email to answer them directly.",
  ].join("\n");

  try {
    await env.ENQUIRY_EMAIL.send({
      from: { email: env.ENQUIRY_FROM, name: "RL Labs website" },
      to: env.ENQUIRY_TO,
      replyTo: { email, name },
      subject: `New enquiry: ${topic} from ${name}`,
      text,
    });
  } catch (error) {
    const code = (error as { code?: string }).code ?? "unknown";
    console.error(`Enquiry email failed: ${code}`, error);
    return json(502, { ok: false, error: "send" });
  }

  return json(200, { ok: true });
}

export default {
  async fetch(request, env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/enquiry") return handleEnquiry(request, env);
    // Anything else that isn't a file: let the assets layer answer, which
    // serves out/404.html with a 404 status.
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
