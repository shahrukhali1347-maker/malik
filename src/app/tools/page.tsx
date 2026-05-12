import type { Metadata } from "next";
import { ToolsExplorer } from "@/components/ToolsExplorer";

export const metadata: Metadata = {
  title: "Tools",
  description: "Browse, filter, and search the full directory of 50+ tools.",
};

export default async function ToolsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const get = (k: string) => {
    const v = sp[k];
    return Array.isArray(v) ? v[0] : v ?? "";
  };
  return (
    <ToolsExplorer
      initialQuery={get("q")}
      initialCategory={get("category")}
      initialPricing={get("pricing")}
      initialSort={get("sort") || "popular"}
    />
  );
}
