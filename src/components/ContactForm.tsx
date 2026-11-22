"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { SITE } from "@/lib/constants";

// Keep in sync with WORK_TYPES in worker/index.ts, which checks each enquiry.
const WORK_TYPES = [
  "A website",
  "An app",
  "AI for my business",
  "PADLR.",
  "Something else",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-lion focus:bg-white focus:ring-2 focus:ring-lion/15";

const labelClass = "text-sm font-medium text-ink";

interface ContactFormProps {
  /** Optional heading shown inside the card, e.g. on the home page. */
  title?: string;
  /** Tighter spacing for use beside other content. */
  compact?: boolean;
}

export default function ContactForm({
  title,
  compact = false,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const card = `rounded-3xl border border-line bg-white shadow-card ${
    compact ? "p-6 sm:p-8" : "p-6 sm:p-10"
  }`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      // worker/index.ts checks the enquiry and emails it to our inbox.
      const response = await fetch("/api/enquiry", {
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
        className={`${card} flex flex-col items-center text-center sm:p-14`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lion-tint text-lion">
          <Icon name="check-circle" className="h-7 w-7" />
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight">
          Enquiry sent
        </h2>
        <p className="mt-3 max-w-sm text-ink-soft">
          Thanks for getting in touch. We aim to reply within two working days
          to arrange a free chat.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-medium text-lion underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      action="/api/enquiry"
      method="POST"
      onSubmit={handleSubmit}
      aria-label={title ?? "Enquiry form"}
      className={card}
    >
      {title && (
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">{title}</h2>
      )}
      <p className="hidden">
        <label>
          Don&apos;t fill this out:{" "}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
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
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="topic" className={labelClass}>
            Type of work
          </label>
          <div className="relative">
            <select
              id="topic"
              name="topic"
              defaultValue={WORK_TYPES[0]}
              className={`${fieldClass} appearance-none pr-11`}
            >
              {WORK_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <Icon
              name="chevron-down"
              className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-ink-muted"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Tell us about the work
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 4 : 6}
          required
          placeholder="What does your business do, and what would you like help with?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
        We only use your details to reply to you. See our{" "}
        <Link
          href="/privacy"
          className="font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
        >
          privacy notice
        </Link>
        .
      </p>

      {status === "error" && (
        <p
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-xl border border-lion/20 bg-lion-tint px-4 py-3 text-sm text-lion-dark"
        >
          <Icon name="alert-circle" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Something went wrong sending your enquiry. Please try again, or
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

      <div
        className={`flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between ${
          compact ? "mt-6" : "mt-8"
        }`}
      >
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
          className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-ink px-7 text-[15px] font-medium text-white transition-all duration-300 hover:bg-ink/85 disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? (
            <>
              Sending
              <Icon name="loader" className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Send enquiry
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
