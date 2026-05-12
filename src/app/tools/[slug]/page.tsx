import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink, Star, TrendingUp } from "lucide-react";
import { getTool, tools, getToolsByCategory } from "@/data/tools";
import { categories } from "@/data/categories";
import { ToolCard } from "@/components/ToolCard";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: tool.name,
    description: tool.description,
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const category = categories.find((c) => c.slug === tool.category);
  const related = getToolsByCategory(tool.category)
    .filter((t) => t.slug !== tool.slug)
    .slice(0, 3);

  const features = [
    "Clean, modern interface that gets out of the way",
    "Generous free tier with no credit card required",
    "Team collaboration with roles and permissions",
    "Native integrations with the apps you already use",
    "Keyboard-driven so you can stay in flow",
    "Active product team and a responsive support line",
  ];

  const plans = [
    { name: "Starter", price: "Free", tag: "For trying it out", features: ["Up to 3 projects", "1 seat", "Community support"] },
    { name: "Pro", price: "$12/mo", tag: "For individuals", features: ["Unlimited projects", "Priority support", "Integrations"], popular: true },
    { name: "Team", price: "$29/mo", tag: "For small teams", features: ["Seats up to 10", "Admin controls", "Audit log"] },
  ];

  return (
    <article className="mx-auto max-w-5xl px-5 pt-10 pb-20">
      <Link
        href="/tools"
        className="inline-flex items-center gap-1 text-sm text-[var(--fg-soft)] hover:text-[var(--brand)]"
      >
        <ArrowLeft className="h-4 w-4" /> Back to tools
      </Link>

      <header className="mt-6 flex flex-col gap-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:flex-row md:items-start md:p-8">
        <div
          className={cn(
            "grid h-20 w-20 flex-shrink-0 place-items-center rounded-2xl text-2xl font-bold text-white shadow-sm",
            tool.accent,
          )}
        >
          {tool.initials}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{tool.name}</h1>
            {tool.trending && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--brand-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-strong)]">
                <TrendingUp className="h-3 w-3" /> Trending
              </span>
            )}
          </div>
          <p className="mt-1 text-lg text-[var(--fg-soft)]">{tool.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 font-medium">
              <Star className="h-4 w-4 fill-[var(--accent)] text-[var(--accent)]" />
              {tool.rating.toFixed(1)} <span className="text-[var(--muted)]">({tool.reviews.toLocaleString()} reviews)</span>
            </span>
            <span className="text-[var(--muted)]">·</span>
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="rounded-full bg-[var(--bg-soft)] px-2 py-0.5 text-xs font-medium text-[var(--fg-soft)] hover:text-[var(--brand)]"
              >
                {category.name}
              </Link>
            )}
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
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-strong)]"
        >
          Visit site <ExternalLink className="h-4 w-4" />
        </a>
      </header>

      <section className="mt-10 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold">About {tool.name}</h2>
          <p className="mt-3 text-[var(--fg-soft)]">{tool.description}</p>
          <p className="mt-4 text-[var(--fg-soft)]">
            This is a placeholder profile in our demo directory. In a real
            listing, you&apos;d find screenshots, a feature deep-dive, recent
            changelog highlights, real customer reviews, and links to
            alternatives. The interface and data here are fictional.
          </p>

          <h3 className="mt-8 text-lg font-semibold">What people like</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm"
              >
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand)]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-semibold">Pricing</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={cn(
                  "rounded-2xl border bg-[var(--surface)] p-4",
                  p.popular ? "border-[var(--brand)] ring-2 ring-[var(--brand)]/20" : "border-[var(--border)]",
                )}
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{p.name}</p>
                  {p.popular && (
                    <span className="rounded-full bg-[var(--brand)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-2 text-2xl font-semibold">{p.price}</p>
                <p className="text-xs text-[var(--muted)]">{p.tag}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-[var(--fg-soft)]">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5">
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--brand)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              At a glance
            </h4>
            <dl className="mt-3 space-y-2 text-sm">
              <Row label="Category" value={category?.name ?? "—"} />
              <Row label="Pricing" value={tool.pricing} />
              <Row label="Rating" value={`${tool.rating.toFixed(1)} / 5`} />
              <Row label="Reviews" value={tool.reviews.toLocaleString()} />
              <Row label="Trending" value={tool.trending ? "Yes" : "No"} />
              <Row label="Featured" value={tool.featured ? "Yes" : "No"} />
            </dl>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Tags
            </h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tool.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-2.5 py-1 text-xs text-[var(--fg-soft)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold">Similar tools</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <ToolCard key={t.id} tool={t} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 last:border-0 last:pb-0">
      <dt className="text-[var(--muted)]">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
