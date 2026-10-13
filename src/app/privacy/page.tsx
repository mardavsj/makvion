import type { Metadata } from "next";
import { Legal } from "@/components/Legal";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Makvion Technologies collects and uses information.", alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <Legal title="Privacy Policy" updated="October 2026">
      {/* TODO(founder): have this reviewed and add the registered business address. */}
      <p>This policy explains how Makvion Technologies (&quot;Makvion&quot;, &quot;we&quot;) handles information when you visit makvion.com or contact us.</p>
      <h2>Information we collect</h2>
      <ul>
        <li>Details you send us through the contact form or by email, such as your name, email, company, website and project details.</li>
        <li>Basic, privacy-friendly usage data (such as pages visited) if analytics are enabled.</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry and prepare quotes.</li>
        <li>To deliver and invoice projects you engage us for.</li>
        <li>To improve our website.</li>
      </ul>
      <p>We do not sell your personal information.</p>
      <h2>Payments</h2>
      <p>Payments are processed by a third-party payment provider. We do not store your card details.</p>
      <h2>Retention</h2>
      <p>We keep enquiry and project records only as long as needed for the purposes above or as required by law.</p>
      <h2>Your rights</h2>
      <p>You can ask us to access, correct or delete your personal information at any time by emailing <a href="mailto:contact@makvion.com">contact@makvion.com</a>.</p>
    </Legal>
  );
}
