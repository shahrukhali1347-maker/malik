import { tools } from "@/data/tools";
import { cn } from "@/lib/utils";

export function Marquee() {
  const row = tools.slice(0, 20);
  const doubled = [...row, ...row];
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg)] py-6">
      <p className="text-center text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
        Featured in our directory
      </p>
      <div className="marquee-mask mt-5 overflow-hidden">
        <div className="anim-marquee flex w-max gap-3">
          {doubled.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm"
            >
              <span className={cn("grid h-6 w-6 place-items-center rounded-md text-xs font-semibold text-white", t.accent)}>
                {t.initials}
              </span>
              <span className="font-medium text-[var(--fg)]">{t.name}</span>
              <span className="text-[var(--muted)]">·</span>
              <span className="text-xs text-[var(--fg-soft)]">{t.tagline}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
