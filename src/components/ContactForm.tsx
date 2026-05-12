"use client";
import { useState } from "react";
import { Check, Send } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    await new Promise((r) => setTimeout(r, 600));
    setPending(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="anim-pop rounded-2xl border border-[var(--brand)] bg-[var(--brand-soft)] p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[var(--brand)] text-white">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Message sent</h3>
        <p className="mt-1 text-[var(--fg-soft)]">
          Thanks for reaching out. We&apos;ll get back to you within a couple of days.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-medium text-[var(--brand-strong)] underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name">
          <input
            required
            placeholder="Jane Designer"
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/30"
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            placeholder="you@work.com"
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/30"
          />
        </Field>
      </div>
      <Field label="Subject">
        <select
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/30"
          defaultValue=""
        >
          <option value="" disabled>Pick a topic…</option>
          <option>Suggest a tool</option>
          <option>Report a problem</option>
          <option>Partnership</option>
          <option>Something else</option>
        </select>
      </Field>
      <Field label="Message">
        <textarea
          required
          rows={5}
          placeholder="Tell us what's on your mind…"
          className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/30"
        />
      </Field>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-strong)] disabled:opacity-60"
      >
        {pending ? "Sending…" : <>Send message <Send className="h-4 w-4" /></>}
      </button>
      <p className="text-xs text-[var(--muted)]">
        This is a demo form — submissions are not stored or sent anywhere.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
        {label}
      </span>
      {children}
    </label>
  );
}
