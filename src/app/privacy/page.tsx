import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/marketing/page-frame";
import { Reveal } from "@/components/marketing/reveal";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/privacy",
  title: "Privacy Policy | Nolan Select Flooring",
  description:
    "How Nolan Select Flooring handles information on this website, including what the site does and does not collect.",
});

const effectiveDate = "August 27, 2026";

export default function PrivacyPage() {
  return (
    <PageFrame>
      <section className="section legal-page">
        <div className="shell legal-page-grid">
          <Reveal>
            <p className="eyebrow">Privacy</p>
            <h1>Privacy Policy</h1>
            <p className="legal-page-effective">Effective {effectiveDate}</p>
          </Reveal>
          <Reveal className="legal-page-content">
            <p>
              This website is operated by {siteConfig.legalName}, doing business as {siteConfig.name}.
            </p>
            <p>
              This website is informational. It does not ask visitors to submit personal information directly through the website and does not include contact forms, user accounts, newsletter sign-ups, or other data-submission features.
            </p>
            <p>
              {siteConfig.name} does not currently use analytics, advertising pixels, advertising tracking, or similar tracking technologies on this website. The website itself does not intentionally store tracking cookies or use browser storage for marketing or advertising purposes.
            </p>
            <p>
              Like most websites, hosting and infrastructure providers may automatically process basic technical information necessary to operate, secure, and deliver the website. This may include:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser and device information</li>
              <li>Requested URLs or pages</li>
              <li>Timestamps</li>
              <li>Technical and security logs</li>
            </ul>
            <p>
              If you contact {siteConfig.name} using a phone or email link on this website, the information you provide is not submitted through the website. {siteConfig.name} may receive and use that information to respond to your enquiry and communicate with you.
            </p>
            <p>
              {siteConfig.name} does not sell website visitor information or share it for advertising purposes.
            </p>
            <p>
              This website may contain links to external websites or services. Those websites are governed by their own privacy practices, not this policy.
            </p>
            <p>
              We may update this policy if the website&apos;s functionality or data practices change. The effective date at the top of this page will be updated when changes are made.
            </p>
            <p>
              Questions about privacy can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
            <p>
              <Link href="/">Return to home</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </PageFrame>
  );
}
