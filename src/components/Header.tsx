"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/categories", label: "Categories" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--brand)] text-white shadow-sm">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-lg">
            Tool<span className="text-[var(--brand)]">Stack</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "under text-sm font-medium transition",
                isActive(item.href)
                  ? "text-[var(--brand)]"
                  : "text-[var(--fg-soft)] hover:text-[var(--fg)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/tools"
            className="inline-flex items-center rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[var(--brand-strong)]"
          >
            Browse tools
          </Link>
        </div>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition",
                  isActive(item.href)
                    ? "bg-[var(--brand-soft)] text-[var(--brand-strong)]"
                    : "text-[var(--fg-soft)] hover:bg-[var(--bg-soft)]",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-[var(--border)] pt-3">
              <ThemeToggle />
              <Link
                href="/tools"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white"
              >
                Browse tools
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
