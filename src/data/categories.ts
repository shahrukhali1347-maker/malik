import type { Category } from "./types";

export const categories: Category[] = [
  {
    id: "cat-productivity",
    slug: "productivity",
    name: "Productivity",
    tagline: "Get more done, faster",
    description:
      "Task managers, note-taking apps, calendars, and focus tools that help you organize work and reclaim your day.",
    icon: "Zap",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: "cat-design",
    slug: "design",
    name: "Design",
    tagline: "Craft beautiful things",
    description:
      "Interface builders, prototyping suites, illustration apps, and asset libraries for designers of every level.",
    icon: "Palette",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: "cat-development",
    slug: "development",
    name: "Development",
    tagline: "Ship better software",
    description:
      "Code editors, deployment platforms, debugging utilities, and APIs that make engineering teams more effective.",
    icon: "Code2",
    color: "from-sky-400 to-indigo-500",
  },
  {
    id: "cat-marketing",
    slug: "marketing",
    name: "Marketing",
    tagline: "Grow your audience",
    description:
      "Email platforms, social schedulers, SEO suites, and ad managers that turn campaigns into measurable results.",
    icon: "Megaphone",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: "cat-analytics",
    slug: "analytics",
    name: "Analytics",
    tagline: "Decisions backed by data",
    description:
      "Dashboards, BI suites, event trackers, and visualization tools that surface the signals hidden in your data.",
    icon: "BarChart3",
    color: "from-violet-400 to-purple-500",
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
