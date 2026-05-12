import type { Metadata } from "next";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse tools by category — productivity, design, development, marketing, and analytics.",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-14 pb-20">
      <div className="anim-rise max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
          Categories
        </span>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
          Five focused categories.
        </h1>
        <p className="mt-3 text-[var(--fg-soft)]">
          Every tool in the directory belongs to exactly one of these. Pick the
          one closest to what you&apos;re working on.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => (
          <div key={c.id} className={`anim-rise delay-${(i % 6) + 1}`}>
            <CategoryCard category={c} count={getToolsByCategory(c.slug).length} />
          </div>
        ))}
      </div>
    </div>
  );
}
