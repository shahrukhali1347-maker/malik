import Link from "next/link";
import { ArrowUpRight, Star, TrendingUp } from "lucide-react";
import type { Tool } from "@/data/types";
import { cn } from "@/lib/utils";

export function ToolCard({ tool, compact = false }: { tool: Tool; compact?: boolean }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="lift group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "grid h-11 w-11 place-items-center rounded-xl font-semibold text-white shadow-sm",
              tool.accent,
            )}
          >
            {tool.initials}
          </span>
          <div>
            <h3 className="text-base font-semibold leading-tight text-[var(--fg)] group-hover:text-[var(--brand)]">
              {tool.name}
            </h3>
            <p className="text-xs text-[var(--muted)]">{tool.tagline}</p>
          </div>
        </div>
        {tool.trending && (
          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--brand-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-strong)]">
            <TrendingUp className="h-3 w-3" /> hot
          </span>
        )}
      </div>

      {!compact && (
        <p className="mt-4 line-clamp-3 text-sm text-[var(--fg-soft)]">
          {tool.description}
        </p>
      )}

      <div className="mt-auto flex items-center justify-between pt-4">
        <div className="flex items-center gap-2 text-xs text-[var(--fg-soft)]">
          <span className="inline-flex items-center gap-1 font-medium text-[var(--fg)]">
            <Star className="h-3.5 w-3.5 fill-[var(--accent)] text-[var(--accent)]" />
            {tool.rating.toFixed(1)}
          </span>
          <span className="text-[var(--muted)]">·</span>
          <span>{tool.reviews.toLocaleString()} reviews</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
              tool.pricing === "Free" && "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
              tool.pricing === "Freemium" && "border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-300",
              tool.pricing === "Paid" && "border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300",
            )}
          >
            {tool.pricing}
          </span>
          <ArrowUpRight className="h-4 w-4 text-[var(--muted)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--brand)]" />
        </div>
      </div>
    </Link>
  );
}
