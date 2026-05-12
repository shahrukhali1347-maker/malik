import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ToolStack collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-14 pb-20">
      <header className="anim-rise">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
          Legal
        </span>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-[var(--muted)]">Last updated: April 12, 2025</p>
      </header>

      <div className="prose mt-10 space-y-8 text-[var(--fg-soft)]">
        <Section title="The short version">
          <p>
            ToolStack is a directory site. We try to collect as little data as
            possible. We don&apos;t sell your information. This page explains
            what we do collect, why, and how to ask us to delete it.
          </p>
        </Section>

        <Section title="1. Information we collect">
          <p>
            We collect three kinds of information: <strong>account
            information</strong> (only if you create an account), <strong>usage
            data</strong> (pages viewed, referrers, rough device type), and
            <strong> support messages</strong> you choose to send us.
          </p>
        </Section>

        <Section title="2. How we use it">
          <ul className="list-disc space-y-2 pl-5">
            <li>To run, improve, and secure the site.</li>
            <li>To answer your messages.</li>
            <li>To send our weekly newsletter — only if you subscribe.</li>
          </ul>
        </Section>

        <Section title="3. Cookies and analytics">
          <p>
            We use a privacy-friendly analytics tool that doesn&apos;t set
            tracking cookies or build profiles. No third-party advertising
            cookies are used on this site.
          </p>
        </Section>

        <Section title="4. Sharing">
          <p>
            We don&apos;t sell, rent, or trade personal information. We share
            data only with providers we use to run the service (hosting,
            email delivery) under strict confidentiality agreements.
          </p>
        </Section>

        <Section title="5. Your rights">
          <p>
            You can ask us to access, correct, export, or delete your data at
            any time. Send a note to <em>privacy@toolstack.example</em> and
            we&apos;ll handle it within 30 days.
          </p>
        </Section>

        <Section title="6. Children">
          <p>
            ToolStack is intended for users over 16. We don&apos;t knowingly
            collect personal information from children.
          </p>
        </Section>

        <Section title="7. Changes">
          <p>
            We&apos;ll update this page if anything changes. Material changes
            will be announced on the site at least 14 days before they take
            effect.
          </p>
        </Section>

        <Section title="8. Contact">
          <p>
            Questions? Email <em>privacy@toolstack.example</em> or use our
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
