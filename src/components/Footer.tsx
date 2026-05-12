import Link from "next/link";
import { Github, Linkedin, Sparkles, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--brand)] text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-lg">
                Tool<span className="text-[var(--brand)]">Stack</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-[var(--fg-soft)]">
              A hand-picked directory of tools that help individuals and teams
              do their best work — without the bloat.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--fg-soft)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/tools" className="text-[var(--fg-soft)] hover:text-[var(--brand)]">All tools</Link></li>
              <li><Link href="/categories" className="text-[var(--fg-soft)] hover:text-[var(--brand)]">Categories</Link></li>
              <li><Link href="/tools?sort=trending" className="text-[var(--fg-soft)] hover:text-[var(--brand)]">Trending</Link></li>
              <li><Link href="/tools?pricing=Free" className="text-[var(--fg-soft)] hover:text-[var(--brand)]">Free tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/contact" className="text-[var(--fg-soft)] hover:text-[var(--brand)]">Contact</Link></li>
              <li><Link href="/privacy" className="text-[var(--fg-soft)] hover:text-[var(--brand)]">Privacy</Link></li>
              <li><Link href="/terms" className="text-[var(--fg-soft)] hover:text-[var(--brand)]">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] md:flex-row md:items-center">
          <p>© {year} ToolStack. A demo directory. All tools shown are fictional.</p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
