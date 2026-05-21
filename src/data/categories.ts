import type { Category } from "./types";

export const categories: Category[] = [
  {
    id: "cat-productivity",
    slug: "productivity",
    name: "Productivity",
    tagline: "AI that gets work done",
    description:
      "AI note-takers, meeting assistants, inbox copilots, and planners that handle the busywork so you can focus on what matters.",
    icon: "Zap",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: "cat-design",
    slug: "design",
    name: "Design",
    tagline: "Generative creative tools",
    description:
      "Text-to-image generators, AI mockup and logo makers, photo editors, and UI builders for designers of every level.",
    icon: "Palette",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: "cat-development",
    slug: "development",
    name: "Development",
    tagline: "AI for engineers",
    description:
      "AI pair programmers, code reviewers, debuggers, and database copilots that help teams ship better software faster.",
    icon: "Code2",
    color: "from-sky-400 to-indigo-500",
  },
  {
    id: "cat-marketing",
    slug: "marketing",
    name: "Marketing",
    tagline: "AI-powered growth",
    description:
      "AI copywriters, ad creative generators, social schedulers, and SEO assistants that turn campaigns into measurable results.",
    icon: "Megaphone",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: "cat-analytics",
    slug: "analytics",
    name: "Analytics",
    tagline: "AI insight, on demand",
    description:
      "Chat-with-your-data tools, AI dashboards, forecasting engines, and anomaly detectors that surface the signals in your data.",
    icon: "BarChart3",
    color: "from-violet-400 to-purple-500",
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
