// src/app/(site)/(legal)/terms/page.tsx
import LegalPageShell from "@/components/legal/LegalPageShell";

export default function TermsPage() {
  return (
    <LegalPageShell
      title="Terms & Conditions"
      subtitle="The rules and conditions for using ManzanoHQ and Manzanos PopShop."
      lastUpdated="November 2025"
    >
      <div className="space-y-10 text-sm leading-relaxed text-white/80">
        {/* Header meta + quick jump */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-white/10 pb-4">
          <div className="text-xs sm:text-sm text-white/50">
            <p className="font-semibold uppercase tracking-[0.18em] text-white/60">
              Jump to
            </p>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              <a href="#payments" className="hover:text-white underline-offset-2 hover:underline">
                Payments
              </a>
              <a href="#shipping" className="hover:text-white underline-offset-2 hover:underline">
                Shipping
              </a>
              <a href="#refunds" className="hover:text-white underline-offset-2 hover:underline">
                Refunds
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
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of
              the websites, products, and services operated by{" "}
              <strong>ManzanoHQ LLC</strong> (&quot;ManzanoHQ&quot;, &quot;we&quot;,
              &quot;our&quot;, &quot;us&quot;), including:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>
                <strong>manzanohq.com</strong>
              </li>
              <li>
                <strong>Manzanos PopShop</strong> (e-commerce)
              </li>
              <li>User accounts and profile dashboards</li>
              <li>Any associated newsletters or communications</li>
            </ul>
            <p>
              By accessing or using our services, you agree to be bound by these
              Terms. If you do not agree, please do not use our services.
            </p>
          </section>

          <section
            id="accounts"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              2. Accounts
            </h2>
            <p>
              To use certain features, including purchasing items on Manzanos
              PopShop, you may need to create an account.
            </p>
            <p>By creating an account, you agree to:</p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>Provide accurate, current, and complete information</li>
              <li>
                Keep your login credentials confidential and not share your account
                with others
              </li>
              <li>
                Notify us promptly if you suspect any unauthorized access or use of
                your account
              </li>
            </ul>
            <p>
              You are responsible for all activity that occurs under your account.
              ManzanoHQ may suspend or terminate your account if we reasonably
              believe these Terms have been violated.
            </p>
          </section>

          <section
            id="payments"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              3. Purchases &amp; Payments
            </h2>

            <h3 className="mt-2 text-sm font-semibold text-white">
              3.1 Orders
            </h3>
            <p>
              When you place an order on Manzanos PopShop, you are making an offer
              to purchase products under these Terms. We reserve the right to
              accept or reject any order, in whole or in part.
            </p>

            <h3 className="mt-3 text-sm font-semibold text-white">
              3.2 Pricing &amp; Availability
            </h3>
            <p>
              Prices and product availability are subject to change at any time
              without notice. We do not guarantee that a product displayed will be
              available when you attempt to purchase it.
            </p>

            <h3 className="mt-3 text-sm font-semibold text-white">
              3.3 Payment Processing (Stripe)
            </h3>
            <p>
              Payments are processed securely by <strong>Stripe</strong>. By
              submitting payment information, you authorize Stripe to charge your
              selected payment method for the total order amount.
            </p>
            <p>
              ManzanoHQ does not store your full card number, CVV, or other highly
              sensitive payment details. All payment-related data is handled in
              accordance with Stripe&apos;s security and compliance practices.
            </p>
          </section>

          <section
            id="shipping"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              4. Shipping
            </h2>
            <p>
              Manzanos PopShop currently ships to addresses within the{" "}
              <strong>United States</strong> only.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>
                We offer <strong>free shipping</strong> until we reach our first{" "}
                <strong>50 orders</strong> in total.
              </li>
              <li>
                After that milestone, shipping pricing or policies may be updated.
              </li>
            </ul>
            <p>
              Please ensure your shipping address is accurate at checkout. We are
              not responsible for delayed or undelivered packages caused by
              incorrect address information.
            </p>
          </section>

          <section
            id="age-requirements"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              5. Age Requirements
            </h2>
            <p>
              Manzanos PopShop and purchasing-related features are intended for{" "}
              <strong>users 18 years of age or older</strong>.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>
                You must be at least 18 years old to place orders or complete
                purchases.
              </li>
              <li>
                We are planning to implement date-of-birth verification at signup
                to help ensure compliance with these requirements.
              </li>
            </ul>
            <p>
              By using our purchasing services, you represent that you meet the
              applicable age requirement.
            </p>
          </section>

          <section
            id="ip"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              6. Intellectual Property
            </h2>
            <p>
              All content, branding, and design elements on ManzanoHQ and Manzanos
              PopShop are protected by intellectual property laws.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>
                <strong>ManzanoHQ</strong> and <strong>Manzanos PopShop</strong>{" "}
                logos, designs, and UI elements are the property of ManzanoHQ LLC.
              </li>
              <li>
                Official product imagery (such as <strong>Funko Pop</strong>{" "}
                photos) may be displayed for illustrative and informational
                purposes and remain the property of their respective rights
                holders.
              </li>
            </ul>
            <p>
              You may not copy, modify, distribute, or use our branding or
              proprietary content without our prior written permission.
            </p>
          </section>

          <section
            id="prohibited"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              7. Prohibited Activities
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>Use the services for any unlawful purpose</li>
              <li>
                Attempt to gain unauthorized access to other accounts, systems, or
                networks
              </li>
              <li>
                Use automated tools (scrapers, bots) to access or interact with the
                site in ways that could disrupt operations
              </li>
              <li>Reverse-engineer or attempt to bypass security measures</li>
              <li>
                Interfere with or abuse platform systems, including attempts to
                exploit errors or vulnerabilities
              </li>
            </ul>
            <p>
              We may take appropriate action, including account suspension or
              termination, if we believe prohibited activities are occurring.
            </p>
          </section>

          <section
            id="refunds"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              8. Refunds &amp; Returns
            </h2>
            <p>
              Manzanos PopShop currently operates under a{" "}
              <strong>no-refund policy</strong>.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>Orders cannot be canceled once processed.</li>
              <li>Payments are non-refundable.</li>
              <li>We do not accept returns by default.</li>
            </ul>
            <p>
              In cases of damaged or defective items on arrival, please contact us
              with photos and details so we can review the situation.
            </p>
          </section>

          <section
            id="account-termination"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              9. Account Termination
            </h2>
            <p>
              We may suspend or terminate your account or access to the services
              if:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>You violate these Terms</li>
              <li>You engage in fraud or suspected fraudulent activity</li>
              <li>You abuse, interfere with, or harm the platform or other users</li>
            </ul>
            <p>
              You may also request to delete your account. Note that certain order
              and transaction data may be retained where required for legal,
              accounting, or security purposes.
            </p>
          </section>

          <section
            id="disclaimers"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              10. Disclaimers &amp; Limitation of Liability
            </h2>
            <p>
              Our services are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. To the fullest extent permitted by law,
              ManzanoHQ disclaims all warranties, express or implied, regarding
              the operation of the services and the information, content, or
              materials included.
            </p>
            <p>
              To the maximum extent permitted by law, ManzanoHQ LLC is not liable
              for any indirect, incidental, consequential, or punitive damages
              arising from:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1">
              <li>Your use of or inability to use the services</li>
              <li>Shipping delays or carrier errors</li>
              <li>
                Loss or theft of packages after they are marked as delivered by the
                carrier
              </li>
              <li>
                Unauthorized access to your account resulting from your failure to
                safeguard credentials
              </li>
            </ul>
          </section>

          <section
            id="governing-law"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              11. Governing Law
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the laws
              of the <strong>United States</strong> and the{" "}
              <strong>State of Florida</strong>, without regard to its conflict of
              law principles.
            </p>
          </section>

          <section
            id="changes"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              12. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. When we do, we will
              revise the &quot;Last updated&quot; date at the top of this page.
              Your continued use of the services after any changes become
              effective means you accept the updated Terms.
            </p>
          </section>

          <section
            id="contact"
            className="scroll-mt-28 border-l border-white/10 pl-4 sm:pl-5 space-y-2"
          >
            <h2 className="text-base sm:text-lg font-semibold text-white">
              13. Contact
            </h2>
            <p>
              If you have any questions about these Terms, you can contact us at:
            </p>
            <p>
              <strong>ManzanoHQ LLC</strong>
              <br />
              Email:{" "}
              <a href="mailto:manzanohq@gmail.com">
                manzanohq@gmail.com
              </a>
              <br />
              Website:{" "}
              <a href="https://www.manzanohq.com" target="_blank" rel="noreferrer">
                manzanohq.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </LegalPageShell>
  );
}