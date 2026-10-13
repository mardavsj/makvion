import type { Metadata } from "next";
import { Legal } from "@/components/Legal";

export const metadata: Metadata = { title: "Terms of Service", description: "Terms for working with Makvion Technologies.", alternates: { canonical: "/terms" } };

export default function Terms() {
  return (
    <Legal title="Terms of Service" updated="October 2026">
      {/* TODO(founder): have these reviewed by a professional before relying on them. */}
      <p>These terms apply to services provided by Makvion Technologies (&quot;Makvion&quot;). Each project is also covered by a written quote or agreement, which takes priority if there is any conflict.</p>
      <h2>Quotes &amp; scope</h2>
      <p>We provide a fixed written quote describing scope, deliverables and timeline. Changes in scope are quoted separately before any extra work begins.</p>
      <h2>Payments</h2>
      <ul>
        <li>Unless agreed otherwise, 50% is due upfront and the balance on delivery. Larger projects may be billed by milestone.</li>
        <li>Invoices are payable online through our secure payment provider. Prices are in USD unless stated.</li>
      </ul>
      <h2>Design approval</h2>
      <p>You approve the design before development starts. Each quote includes a set number of revision rounds.</p>
      <h2>Ownership</h2>
      <p>Once paid in full, you own the final design, code and content created for your project, excluding third-party licences and our pre-existing tools.</p>
      <h2>Warranty &amp; liability</h2>
      <p>We fix defects in our work reported within 30 days of launch at no charge. Our total liability is limited to the fees paid for the project concerned.</p>
      <h2>Contact</h2>
      <p>Questions? Email <a href="mailto:contact@makvion.com">contact@makvion.com</a>.</p>
    </Legal>
  );
}
