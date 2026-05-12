"use client";
import { useMemo, useState, useEffect } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

const sortOptions = [
  { value: "popular", label: "Most popular" },
  { value: "rating", label: "Top rated" },
  { value: "trending", label: "Trending" },
  { value: "name", label: "A → Z" },
];

const pricings = ["Free", "Freemium", "Paid"] as const;

export function ToolsExplorer({
  initialQuery = "",
  initialCategory = "",
  initialPricing = "",
  initialSort = "popular",
}: {
  initialQuery?: string;
  initialCategory?: string;
  initialPricing?: string;
  initialSort?: string;
}) {
  const [q, setQ] = useState(initialQuery);
  const [cat, setCat] = useState(initialCategory);
  const [pricing, setPricing] = useState<string>(initialPricing);
  const [sort, setSort] = useState(initialSort);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setQ(initialQuery);
    setCat(initialCategory);
    setPricing(initialPricing);
    setSort(initialSort);
  }, [initialQuery, initialCategory, initialPricing, initialSort]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    let list = tools.filter((t) => {
      if (cat && t.category !== cat) return false;
      if (pricing && t.pricing !== pricing) return false;
      if (!term) return true;
      const hay = `${t.name} ${t.tagline} ${t.description} ${t.tags.join(" ")} ${t.category}`.toLowerCase();
      return hay.includes(term);
    });
    list = [...list];
    switch (sort) {
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "trending":
        list.sort((a, b) => Number(b.trending) - Number(a.trending) || b.reviews - a.reviews);
        break;
      default:
        list.sort((a, b) => b.reviews - a.reviews);
    }
    return list;
  }, [q, cat, pricing, sort]);

  const reset = () => {
    setQ("");
    setCat("");
    setPricing("");
    setSort("popular");
  };

  const activeCount = [q, cat, pricing].filter(Boolean).length;

  return (
    <div className="mx-auto max-w-6xl px-5 pt-12 pb-20">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">All tools</h1>
          <p className="mt-1 text-[var(--fg-soft)]">
            {filtered.length} of {tools.length} tools
            {cat && ` · ${categories.find((c) => c.slug === cat)?.name}`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search tools…"
              className="w-full rounded-full border border-[var(--border)] bg-[var(--surface)] py-2.5 pl-9 pr-4 text-sm outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/30 md:w-72"
            />
          </div>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
            {activeCount > 0 && (
              <span className="rounded-full bg-[var(--brand)] px-1.5 py-0.5 text-[10px] font-semibold text-white">
                {activeCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[240px_1fr]">
        <aside
          className={cn(
            "space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 md:sticky md:top-20 md:h-fit",
            !mobileFiltersOpen && "hidden md:block",
          )}
        >
          <FilterGroup label="Sort by">
            <div className="flex flex-col gap-1">
              {sortOptions.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => setSort(o.value)}
                  className={cn(
                    "rounded-md px-2 py-1.5 text-left text-sm transition",
                    sort === o.value
                      ? "bg-[var(--brand-soft)] font-medium text-[var(--brand-strong)]"
                      : "text-[var(--fg-soft)] hover:bg-[var(--bg-soft)]",
                  )}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup label="Category">
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => setCat("")}
                className={cn(
                  "rounded-md px-2 py-1.5 text-left text-sm transition",
                  !cat
                    ? "bg-[var(--brand-soft)] font-medium text-[var(--brand-strong)]"
                    : "text-[var(--fg-soft)] hover:bg-[var(--bg-soft)]",
                )}
              >
                All categories
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCat(c.slug)}
                  className={cn(
                    "rounded-md px-2 py-1.5 text-left text-sm transition",
                    cat === c.slug
                      ? "bg-[var(--brand-soft)] font-medium text-[var(--brand-strong)]"
                      : "text-[var(--fg-soft)] hover:bg-[var(--bg-soft)]",
                  )}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup label="Pricing">
            <div className="flex flex-wrap gap-1.5">
              <Chip active={!pricing} onClick={() => setPricing("")}>All</Chip>
              {pricings.map((p) => (
                <Chip key={p} active={pricing === p} onClick={() => setPricing(p)}>
                  {p}
                </Chip>
              ))}
            </div>
          </FilterGroup>

          {activeCount > 0 && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1 text-xs font-medium text-[var(--fg-soft)] hover:text-[var(--brand)]"
            >
              <X className="h-3 w-3" /> Reset all
            </button>
          )}
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-12 text-center">
              <p className="text-lg font-medium">No tools matched your filters.</p>
              <p className="mt-1 text-sm text-[var(--fg-soft)]">
                Try clearing one or two filters or searching for something different.
              </p>
              <button
                onClick={reset}
                className="mt-5 inline-flex items-center rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
        {label}
      </p>
      {children}
    </div>
  );
}

function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-xs font-medium transition",
        active
          ? "border-[var(--brand)] bg-[var(--brand)] text-white"
          : "border-[var(--border)] bg-[var(--surface)] text-[var(--fg-soft)] hover:border-[var(--brand)] hover:text-[var(--brand)]",
      )}
    >
      {children}
    </button>
  );
}
