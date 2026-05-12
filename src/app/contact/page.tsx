import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the ToolStack team — feedback, tool suggestions, and partnerships welcome.",
};

const blurbs = [
  { icon: Mail, title: "General inquiries", body: "hello@toolstack.example" },
  { icon: MessageSquare, title: "Submit a tool", body: "We review every suggestion within 5 business days." },
  { icon: MapPin, title: "We work from", body: "A small remote team across three time zones." },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-14 pb-20">
      <div className="anim-rise max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
          Contact
        </span>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-3 text-[var(--fg-soft)]">
          Want to suggest a tool, flag a problem, or just say hi? Drop us a
          note and we&apos;ll get back to you. Real humans, friendly tone.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-[1fr_360px]">
        <ContactForm />

        <aside className="space-y-4">
          {blurbs.map((b, i) => (
            <div
              key={b.title}
              className={`anim-rise delay-${i + 1} flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5`}
            >
              <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand-strong)]">
                <b.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">{b.title}</p>
                <p className="mt-1 text-sm text-[var(--fg-soft)]">{b.body}</p>
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Response time
            </p>
            <p className="mt-2 text-sm text-[var(--fg-soft)]">
              Most messages get a reply within 1–2 business days. If you&apos;re
              reporting an outage or broken listing, we usually respond same-day.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
