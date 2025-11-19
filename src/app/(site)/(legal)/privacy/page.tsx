// app/privacy/page.tsx
import LegalPageShell from "@/components/legal/LegalPageShell";

export default function PrivacyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      subtitle="How ManzanoHQ LLC collects, uses, and protects your data."
      lastUpdated="November 2025"
    >
      <div className="space-y-10 text-sm leading-relaxed text-white/80">
        {/* Header meta + mini TOC */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-white/10 pb-4">
          <div className="text-xs sm:text-sm text-white/50">
            <p className="font-semibold uppercase tracking-[0.18em] text-white/60">
              On this page
            </p>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              <a href="#introduction" className="hover:text-white underline-offset-2 hover:underline">
                Introduction
              </a>
              <a href="#information-we-collect" className="hover:text-white underline-offset-2 hover:underline">
                Information We Collect
              </a>
              <a href="#how-we-use" className="hover:text-white underline-offset-2 hover:underline">
                How We Use It
              </a>
              <a href="#legal-bases" className="hover:text-white underline-offset-2 hover:underline">
                Legal Bases
              </a>
              <a href="#sharing" className="hover:text-white underline-offset-2 hover:underline">
                Sharing
              </a>
              <a href="#rights" className="hover:text-white underline-offset-2 hover:underline">
                Your Rights
              </a>
              <a href="#retention" className="hover:text-white underline-offset-2 hover:underline">
                Retention
              </a>
              <a href="#security" className="hover:text-white underline-offset-2 hover:underline">
                Security
              </a>
              <a href="#transfers" className="hover:text-white underline-offset-2 hover:underline">
                International Transfers
              </a>
              <a href="#contact" className="hover:text-white underline-offset-2 hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Main document body */}
        <div className="space-y-8">
          <section
            id="introduction"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy explains how <strong>ManzanoHQ LLC</strong>{" "}
              (“ManzanoHQ”, “we”, “our”, “us”) collects, uses, and protects
              information across:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>
                <strong>manzanohq.com</strong>
              </li>
              <li>
                <strong>Manzanos PopShop</strong> (e-commerce)
              </li>
              <li>Newsletters and signup forms</li>
              <li>User accounts and profile dashboards</li>
            </ul>
            <p>
              By using our website or services, you agree to the collection and
              use of information in accordance with this Privacy Policy.
            </p>
          </section>

          <section
            id="information-we-collect"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              2. Information We Collect
            </h2>

            <h3 className="mt-2 text-sm font-semibold text-white">
              2.1 Information You Provide to Us
            </h3>
            <p>We collect information you provide directly, including:</p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>Email address (newsletter signup, account creation)</li>
              <li>Full name</li>
              <li>Shipping address</li>
              <li>Phone number</li>
              <li>Account profile details</li>
              <li>Profile picture</li>
              <li>Order details and purchase history</li>
            </ul>
            <p>
              Payment information is processed by our payment processor and not
              stored in full by us (see “Payments” below).
            </p>

            <h3 className="mt-3 text-sm font-semibold text-white">
              2.2 Payments
            </h3>
            <p>
              Payments for Manzanos PopShop are processed by{" "}
              <strong>Stripe</strong>. Stripe may collect additional identifiers
              and billing information required to process the transaction
              securely.
            </p>
            <p>
              We do <strong>not</strong> store your full card number, CVV, or
              other sensitive payment details on our own servers.
            </p>

            <h3 className="mt-3 text-sm font-semibold text-white">
              2.3 Uploaded Images
            </h3>
            <p>
              Users may upload a profile picture. You should only upload content
              that you own or have permission to use and that does not contain
              sensitive personal information.
            </p>

            <h3 className="mt-3 text-sm font-semibold text-white">
              2.4 Information Collected Automatically
            </h3>
            <p>
              At this time, ManzanoHQ does <strong>not</strong> actively use
              separate analytics, tracking cookies, or third-party marketing
              pixels on the site. If this changes, we will update this Privacy
              Policy to describe any additional automatic data collection.
            </p>
          </section>

          <section
            id="how-we-use"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>Create and manage your Manzanos PopShop account</li>
              <li>Process and fulfill orders and deliveries</li>
              <li>Send transactional emails (order confirmations, receipts)</li>
              <li>Send newsletters when you subscribe</li>
              <li>Verify and suggest addresses via Google Maps services</li>
              <li>Respond to support requests and feedback</li>
              <li>Improve and secure our services</li>
              <li>Comply with legal, tax, and regulatory obligations</li>
            </ul>
          </section>

          <section
            id="legal-bases"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              4. Legal Bases for Processing (GDPR)
            </h2>
            <p>
              If you are located in the European Economic Area (EEA), the United
              Kingdom, or similar jurisdictions, we process your personal data
              under the following legal bases:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>
                <strong>Contract:</strong> To create and manage your account and
                to fulfill your orders.
              </li>
              <li>
                <strong>Consent:</strong> For newsletters and certain
                notifications that you explicitly opt in to.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To prevent fraud, secure
                our services, and improve user experience.
              </li>
              <li>
                <strong>Legal Obligations:</strong> To maintain records required
                for tax, accounting, and regulatory purposes.
              </li>
            </ul>
          </section>

          <section
            id="sharing"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              5. How We Share Your Information
            </h2>
            <p>
              We do not sell or rent your personal information. We may share your
              information with trusted third-party providers that help us operate
              our services:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>
                <strong>Supabase</strong> for secure database and user account
                storage.
              </li>
              <li>
                <strong>Stripe</strong> for processing payments.
              </li>
              <li>
                <strong>MailerLite</strong> for managing and sending newsletters.
              </li>
              <li>
                <strong>Resend</strong> for sending certain transactional and
                contact emails to us.
              </li>
              <li>
                <strong>Google Maps</strong> for address lookup and verification.
              </li>
              <li>
                Platform providers such as Apple and Google as needed for app
                services and notifications.
              </li>
            </ul>
            <p>
              These providers are only given the information necessary to perform
              their services and are expected to protect your information.
            </p>
          </section>

          <section
            id="children"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              6. Children’s Privacy
            </h2>
            <p>
              Manzanos PopShop and related purchasing features are intended for{" "}
              <strong>adults (18+)</strong>. We do not knowingly collect personal
              information from children under 13.
            </p>
            <p>
              We plan to implement date-of-birth checks for account creation to
              help ensure that purchasing experiences remain adult-focused.
            </p>
          </section>

          <section
            id="rights"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              7. Your Rights
            </h2>
            <p>
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>Right to access the personal data we hold about you</li>
              <li>Right to correct inaccurate or incomplete data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to restrict or object to certain processing</li>
              <li>
                Right to data portability (ability to obtain a copy of your data
                in a structured format, where applicable)
              </li>
            </ul>

            <h3 className="mt-3 text-sm font-semibold text-white">
              7.1 Account Deletion
            </h3>
            <p>
              You can request deletion of your account. When you delete your
              account, most profile-level information is removed or anonymized.
              However, certain order and transaction records may be retained where
              required for tax, accounting, or fraud-prevention purposes.
            </p>
          </section>

          <section
            id="retention"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              8. Data Retention
            </h2>
            <p>We retain your information for as long as necessary to:</p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>Provide services you have requested</li>
              <li>Maintain your account (until you delete it)</li>
              <li>Fulfill legal and tax obligations</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p>
              Newsletter data is retained until you unsubscribe, at which point
              your email address is removed from our active mailing lists.
            </p>
          </section>

          <section
            id="security"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              9. Data Security
            </h2>
            <p>
              We use reasonable technical and organizational measures to protect
              your data, including:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>Encrypted databases via Supabase</li>
              <li>HTTPS for data transmitted between you and our services</li>
              <li>PCI-DSS compliant payment processing through Stripe</li>
            </ul>
            <p>
              While we strive to protect your personal information, no system can
              be 100% secure. We cannot guarantee absolute security of data
              transmitted over the internet.
            </p>
          </section>

          <section
            id="transfers"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              10. International Transfers
            </h2>
            <p>
              ManzanoHQ LLC is based in the United States, and your information
              may be processed and stored in the United States or other countries
              where our service providers operate. By using our services, you
              consent to the transfer of your information to these locations.
            </p>
          </section>

          <section
            id="changes"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we make
              changes, we will update the “Last updated” date at the top of this
              page. Your continued use of our services after any changes means you
              accept the revised policy.
            </p>
          </section>

          <section
            id="contact"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              12. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle
              your data, you can contact us at:
            </p>
            <p>
              <strong>ManzanoHQ LLC</strong>
              <br />
              Email:{" "}
              <a href="mailto:rmanzano.se@gmail.com">
                rmanzano.se@gmail.com
              </a>
              <br />
              Website:{" "}
              <a href="https://manzanohq.com" target="_blank" rel="noreferrer">
                manzanohq.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </LegalPageShell>
  );
}