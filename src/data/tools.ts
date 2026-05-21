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
  // Productivity — AI assistants for getting work done (10)
  make(1, "NoteGenie", "AI note-taking that thinks with you", "Capture meetings, ideas, and to-dos, then let AI summarize, tag, and surface what matters across your whole workspace.", "productivity", "Freemium", 4.7, 1840, true, true, ["ai-notes", "summaries", "teams"]),
  make(2, "MeetScribe AI", "Meeting notes on autopilot", "Joins your calls, transcribes in real time, and ships clean summaries with action items and owners minutes after you hang up.", "productivity", "Freemium", 4.6, 2210, true, true, ["transcription", "meetings", "ai"]),
  make(3, "InboxPilot", "AI co-pilot for your inbox", "Drafts replies in your voice, triages by priority, and clears your inbox to zero with one-click smart actions.", "productivity", "Freemium", 4.5, 980, false, true, ["email", "ai-assistant"]),
  make(4, "TaskMind", "AI that plans your day", "Reads your tasks, deadlines, and energy patterns, then builds a realistic daily plan you can actually finish.", "productivity", "Free", 4.4, 612, false, false, ["planning", "ai", "focus"]),
  make(5, "DocDraft AI", "From prompt to polished doc", "Generate briefs, specs, and reports from a one-line prompt — then refine with inline AI editing and tone controls.", "productivity", "Paid", 4.5, 1430, true, false, ["ai-writing", "docs"]),
  make(6, "FocusFlow AI", "An AI coach for deep work", "Blocks distractions, paces your sessions, and nudges you with AI insights drawn from how you actually work.", "productivity", "Free", 4.6, 540, false, true, ["focus", "ai-coach"]),
  make(7, "ClipBrain", "Your AI second brain", "Save anything — links, snippets, screenshots — and ask questions in plain language to get instant answers back.", "productivity", "Freemium", 4.3, 720, false, false, ["knowledge", "ai-search"]),
  make(8, "PlanPilot", "AI project planning, simplified", "Describe a goal and watch AI break it into milestones, tasks, and a timeline your team can ship against.", "productivity", "Paid", 4.4, 880, true, false, ["projects", "ai", "teams"]),
  make(9, "VoiceMemo AI", "Speak it, AI sorts it", "Talk through ideas on the go — AI transcribes, structures, and routes each thought to the right list or doc.", "productivity", "Free", 4.2, 360, false, false, ["voice", "ai", "capture"]),
  make(10, "SummarAI", "Read less, understand more", "Drop in an article, PDF, or video and get a tight AI summary with key points, quotes, and takeaways.", "productivity", "Freemium", 4.5, 1290, false, true, ["summaries", "ai", "research"]),

  // Design — generative & AI-assisted creative tools (10)
  make(11, "PixelForge AI", "Text-to-image, studio quality", "Generate on-brand images, product shots, and concept art from a prompt — with style presets and instant variations.", "design", "Freemium", 4.8, 4120, true, true, ["image-generation", "ai-art"]),
  make(12, "Mockingbird AI", "AI mockups in seconds", "Turn a screenshot or prompt into polished device and scene mockups — no Photoshop, no manual masking.", "design", "Free", 4.5, 760, false, true, ["mockups", "ai"]),
  make(13, "LogoLume", "AI logo & brand mark maker", "Describe your brand and get dozens of editable logo directions, complete with color and type pairings.", "design", "Freemium", 4.4, 1020, true, false, ["logo", "branding", "ai"]),
  make(14, "ColorMind AI", "Palettes generated for you", "Generate accessible, on-trend color palettes from a vibe, an image, or a single seed color in one click.", "design", "Free", 4.3, 410, false, true, ["color", "ai", "palette"]),
  make(15, "VectorBot", "AI vector illustration suite", "Generate clean, editable vector illustrations and icon sets in a consistent style from plain-text prompts.", "design", "Paid", 4.6, 1180, true, false, ["illustration", "ai-art", "vector"]),
  make(16, "UIGenie", "Prompt your interface into being", "Describe a screen and get a responsive, component-based UI you can tweak, theme, and export to code.", "design", "Freemium", 4.7, 1640, true, true, ["ui", "ai", "generation"]),
  make(17, "PhotoPolish AI", "One-click AI photo editing", "Remove backgrounds, upscale, relight, and retouch photos automatically — batch-ready for whole shoots.", "design", "Freemium", 4.5, 2230, false, true, ["photo-editing", "ai"]),
  make(18, "FontPair AI", "AI typography assistant", "Get font pairings and type scales that fit your brand, previewed live against your real content.", "design", "Free", 4.2, 320, false, false, ["typography", "ai", "fonts"]),
  make(19, "SceneCraft AI", "Generative 3D scenes", "Generate and stage 3D scenes from text, then export render-ready assets for product and marketing visuals.", "design", "Paid", 4.4, 540, false, false, ["3d", "ai", "render"]),
  make(20, "BrandBot", "AI brand kits, instantly", "Feed it a name and a vibe — get a full starter brand kit: logo, palette, type, and voice guidelines.", "design", "Paid", 4.6, 470, true, false, ["branding", "ai", "kit"]),

  // Development — AI coding & engineering tools (10)
  make(21, "CodePilot X", "Your AI pair programmer", "Autocompletes whole functions, explains unfamiliar code, and writes tests — right inside your editor.", "development", "Freemium", 4.8, 5240, true, true, ["ai-coding", "autocomplete"]),
  make(22, "BugSeer AI", "AI that finds the root cause", "Reads stack traces, logs, and recent diffs, then points to the exact line and suggests a fix.", "development", "Paid", 4.6, 1280, true, true, ["debugging", "ai"]),
  make(23, "ReviewBot AI", "AI code review on every PR", "Catches bugs, security issues, and style drift with clear, inline suggestions before a human even looks.", "development", "Freemium", 4.5, 940, false, true, ["code-review", "ai"]),
  make(24, "DocStringer", "AI docs for your codebase", "Generates accurate docstrings, READMEs, and API references that stay in sync as your code changes.", "development", "Free", 4.3, 380, false, false, ["documentation", "ai"]),
  make(25, "TestForge AI", "Tests written by AI", "Generates meaningful unit and integration tests with real edge cases — not just coverage padding.", "development", "Freemium", 4.4, 660, false, false, ["testing", "ai"]),
  make(26, "QueryMind", "Talk to your database", "Ask questions in plain English and get correct, optimized SQL with an explanation of every clause.", "development", "Freemium", 4.7, 1520, true, true, ["sql", "ai", "database"]),
  make(27, "RefactorAI", "AI-guided refactoring", "Spots duplication and complexity, then proposes safe, reviewable refactors across your whole repo.", "development", "Paid", 4.4, 520, false, false, ["refactoring", "ai"]),
  make(28, "StackSage", "An AI expert for your stack", "Ask architecture and debugging questions and get answers grounded in your actual codebase and docs.", "development", "Freemium", 4.5, 870, false, true, ["ai-assistant", "devtools"]),
  make(29, "DeployBrain", "AI for your DevOps", "Predicts risky deploys, explains pipeline failures, and recommends fixes before things break in prod.", "development", "Paid", 4.3, 410, false, false, ["devops", "ai", "ci-cd"]),
  make(30, "SchemaGen AI", "Generate APIs from a prompt", "Describe a resource and get a typed schema, endpoints, validation, and mock data ready to build on.", "development", "Free", 4.2, 290, false, false, ["api", "ai", "schema"]),

  // Marketing — AI content & growth tools (10)
  make(31, "CopyCraft AI", "On-brand copy in seconds", "Generate landing pages, ads, and emails that sound like your brand — trained on your voice and offers.", "marketing", "Freemium", 4.6, 3210, true, true, ["ai-copywriting", "content"]),
  make(32, "AdGenius", "AI ad creative that converts", "Generates and tests headlines, visuals, and angles across channels, then doubles down on what works.", "marketing", "Paid", 4.4, 1140, true, false, ["ads", "ai", "creative"]),
  make(33, "SocialPilot AI", "AI social content engine", "Plan, draft, and schedule a month of on-brand posts from a single prompt — tuned per platform.", "marketing", "Freemium", 4.5, 1680, false, true, ["social", "ai", "scheduling"]),
  make(34, "SEOSage", "AI SEO that ranks", "Keyword research, AI content briefs, and on-page suggestions in one workspace your team will actually use.", "marketing", "Paid", 4.5, 920, true, true, ["seo", "ai", "content"]),
  make(35, "MailMind", "AI email campaigns", "Write, segment, and optimize email journeys with AI that learns what your audience opens and clicks.", "marketing", "Freemium", 4.4, 760, false, false, ["email", "ai", "automation"]),
  make(36, "ScriptSpark AI", "AI scripts for short video", "Turn a topic into hook-first scripts for Reels, Shorts, and TikTok — with scene notes and captions.", "marketing", "Free", 4.3, 540, false, true, ["video", "ai", "scripts"]),
  make(37, "PersonaForge", "AI audience research", "Build data-backed buyer personas and messaging angles in minutes instead of weeks of interviews.", "marketing", "Freemium", 4.2, 330, false, false, ["research", "ai", "personas"]),
  make(38, "BlogBot AI", "Long-form content, drafted fast", "Generate researched, well-structured blog drafts with sources, then refine with AI editing tools.", "marketing", "Freemium", 4.5, 1290, false, false, ["ai-writing", "blog", "seo"]),
  make(39, "TrendRadar AI", "Spot trends before they peak", "AI scans social, search, and news to surface emerging topics your brand should jump on now.", "marketing", "Paid", 4.4, 280, true, false, ["trends", "ai", "research"]),
  make(40, "CaptionCraft AI", "AI captions & hashtags", "Generate scroll-stopping captions and smart hashtag sets tuned to each platform and post.", "marketing", "Free", 4.1, 410, false, true, ["captions", "ai", "social"]),

  // Analytics — AI data & insight tools (10)
  make(41, "InsightGPT", "Chat with your data", "Ask questions in plain language and get charts, trends, and clear explanations from your live data.", "analytics", "Freemium", 4.7, 2140, true, true, ["ai-analytics", "nlq"]),
  make(42, "DashMind AI", "AI builds your dashboards", "Describe what you want to track and AI assembles a clean, accurate dashboard from your data sources.", "analytics", "Paid", 4.6, 980, true, false, ["dashboards", "ai", "bi"]),
  make(43, "PredictFlow", "AI forecasting for everyone", "Generate revenue, demand, and growth forecasts with AI models — no data science team required.", "analytics", "Paid", 4.5, 620, true, true, ["forecasting", "ai", "ml"]),
  make(44, "ChartGenie", "Prompt-to-chart, instantly", "Turn a question or a CSV into the right visualization automatically, styled and ready to share.", "analytics", "Free", 4.3, 450, false, true, ["charts", "ai", "viz"]),
  make(45, "AnomalyAI", "AI watches your metrics", "Continuously scans your KPIs and alerts you the moment something drifts — with a likely cause attached.", "analytics", "Freemium", 4.4, 540, false, false, ["monitoring", "ai", "alerts"]),
  make(46, "QueryPilot", "Natural-language analytics", "Let anyone on the team explore data by typing a question — governed metrics, no SQL needed.", "analytics", "Paid", 4.5, 710, false, true, ["nlq", "ai", "self-serve"]),
  make(47, "ReportBot AI", "AI writes your reports", "Auto-generates narrative reports that explain what changed, why it matters, and what to do next.", "analytics", "Freemium", 4.3, 360, false, false, ["reports", "ai", "automation"]),
  make(48, "SegmentMind", "AI customer segmentation", "Discovers meaningful customer segments automatically and explains what makes each one tick.", "analytics", "Paid", 4.4, 290, true, false, ["segmentation", "ai", "crm"]),
  make(49, "ChurnSeer AI", "Predict churn before it happens", "Scores every account for churn risk and surfaces the signals — so success teams act in time.", "analytics", "Paid", 4.5, 380, false, true, ["churn", "ai", "retention"]),
  make(50, "MetricMuse", "An AI analyst on call", "Ask about any KPI and get an instant, sourced answer with trends, drivers, and recommended actions.", "analytics", "Freemium", 4.6, 660, true, true, ["ai-analyst", "kpi"]),
];

export const getTool = (slug: string) => tools.find((t) => t.slug === slug);
export const getToolsByCategory = (category: string) =>
  tools.filter((t) => t.category === category);
export const featuredTools = tools.filter((t) => t.featured);
export const trendingTools = tools.filter((t) => t.trending);
