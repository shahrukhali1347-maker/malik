import { Boxes, Layers3, Star, Users } from "lucide-react";

const stats = [
  { icon: Boxes, label: "AI tools listed", value: "50+" },
  { icon: Layers3, label: "Categories", value: "5" },
  { icon: Star, label: "Avg. rating", value: "4.5" },
  { icon: Users, label: "Monthly visitors", value: "120k" },
];

export function Stats() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-soft)]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden bg-[var(--border)] md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4 bg-[var(--bg-soft)] px-6 py-8">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--surface)] text-[var(--brand)]">
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
              <div className="text-xs text-[var(--muted)]">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
