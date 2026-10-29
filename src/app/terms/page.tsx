import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Legal } from "@/components/Legal";
import { ADDRESS } from "@/components/LegalContact";

export const metadata: Metadata = pageMeta({
  path: "/terms",
  title: "Terms of Service | Makvion Technologies",
  description: "The terms for using makvion.com and working with Makvion Technologies: quotes, milestone payments, ownership, support, confidentiality and Indian law.",
  keywords: [],
});

export default function Terms() {
  return (
    <Legal title="Terms of Service" updated="October 2026">
      <JsonLd data={breadcrumbJsonLd([{ name: "Terms of Service", path: "/terms" }])} />
      <p>These terms apply to your use of makvion.com and to services provided by Makvion Technologies (&quot;Makvion&quot;, &quot;we&quot;, &quot;us&quot;). Each project is also covered by a written quote or agreement, which takes priority if there is any conflict with these terms.</p>

      <h2>Who we are</h2>
      <p>Makvion Technologies, {ADDRESS}. Email <a href="mailto:contact@makvion.com">contact@makvion.com</a>, phone <a href="tel:+917499283045">+91 74992 83045</a>.</p>

      <h2>Using this website</h2>
      <ul>
        <li>The content on this website is for general information about our services. We try to keep it accurate but it may change without notice.</li>
        <li>Project examples and mockups are shown to illustrate our work and may include sample content.</li>
        <li>You may not misuse the website, for example by attempting to break its security, sending spam through our forms or copying its design, text or code for commercial use without our permission.</li>
        <li>Links to other websites are provided for convenience. We are not responsible for their content or practices.</li>
      </ul>

      <h2>Quotes &amp; scope</h2>
      <p>After a free consultation, we provide a written quote describing scope, deliverables and timeline. Changes in scope are quoted separately before any extra work begins.</p>

      <h2>Payments</h2>
      <ul>
        <li>Projects are billed in milestones agreed in your quote, for example an advance to start, a payment on design approval and the balance at launch.</li>
        <li>Clients in India can pay by UPI or bank transfer (NEFT / IMPS / RTGS).</li>
        <li>Where needed, any client, including international clients, can pay online by card or other supported methods through a secure Dodo Payments payment link.</li>
        <li>Quotes are in INR, or in another currency where agreed in writing.</li>
        <li>Payments are made against our invoice or a payment link we send you. No payment is taken directly on this website.</li>
        <li>GST and other applicable taxes are charged in addition where they apply, as shown on the quote or invoice.</li>
        <li>We may pause work if an agreed payment is overdue.</li>
      </ul>

      <h2>Third-party costs</h2>
      <p>Domains, hosting, paid plugins or themes, stock assets, email services, app store developer accounts and similar third-party items are not included unless your quote says so. They are paid by you, directly or through us at cost, and follow the provider&apos;s own terms and renewals.</p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Provide content, logins, feedback and approvals on time. Delays on your side can move the timeline.</li>
        <li>Make sure the text, images, logos and other material you give us are yours to use and are lawful.</li>
        <li>Keep a single point of contact for decisions where possible.</li>
      </ul>

      <h2>Design approval</h2>
      <p>You approve the design before development starts. Each quote includes a set number of revision rounds. Further changes after approval are quoted separately.</p>

      <h2>Ownership</h2>
      <p>Once paid in full, you own the final design, code and content created for your project, excluding third-party licences and our pre-existing tools.</p>

      <h2>Portfolio</h2>
      <p>Unless you ask us not to in writing, we may show the finished work, your name and logo in our portfolio and marketing. We never share confidential information as part of this.</p>

      <h2>Confidentiality</h2>
      <p>We keep your business information, logins and unpublished material confidential and use them only to deliver your project. We are happy to sign a separate NDA where needed.</p>

      <h2>Warranty &amp; support</h2>
      <p>We fix defects in our work reported within 30 days of launch at no charge. After that, support, updates and new features are available through a maintenance plan or a separate quote. Problems caused by changes made by others, third-party services or hosting outside our control are not covered.</p>

      <h2>Liability</h2>
      <p>Our total liability is limited to the fees paid for the project concerned. We are not liable for indirect losses such as lost profits, revenue or data.</p>

      <h2>Cancellation &amp; refunds</h2>
      <p>Either side may end a project with written notice. Payments for work done up to that point remain due. Refunds are covered by our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.</p>

      <h2>Force majeure</h2>
      <p>Neither side is responsible for delays caused by events outside reasonable control, such as natural disasters, power or internet outages, government action or illness. We will keep you informed and agree a new timeline.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India. We will first try to resolve any dispute through good-faith discussion. If that fails, the courts in Pune, Maharashtra will have exclusive jurisdiction.</p>

      <h2>Changes</h2>
      <p>We may update these terms from time to time. The version on this page applies from its &quot;Last updated&quot; date. Projects already under a signed quote follow the terms agreed at that time.</p>

      <h2>Contact</h2>
      <p>Questions? Email <a href="mailto:contact@makvion.com">contact@makvion.com</a> or call <a href="tel:+917499283045">+91 74992 83045</a>. See also our <Link href="/privacy">Privacy Policy</Link>.</p>
    </Legal>
  );
}
