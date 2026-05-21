"use client";
import Link from "next/link";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { tools } from "@/data/tools";

const chipQueries = ["AI writing", "Image generation", "AI coding", "Analytics", "SEO"];

export function Hero() {
  const router = useRouter();
  const [q, setQ] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/tools${q ? `?q=${encodeURIComponent(q)}` : ""}`);
  };

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div
        className="blob anim-drift"
        style={{ left: "-10%", top: "-20%", height: 380, width: 380, background: "var(--brand)" }}
      />
      <div
        className="blob anim-drift"
        style={{ right: "-10%", top: "10%", height: 320, width: 320, background: "var(--accent)", animationDelay: "3s" }}
      />

      <div className="relative mx-auto max-w-5xl px-5 pt-20 pb-24 text-center md:pt-28 md:pb-32">
        <div className="anim-rise inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--fg-soft)] shadow-sm">
          <Sparkles className="h-3 w-3 text-[var(--brand)]" />
          {tools.length} AI tools · 5 categories · always free to browse
        </div>

        <h1 className="anim-rise delay-1 mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          Find the right AI tool for{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[var(--brand)]">your next move</span>
            <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded bg-[var(--brand-soft)]" />
          </span>
        </h1>
        <p className="anim-rise delay-2 mx-auto mt-5 max-w-2xl text-pretty text-base text-[var(--fg-soft)] md:text-lg">
          A curated directory of AI tools for productivity, design, development,
          marketing, and analytics — vetted, compared, and ready to use.
        </p>

        <form onSubmit={submit} className="anim-rise delay-3 mx-auto mt-9 flex max-w-xl items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-sm focus-within:border-[var(--brand)] focus-within:ring-2 focus-within:ring-[var(--brand)]/30">
          <Search className="ml-3 h-4 w-4 text-[var(--muted)]" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search 50+ AI tools, tags, categories…"
            className="flex-1 bg-transparent px-1 py-2 text-sm outline-none placeholder:text-[var(--muted)]"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1 rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--brand-strong)]"
          >
            Search <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>

        <div className="anim-rise delay-4 mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--fg-soft)]">
          <span className="text-[var(--muted)]">Try:</span>
          {chipQueries.map((c) => (
            <Link
              key={c}
              href={`/tools?q=${encodeURIComponent(c)}`}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            >
              {c}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
