import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Legal } from "@/components/Legal";
import { GrievanceBlock } from "@/components/LegalContact";

export const metadata: Metadata = pageMeta({
  path: "/privacy",
  title: "Privacy Policy | Makvion Technologies",
  description: "How Makvion Technologies collects, uses, stores and protects personal data under the IT Act 2000 and DPDP Act 2023 and how to reach our Grievance Officer.",
  keywords: [],
});

export default function Privacy() {
  return (
    <Legal title="Privacy Policy" updated="October 2026">
      <JsonLd data={breadcrumbJsonLd([{ name: "Privacy Policy", path: "/privacy" }])} />
      <p>This policy explains how Makvion Technologies (&quot;Makvion&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses and protects personal information when you visit makvion.com, send us an enquiry, or work with us. We follow the Information Technology Act, 2000 and its rules, and the Digital Personal Data Protection Act, 2023 and DPDP Rules, 2025 as they come into force. We wrote it in plain English so it is easy to follow.</p>

      <h2>Who we are</h2>
      <p>Makvion Technologies is a web and app development studio based in Pune, India. For this website and the enquiries you send us, we decide how your personal data is used (in DPDP terms, we are the &quot;Data Fiduciary&quot;).</p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Contact form:</strong> your name, email address and the details you choose to share, such as phone number, company, website and project information.</li>
        <li><strong>Phone, WhatsApp and email:</strong> if you call, message or email us, we receive your phone number or email address, your name if shown, and the content of your messages.</li>
        <li><strong>Client projects:</strong> billing details (such as business name, address and GSTIN), contacts for the project and any material you send us to build your website or app.</li>
        <li><strong>Website usage:</strong> anonymous, aggregated visit statistics such as pages viewed, referring site, country and device type (see Analytics below).</li>
        <li><strong>Technical data:</strong> when you submit the contact form, your IP address is used briefly to block spam and abuse. It is held only in temporary memory and not saved with your enquiry.</li>
      </ul>
      <p><strong>Payments:</strong> payments are made offline against our invoice (UPI or bank transfer), or online through a Dodo Payments payment link we send you. When you pay through Dodo Payments, your card or payment details are entered with and processed by Dodo Payments. We do not receive or store your card details; we only see confirmation of the payment, such as the amount, date and reference.</p>
      <p>We do not ask for sensitive data such as passwords, card numbers, health or financial account details through this website. Please do not send them in an enquiry.</p>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry, understand your needs and prepare a quote.</li>
        <li>To send you an automatic confirmation that we received your message.</li>
        <li>To deliver, support and invoice projects you engage us for.</li>
        <li>To keep accounting and tax records required by law.</li>
        <li>To keep this website secure and understand, in aggregate, how it is used so we can improve it.</li>
      </ul>
      <p>We use your information only for these purposes. We do not sell or rent your personal information, and we do not send marketing newsletters unless you ask for them.</p>

      <h2>Consent</h2>
      <p>By sending us an enquiry you agree to us using your details to respond to it. Where we rely on your consent, you can withdraw it at any time by emailing us. Withdrawing consent does not affect anything we did before, and we may still keep records the law requires (such as invoices).</p>

      <h2>Analytics</h2>
      <p>We use Vercel Web Analytics to count visits. It does not use cookies, does not identify you personally and does not track you across other websites. It only gives us aggregated statistics such as page views and visitor counts.</p>

      <h2>Cookies</h2>
      <p>This website does not set advertising or tracking cookies, and we do not use Google Analytics or social media pixels. Our hosting provider may use strictly necessary technical storage to deliver the site securely. If we add any non-essential cookies in future, we will update this policy and ask for your consent first. You can also block or delete cookies in your browser settings.</p>

      <h2>Who we share it with</h2>
      <p>We share personal data only with service providers that help us run our business, and only as needed for the purposes above:</p>
      <ul>
        <li><strong>Vercel</strong> hosts this website and provides visitor analytics.</li>
        <li><strong>Resend</strong> delivers contact-form enquiries to us and the confirmation email to you.</li>
        <li><strong>Our email provider</strong> stores our business email, including your enquiry and our replies.</li>
        <li><strong>Dodo Payments</strong> processes online payments made through our payment links and receives the payment details you enter there, under its own privacy policy.</li>
        <li><strong>WhatsApp (Meta)</strong> carries messages if you choose to contact us on WhatsApp, under WhatsApp&apos;s own privacy policy.</li>
        <li><strong>Accountants and tax authorities</strong> receive invoice records where required by law.</li>
      </ul>
      <p>We may also disclose information if required by law, a court order or a government authority, or to protect our legal rights.</p>

      <h2>Where your data is stored</h2>
      <p>Some of our providers store or process data on servers outside India, for example in the United States or Europe. Where this happens, we use reputable providers with appropriate security, and we follow any restrictions the Government of India places on transfers to particular countries.</p>

      <h2>How long we keep it</h2>
      <ul>
        <li><strong>Enquiries that do not become projects:</strong> up to 24 months, then deleted.</li>
        <li><strong>Project records and communication:</strong> for the project and up to 3 years after it ends, for support and any questions.</li>
        <li><strong>Invoices and accounting records:</strong> 8 years, as required by Indian tax laws.</li>
        <li><strong>Analytics:</strong> kept only in aggregate, anonymous form.</li>
      </ul>
      <p>You can ask us to delete your information sooner, unless we are required by law to keep it.</p>

      <h2>Security</h2>
      <p>We protect your information with reasonable security practices, including encrypted connections (HTTPS), access limited to the people who need it, and secure, reputable service providers. No method of transfer or storage is completely secure, but we work to keep your data safe.</p>
      <p>If a personal data breach affects you, we will tell you without delay with what happened, the likely impact and the steps we are taking, and we will report it to the Data Protection Board of India as the law requires.</p>

      <h2>Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Ask what personal data we hold about you and how we use it.</li>
        <li>Ask us to correct, complete or update it.</li>
        <li>Ask us to delete it, where we no longer need it or you withdraw consent.</li>
        <li>Withdraw your consent at any time.</li>
        <li>Nominate another person to exercise your rights if you die or are unable to do so.</li>
        <li>Raise a grievance with us, and if you are not satisfied with our response, complain to the Data Protection Board of India.</li>
      </ul>
      <p>To use any of these rights, email <a href="mailto:contact@makvion.com">contact@makvion.com</a> with enough detail for us to identify you. We may ask you to confirm your identity before acting on a request.</p>

      <h2>Children</h2>
      <p>Our services are meant for businesses and adults. We do not knowingly collect personal data from children under 18. If you believe a child has sent us their details, contact us and we will delete them.</p>

      <h2>Grievance Officer</h2>
      <p>If you have a concern or complaint about how we handle your personal data, contact:</p>
      <GrievanceBlock />
      <p>We acknowledge grievances within 48 hours and aim to resolve them within 30 days.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy when our services, tools or the law change. The latest version will always be on this page with its &quot;Last updated&quot; date. If a change is significant, we will make it clear on the website.</p>

      <h2>Contact</h2>
      <p>Questions about this policy? Email <a href="mailto:contact@makvion.com">contact@makvion.com</a> or call <a href="tel:+917499283045">+91 74992 83045</a>. See also our <Link href="/terms">Terms of Service</Link> and <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.</p>
    </Legal>
  );
}
