import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BarChart3, Code2, Megaphone, Palette, Zap } from "lucide-react";
import { categories, getCategory } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import { cn } from "@/lib/utils";

const icons = { Zap, Palette, Code2, Megaphone, BarChart3 };

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return {};
  return { title: cat.name, description: cat.description };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();
  const list = getToolsByCategory(cat.slug);
  const Icon = icons[cat.icon as keyof typeof icons] ?? Zap;

  return (
    <div className="mx-auto max-w-6xl px-5 pt-10 pb-20">
      <Link
        href="/categories"
        className="inline-flex items-center gap-1 text-sm text-[var(--fg-soft)] hover:text-[var(--brand)]"
      >
        <ArrowLeft className="h-4 w-4" /> All categories
      </Link>

      <header className="anim-rise relative mt-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
        <div
          className={cn(
            "absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br opacity-30 blur-2xl",
            cat.color,
          )}
        />
        <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br text-white shadow-sm",
                  cat.color,
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                Category
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {cat.name}
            </h1>
            <p className="mt-2 text-lg text-[var(--fg-soft)]">{cat.tagline}</p>
            <p className="mt-3 max-w-2xl text-[var(--fg-soft)]">{cat.description}</p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-4 text-center md:min-w-[140px]">
            <div className="text-3xl font-semibold">{list.length}</div>
            <div className="text-xs text-[var(--muted)]">tools listed</div>
          </div>
        </div>
      </header>

      <div className="mt-10 flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">All {cat.name.toLowerCase()} tools</h2>
        <Link
          href={`/tools?category=${cat.slug}`}
          className="text-sm font-medium text-[var(--brand)] hover:underline"
        >
          Open in explorer →
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t, i) => (
          <div key={t.id} className={`anim-rise delay-${(i % 6) + 1}`}>
            <ToolCard tool={t} />
          </div>
        ))}
      </div>
    </div>
  );
}
