import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Legal } from "@/components/Legal";
import { ADDRESS } from "@/components/LegalContact";

export const metadata: Metadata = pageMeta({
  path: "/refund-policy",
  title: "Refund & Cancellation Policy | Makvion",
  description: "How cancellations and refunds work for website and app projects with Makvion: advances, milestones, billing errors, refund timelines and how to make a request.",
  keywords: [],
});

export default function RefundPolicy() {
  return (
    <Legal title="Refund & Cancellation Policy" updated="October 2026">
      <JsonLd data={breadcrumbJsonLd([{ name: "Refund & Cancellation Policy", path: "/refund-policy" }])} />
      <p>We build websites, apps and digital services, not physical products. Because our time is booked for your project as soon as it starts, this policy explains clearly what happens if a project is cancelled or a refund is requested. Your written quote or agreement takes priority if it says something different.</p>

      <h2>Before work starts</h2>
      <p>If you cancel after paying the advance but before we have started any work, we refund the advance in full.</p>

      <h2>After work starts</h2>
      <ul>
        <li>The advance is non-refundable once work has started, as it covers planning, research and time reserved for your project.</li>
        <li>Payments for milestones that are completed or approved are non-refundable.</li>
      </ul>

      <h2>If a project is cancelled midway</h2>
      <ul>
        <li>Either side can cancel with written notice by email.</li>
        <li>You pay for the work done up to the date of cancellation, based on the milestones in your quote.</li>
        <li>Any amount you have paid in advance for milestones we have not started is refunded.</li>
        <li>Once payments due are settled, we hand over the work completed so far.</li>
      </ul>

      <h2>Billing errors</h2>
      <p>If you are charged twice or charged an incorrect amount, we refund the extra amount in full.</p>

      <h2>Ongoing services</h2>
      <p>For monthly services such as maintenance, you can cancel at any time with notice before the next billing period. The current period already paid is not refunded, and the service continues until it ends.</p>

      <h2>Third-party costs</h2>
      <p>Amounts paid to third parties for your project, such as domains, hosting, paid plugins or app store fees, cannot be refunded by us once purchased.</p>

      <h2>How refunds are paid</h2>
      <p>Approved refunds are paid to the original payment method within about 7 to 10 working days: UPI or bank transfer payments are refunded to the same account, and payments made through Dodo Payments are refunded through Dodo Payments to the card or method you used. Your bank or card provider may take a little longer to show it.</p>

      <h2>How to request</h2>
      <p>Email <a href="mailto:contact@makvion.com">contact@makvion.com</a> with your name, project and invoice number and the reason for your request, or call <a href="tel:+917499283045">+91 74992 83045</a>. We acknowledge requests within 48 hours and respond with a decision within 7 working days.</p>
      <p>Makvion Technologies, {ADDRESS}. See also our <Link href="/terms">Terms of Service</Link>.</p>
    </Legal>
  );
}
