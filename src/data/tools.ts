import type { Tool } from "./types";

const accents = [
  "bg-emerald-500",
  "bg-amber-500",
  "bg-sky-500",
  "bg-pink-500",
  "bg-violet-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-indigo-500",
  "bg-rose-500",
  "bg-purple-500",
];

const seed = (name: string) =>
  accents[Math.abs([...name].reduce((a, c) => a + c.charCodeAt(0), 0)) % accents.length];

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const make = (
  i: number,
  name: string,
  tagline: string,
  description: string,
  category: string,
  pricing: "Free" | "Freemium" | "Paid",
  rating: number,
  reviews: number,
  featured: boolean,
  trending: boolean,
  tags: string[],
): Tool => ({
  id: `tool-${i.toString().padStart(3, "0")}`,
  slug: name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),
  name,
  tagline,
  description,
  category,
  pricing,
  rating,
  reviews,
  featured,
  trending,
  tags,
  initials: initials(name),
  accent: seed(name),
});

export const tools: Tool[] = [
  // Productivity (10)
  make(1, "TaskFlow", "Smart task management", "Organize projects, deadlines, and team workloads in a single canvas with drag-and-drop boards and natural language input.", "productivity", "Freemium", 4.7, 1240, true, true, ["kanban", "teams", "remote"]),
  make(2, "Notewise", "Notes that connect ideas", "A linked notes workspace with daily journals, bi-directional references, and a clean writing surface that gets out of the way.", "productivity", "Free", 4.6, 982, true, false, ["notes", "writing", "knowledge"]),
  make(3, "Calendrr", "Calendar built for focus", "Time-block your day, batch meetings, and protect deep work with intelligent scheduling that learns your routine.", "productivity", "Freemium", 4.5, 651, false, true, ["calendar", "focus", "scheduling"]),
  make(4, "Dailygrid", "A friendlier habit tracker", "Visual streaks, gentle nudges, and weekly reviews that turn small daily wins into long-term consistency.", "productivity", "Free", 4.4, 412, false, false, ["habits", "wellness"]),
  make(5, "Quickbase", "All-in-one workspace", "Docs, tasks, wikis, and lightweight databases living together so your team stops jumping between tabs.", "productivity", "Paid", 4.3, 2103, true, false, ["docs", "wiki", "teams"]),
  make(6, "Pomofly", "Focus timer reimagined", "Pomodoro sessions with ambient soundscapes, distraction blocking, and gentle session analytics.", "productivity", "Free", 4.6, 380, false, true, ["focus", "timer"]),
  make(7, "InboxZero+", "Email triage on autopilot", "Smart sorting, snoozing, and one-click templates that bring your inbox down to a flat line every morning.", "productivity", "Freemium", 4.2, 877, false, false, ["email", "triage"]),
  make(8, "Stickyboard", "Visual brainstorming canvas", "Infinite whiteboard with sticky notes, voting, and templates for retrospectives, planning, and ideation.", "productivity", "Freemium", 4.5, 1320, true, false, ["whiteboard", "ideation", "remote"]),
  make(9, "Meetly", "Meetings that respect time", "Agendas, action items, and async recordings so meetings stay short and outcomes stay clear.", "productivity", "Paid", 4.4, 540, false, true, ["meetings", "async"]),
  make(10, "Tabby", "Bookmark manager rebuilt", "Visual collections, smart search, and tab grouping that turn chaos into a tidy library you can actually find.", "productivity", "Free", 4.1, 295, false, false, ["bookmarks", "tabs"]),

  // Design (10)
  make(11, "Pixelpad", "Interface design, simplified", "Vector editing, auto-layout, and component libraries built for product teams who ship every week.", "design", "Freemium", 4.8, 3120, true, true, ["ui", "vector", "components"]),
  make(12, "Moodbox", "Curate visual inspiration", "Collect, tag, and share moodboards with your team — pulled from anywhere on the web with one click.", "design", "Free", 4.5, 720, false, true, ["moodboard", "inspiration"]),
  make(13, "Strokely", "Vector illustration suite", "Hand-feel brushes, smart shapes, and a library of illustration kits for marketers, founders, and designers.", "design", "Paid", 4.6, 980, true, false, ["illustration", "vector"]),
  make(14, "Framelab", "Prototype like it's shipping", "High-fidelity prototypes with conditional logic, variables, and shared component libraries.", "design", "Freemium", 4.7, 1450, true, false, ["prototype", "ui"]),
  make(15, "Iconette", "Icons that match your brand", "A growing library of customizable icon sets with stroke, fill, and animation variants.", "design", "Freemium", 4.4, 510, false, false, ["icons", "assets"]),
  make(16, "Huely", "Color palettes, automated", "Generate, test, and lock in accessible color palettes that pass contrast checks in seconds.", "design", "Free", 4.3, 340, false, true, ["color", "palette"]),
  make(17, "Fontkit", "Type pairing made easy", "Browse, compare, and license web fonts with live preview against your real content.", "design", "Freemium", 4.5, 612, false, false, ["typography", "fonts"]),
  make(18, "Sketchbook X", "Sketch wherever you are", "Cross-device drawing canvas with pressure sensitivity, layers, and cloud sync between desktop and tablet.", "design", "Paid", 4.6, 1180, false, false, ["drawing", "art"]),
  make(19, "Mockstage", "Device mockups in seconds", "Drop a screenshot, pick a device, ship a hero image. No Photoshop required.", "design", "Free", 4.2, 295, false, true, ["mockup", "marketing"]),
  make(20, "Layerly", "Design tokens that ship", "Manage colors, spacing, and type as code — synced across Figma, Storybook, and production.", "design", "Paid", 4.7, 430, true, false, ["tokens", "system"]),

  // Development (10)
  make(21, "Codebox", "Cloud IDE for fast loops", "A browser-based dev environment with instant previews, port forwarding, and shareable workspaces.", "development", "Freemium", 4.6, 2100, true, true, ["ide", "cloud"]),
  make(22, "Shipline", "Deploy without the drama", "Zero-config deployments with preview URLs, rollbacks, and edge caching built in.", "development", "Freemium", 4.7, 1860, true, true, ["deploy", "edge"]),
  make(23, "Bugflare", "Error tracking that explains", "Stack traces with source maps, breadcrumbs, and release context — wired into your team's existing chat.", "development", "Paid", 4.5, 720, false, false, ["errors", "monitoring"]),
  make(24, "APIscope", "Build and test APIs faster", "A collaborative API workspace with mock servers, schema diffs, and contract testing.", "development", "Freemium", 4.6, 980, true, false, ["api", "testing"]),
  make(25, "Branchly", "Code review without the noise", "Inline comments, suggestion blocks, and review queues that keep diffs small and approvals quick.", "development", "Paid", 4.4, 540, false, false, ["review", "git"]),
  make(26, "Dockmate", "Local environments, instant", "Spin up reproducible dev environments from a single config file — no more 'works on my machine'.", "development", "Free", 4.3, 410, false, true, ["docker", "devops"]),
  make(27, "Querykit", "Database GUI, finally good", "A fast SQL client with schema visualization, AI explanations, and team-friendly query sharing.", "development", "Freemium", 4.7, 1240, false, true, ["sql", "database"]),
  make(28, "Pingmon", "Uptime monitoring done right", "Synthetic checks from a global mesh with clear incident timelines and on-call routing.", "development", "Paid", 4.5, 660, false, false, ["monitoring", "uptime"]),
  make(29, "Snippetly", "Searchable code library", "Save, tag, and share snippets across your team with syntax highlighting and version history.", "development", "Free", 4.2, 230, false, false, ["snippets", "team"]),
  make(30, "Loadbench", "Performance tests without setup", "Spin up realistic load scenarios in minutes and watch latency budgets live as code ships.", "development", "Paid", 4.4, 380, false, false, ["performance", "testing"]),

  // Marketing (10)
  make(31, "Sendwave", "Email campaigns that convert", "Visual builder, smart segments, and pre-built journeys for product-led companies.", "marketing", "Freemium", 4.6, 1840, true, true, ["email", "automation"]),
  make(32, "Postpilot", "Social scheduling, simplified", "Plan, draft, and schedule across networks with previews that match each platform exactly.", "marketing", "Freemium", 4.4, 990, false, true, ["social", "scheduling"]),
  make(33, "Rankforge", "SEO without the bloat", "Keyword research, content briefs, and rank tracking in a workspace your team will actually open.", "marketing", "Paid", 4.5, 720, true, false, ["seo", "content"]),
  make(34, "Adpilot", "Ad campaigns on autopilot", "Cross-channel creative testing, audience routing, and budget pacing with real-time alerts.", "marketing", "Paid", 4.3, 540, false, false, ["ads", "ppc"]),
  make(35, "Funneline", "Landing pages that ship today", "Drag-and-drop pages with smart blocks, A/B testing, and built-in form analytics.", "marketing", "Freemium", 4.5, 870, true, false, ["landing", "conversion"]),
  make(36, "Linksy", "Link-in-bio, but smart", "A customizable single-link hub with click analytics, scheduling, and revenue-tracking modules.", "marketing", "Free", 4.2, 410, false, true, ["bio", "creator"]),
  make(37, "Refermint", "Referral programs in a day", "Plug-and-play referral widgets, reward logic, and fraud checks for product teams.", "marketing", "Freemium", 4.4, 320, false, false, ["referral", "growth"]),
  make(38, "Pulsebrief", "Newsletters worth subscribing to", "A focused newsletter platform with paid subscriptions, drafts, and clean reader analytics.", "marketing", "Freemium", 4.6, 660, false, false, ["newsletter", "content"]),
  make(39, "Brandkit", "Keep your brand on rails", "Central brand asset library with usage guidelines, request workflows, and approvals.", "marketing", "Paid", 4.4, 280, false, false, ["brand", "assets"]),
  make(40, "Captionly", "Social copy in seconds", "Generate, refine, and approve on-brand captions with templates tuned to each network.", "marketing", "Free", 4.1, 195, false, true, ["copy", "social"]),

  // Analytics (10)
  make(41, "Dashery", "Dashboards anyone can build", "Drag-and-drop charts, scheduled reports, and SQL-or-no-SQL data exploration for whole teams.", "analytics", "Freemium", 4.7, 1320, true, true, ["bi", "dashboard"]),
  make(42, "Eventstream", "Product analytics for builders", "Track behavior across web and mobile with cohorts, funnels, and session timelines that match.", "analytics", "Paid", 4.6, 980, true, false, ["product", "events"]),
  make(43, "Mappery", "Heatmaps and session replays", "See where users tap, scroll, and stall — without slowing down your site.", "analytics", "Freemium", 4.4, 540, false, true, ["heatmap", "replay"]),
  make(44, "Querio", "Ask your data questions", "Natural language exploration on top of your warehouse, with vetted metrics and one-click charts.", "analytics", "Paid", 4.5, 410, true, false, ["nlq", "warehouse"]),
  make(45, "Reportly", "Scheduled reports that arrive", "Automated PDF and Slack reports with annotations, alerts, and audience-specific views.", "analytics", "Freemium", 4.3, 320, false, false, ["reports", "automation"]),
  make(46, "Pulsemetric", "Live KPIs on a wall", "TV-ready dashboards with goal tracking, anomaly highlights, and a clean dark theme.", "analytics", "Paid", 4.2, 240, false, false, ["kpi", "dashboard"]),
  make(47, "Funnelly", "Conversion funnels, clearly", "Build and compare funnels across segments without writing SQL or filing a ticket.", "analytics", "Freemium", 4.5, 660, false, true, ["funnel", "conversion"]),
  make(48, "Tracelog", "Server-side analytics", "Privacy-first event collection with a tiny tag, clean schemas, and warehouse exports.", "analytics", "Free", 4.6, 380, false, true, ["privacy", "events"]),
  make(49, "Cohortly", "Retention without spreadsheets", "Visual cohort tables, retention curves, and lifetime value calcs from your existing event data.", "analytics", "Paid", 4.4, 290, false, false, ["retention", "ltv"]),
  make(50, "Northbeam", "Marketing attribution unlocked", "Multi-touch attribution that blends platform data with your own — finally a number you can defend.", "analytics", "Paid", 4.5, 410, true, false, ["attribution", "marketing"]),
];

export const getTool = (slug: string) => tools.find((t) => t.slug === slug);
export const getToolsByCategory = (category: string) =>
  tools.filter((t) => t.category === category);
export const featuredTools = tools.filter((t) => t.featured);
export const trendingTools = tools.filter((t) => t.trending);
