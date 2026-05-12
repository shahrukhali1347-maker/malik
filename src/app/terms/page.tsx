import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms under which you may use ToolStack.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-14 pb-20">
      <header className="anim-rise">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
          Legal
        </span>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-[var(--muted)]">Last updated: April 12, 2025</p>
      </header>

      <div className="mt-10 space-y-8 text-[var(--fg-soft)]">
        <Section title="1. Agreement">
          <p>
            By accessing ToolStack you agree to these terms. If you don&apos;t
            agree, please stop using the site.
          </p>
        </Section>

        <Section title="2. Use of the site">
          <p>
            You may browse, search, and link to listings for personal and
            commercial purposes. You may not scrape the site in bulk, attempt
            to disrupt service, or post content that&apos;s unlawful,
            misleading, or infringing.
          </p>
        </Section>

        <Section title="3. Listings">
          <p>
            Every tool on ToolStack is described to the best of our knowledge,
            but listings are informational and may not be up to date. Always
            check the tool&apos;s own site before making a purchase decision.
          </p>
        </Section>

        <Section title="4. Submissions">
          <p>
            When you submit a tool, a review, or feedback, you grant ToolStack
            a non-exclusive, royalty-free license to use, edit, and publish
            that content on the site.
          </p>
        </Section>

        <Section title="5. Third-party links">
          <p>
            We link out to many third-party websites. We aren&apos;t responsible
            for their content, terms, or practices. Visit them at your own
            discretion.
          </p>
        </Section>

        <Section title="6. Disclaimers">
          <p>
            ToolStack is provided &quot;as is&quot; without warranties of any
            kind. We do our best to keep things accurate and online, but we
            don&apos;t guarantee uptime, accuracy, or fitness for a particular
            purpose.
          </p>
        </Section>

        <Section title="7. Liability">
          <p>
            To the maximum extent permitted by law, ToolStack and its team
            won&apos;t be liable for indirect, incidental, or consequential
            damages arising from your use of the site.
          </p>
        </Section>

        <Section title="8. Changes to these terms">
          <p>
            We may update these terms occasionally. We&apos;ll post the new
            version here with an updated date. Continued use of the site
            means you accept the changes.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>
            Questions about these terms? Reach us via the
            <a href="/contact" className="text-[var(--brand)] underline"> contact form</a>.
          </p>
        </Section>

        <p className="text-xs text-[var(--muted)]">
          This is a placeholder document for a demo site. It is not legal advice.
        </p>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold text-[var(--fg)]">{title}</h2>
      <div className="space-y-2 text-[var(--fg-soft)]">{children}</div>
    </section>
  );
}
