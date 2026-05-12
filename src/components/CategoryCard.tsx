import Link from "next/link";
import { ArrowRight, BarChart3, Code2, Megaphone, Palette, Zap } from "lucide-react";
import type { Category } from "@/data/types";
import { cn } from "@/lib/utils";

const icons = {
  Zap,
  Palette,
  Code2,
  Megaphone,
  BarChart3,
};

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  const Icon = icons[category.icon as keyof typeof icons] ?? Zap;
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="lift group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
    >
      <div
        className={cn(
          "absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br opacity-30 blur-2xl transition group-hover:opacity-50",
          category.color,
        )}
      />
      <div
        className={cn(
          "grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br text-white shadow-sm",
          category.color,
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{category.name}</h3>
      <p className="mt-1 text-sm text-[var(--fg-soft)]">{category.tagline}</p>
      <p className="mt-3 line-clamp-2 text-sm text-[var(--muted)]">
        {category.description}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4 text-sm">
        <span className="font-medium text-[var(--fg)]">{count} tools</span>
        <span className="inline-flex items-center gap-1 font-medium text-[var(--brand)] group-hover:gap-2 transition-all">
          Browse <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
