"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import { SITE } from "@/lib/constants";

// Keep in sync with the field list in public/__forms.html.
export const TOPICS = [
  "General enquiry",
  "Partnership",
  "Investment",
  "Press",
  "PADLR. feedback",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-lion focus:bg-white focus:ring-2 focus:ring-lion/15";

const labelClass = "text-sm font-medium text-ink";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      // With the Next.js runtime, Netlify Forms only captures submissions
      // POSTed to a static file, so post to the form definition itself.
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          new FormData(form) as unknown as Record<string, string>,
        ).toString(),
      });
      if (!response.ok) throw new Error(`Status ${response.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-3xl border border-line bg-white p-10 text-center shadow-card sm:p-14"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lion-tint text-lion">
          <Icon name="check-circle" className="h-7 w-7" />
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight">
          Message sent
        </h2>
        <p className="mt-3 max-w-sm text-ink-soft">
          Thanks for reaching out. We aim to reply within 2 business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-medium text-lion underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-10"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out:{" "}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="topic" className={labelClass}>
          What&apos;s it about?
        </label>
        <div className="relative">
          <select
            id="topic"
            name="topic"
            defaultValue={TOPICS[0]}
            className={`${fieldClass} appearance-none pr-11`}
          >
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          <Icon
            name="chevron-down"
            className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-ink-muted"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-xl border border-lion/20 bg-lion-tint px-4 py-3 text-sm text-lion-dark"
        >
          <Icon name="alert-circle" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Something went wrong sending your message. Please try again, or
            email us at{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium underline underline-offset-2"
            >
              {SITE.email}
            </a>
            .
          </span>
        </p>
      )}

      <div className="mt-8 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">
          Prefer email?{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="font-medium text-ink underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[15px] font-medium text-white transition-all duration-300 hover:bg-ink/85 disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? (
            <>
              Sending
              <Icon name="loader" className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Send message
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
