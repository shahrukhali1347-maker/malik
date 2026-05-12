import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { ToolCard } from "@/components/ToolCard";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import { featuredTools, getToolsByCategory, tools, trendingTools } from "@/data/tools";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <SectionHead
          kicker="Featured"
          title="Editor-picked tools you should know"
          description="A rotating selection of the most useful tools across every category."
          linkHref="/tools?featured=true"
          linkLabel="See all featured"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.slice(0, 6).map((t, i) => (
            <div key={t.id} className={`anim-rise delay-${(i % 6) + 1}`}>
              <ToolCard tool={t} />
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <SectionHead
          kicker="Browse"
          title="Explore by category"
          description="Five focused categories. Every tool is hand-checked before it gets in."
          linkHref="/categories"
          linkLabel="All categories"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <div key={c.id} className={`anim-rise delay-${(i % 6) + 1}`}>
              <CategoryCard category={c} count={getToolsByCategory(c.slug).length} />
            </div>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <SectionHead
          kicker="Trending"
          title="What people are checking out this week"
          description="Pulled from clicks, bookmarks, and saves across the directory."
          linkHref="/tools?sort=trending"
          linkLabel="See more"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trendingTools.slice(0, 6).map((t, i) => (
            <div key={t.id} className={`anim-rise delay-${(i % 6) + 1}`}>
              <ToolCard tool={t} />
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "Hand-picked, not crowdsourced",
              copy: "Every tool is reviewed by a real human before it shows up here. No pay-to-play.",
            },
            {
              icon: Compass,
              title: "Made for discovery",
              copy: "Smart filters, clear pricing badges, and tags that help you find the right fit faster.",
            },
            {
              icon: ShieldCheck,
              title: "No tracking, no nags",
              copy: "We don't sell your email or run intrusive popups. Browse in peace.",
            },
          ].map((b, i) => (
            <div
              key={b.title}
              className={`anim-rise delay-${i + 1} rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6`}
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand-strong)]">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-[var(--fg-soft)]">{b.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <Stats />

      {/* Recently added strip */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <SectionHead
          kicker="Fresh"
          title="Recently added"
          description="The latest additions to the directory — straight off the bench."
          linkHref="/tools"
          linkLabel="View all"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.slice(-8).reverse().map((t, i) => (
            <div key={t.id} className={`anim-rise delay-${(i % 6) + 1}`}>
              <ToolCard tool={t} compact />
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}

function SectionHead({
  kicker,
  title,
  description,
  linkHref,
  linkLabel,
}: {
  kicker: string;
  title: string;
  description: string;
  linkHref: string;
  linkLabel: string;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
          {kicker}
        </span>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-[var(--fg-soft)]">{description}</p>
      </div>
      <Link
        href={linkHref}
        className="under inline-flex items-center gap-1 text-sm font-medium text-[var(--brand)]"
      >
        {linkLabel} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
