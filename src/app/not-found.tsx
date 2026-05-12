import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-strong)]">
        <Compass className="h-7 w-7" />
      </div>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight">Not found</h1>
      <p className="mt-3 text-[var(--fg-soft)]">
        The page you&apos;re looking for doesn&apos;t exist (anymore). Try the
        directory or head back home.
      </p>
      <div className="mt-6 flex items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm"
        >
          <ArrowLeft className="h-4 w-4" /> Home
        </Link>
        <Link
          href="/tools"
          className="rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white"
        >
          Browse tools
        </Link>
      </div>
    </div>
  );
}
