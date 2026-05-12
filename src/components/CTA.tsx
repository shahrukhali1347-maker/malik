import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-20">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-14">
        <div className="dot-bg absolute inset-0 opacity-50" />
        <div
          className="blob"
          style={{ right: "-5%", top: "-30%", height: 280, width: 280, background: "var(--brand)" }}
        />
        <div className="relative max-w-xl">
          <span className="inline-block rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-strong)]">
            Newsletter
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            One useful tool. Every Friday.
          </h2>
          <p className="mt-3 text-[var(--fg-soft)]">
            A short weekly note with the most interesting tool we found that
            week — no ads, no fluff, unsubscribe anytime.
          </p>
          <form className="mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@work.com"
              className="flex-1 rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-strong)]"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-3 text-xs text-[var(--muted)]">
            Already have a favorite tool? <Link href="/contact" className="underline">Tell us about it</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
