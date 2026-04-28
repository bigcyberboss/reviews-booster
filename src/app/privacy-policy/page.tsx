import { LegalDoc } from "@/components/LegalDoc";

export const metadata = {
  title: "Privacy Policy — Review Boosters",
  description: "How Review Boosters collects, uses, discloses, and protects personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      effectiveDate="07 October 2025"
      lastUpdated="27 April 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy explains how Review Boosters (hereinafter &ldquo;we&rdquo;, &ldquo;us&rdquo;, or the &ldquo;Provider&rdquo;), the operator of the website{" "}
        <a href="https://review-boosters.org">https://review-boosters.org</a>, collects, uses, discloses, and protects personal data in connection with the Website and the review-solicitation and reputation-marketing services we provide (the &ldquo;Services&rdquo;). The Provider is operated from Georgia by an individual entrepreneur registered with the LEPL National Agency of Public Registry; full legal-entity details (registered name, identification number, and registered address) are disclosed on written request to{" "}
        <a href="mailto:contact@review-boosters.org">contact@review-boosters.org</a>, or where required by Applicable Law to a competent supervisory authority.
      </p>
      <p>
        This Policy is written to comply with the Law of Georgia on Personal Data Protection (adopted 14 June 2023, in force from 1 March 2024), Regulation (EU) 2016/679 (&ldquo;GDPR&rdquo;) where applicable, the UK Data Protection Act 2018 and UK GDPR where applicable, and the California Consumer Privacy Act as amended by the CPRA (&ldquo;CCPA/CPRA&rdquo;) where applicable.
      </p>
      <p>Please read this Policy carefully. If you do not agree with it, you must not use our Services.</p>

      <h2>2. Data controller</h2>
      <p>The data controller responsible for your personal data is:</p>
      <ul>
        <li>Review Boosters, the operator of <a href="https://review-boosters.org">https://review-boosters.org</a>.</li>
        <li>Operator status: an individual entrepreneur registered in Georgia with the LEPL National Agency of Public Registry. Full legal-entity details are disclosed on written request to the contact email below or, where required by Applicable Law, to a competent supervisory authority.</li>
        <li>Contact email (general and privacy): <a href="mailto:contact@review-boosters.org">contact@review-boosters.org</a></li>
      </ul>
      <p>
        We have not appointed a Data Protection Officer, as we do not meet the thresholds set out in Article 37 GDPR or Article 33 of the Law of Georgia on Personal Data Protection. For questions about this Policy or about how your personal data is handled, please contact us at the address above.
      </p>

      <h2>3. Our role: controller or processor?</h2>
      <p>Depending on the category of personal data, we act in one of two capacities:</p>
      <ul>
        <li><strong>Controller</strong> — for personal data of visitors to our Website, of our Clients (including their representatives and account holders), and of people who contact us directly. This Policy describes that processing in full.</li>
        <li><strong>Processor</strong> — for personal data that our Clients upload to the Services about their own End Customers (typically name, email address, phone number, order reference, language). In that case the Client is the controller, and we process that data only on the Client&rsquo;s documented instructions under the Data Processing Addendum incorporated into our Terms of Service. If you are an End Customer and wish to exercise your rights, please contact the business that invited you to leave a review; we will assist that business as required by law.</li>
      </ul>

      <h2>4. Personal data we collect</h2>

      <h3>4.1 Information you provide directly</h3>
      <ul>
        <li><strong>Account data:</strong> full name, business name, email address, phone number, billing address, tax or VAT identification number, position/role.</li>
        <li><strong>Authentication data:</strong> password (stored only as a salted hash), two-factor-authentication tokens.</li>
        <li><strong>Payment data:</strong> we do not store full card numbers, bank account numbers, or other sensitive payment credentials. Payments are processed by Keepz, a payment service operated by JSC Credo Bank (Georgia); we receive only confirmation of a successful payment, the masked or tokenised payment-instrument reference, and the metadata necessary to allocate the payment to your account (date, amount, currency, transaction ID).</li>
        <li><strong>Communications:</strong> messages you send us via email, chat, support tickets, or forms, including any attachments.</li>
      </ul>

      <h3>4.2 Information collected automatically</h3>
      <ul>
        <li><strong>Technical data:</strong> IP address, browser type and version, device identifiers, operating system, approximate geolocation derived from IP, referring URL, time zone, and language preferences.</li>
        <li><strong>Usage data:</strong> pages viewed, features used, click paths, session duration, campaign performance metrics.</li>
        <li><strong>Cookies and similar technologies:</strong> see Section 10.</li>
      </ul>

      <h3>4.3 Information we receive from third parties</h3>
      <ul>
        <li><strong>Review Platforms:</strong> when you connect your Trustpilot, Reviews.io, Google, or similar account, we receive account identifiers, API tokens, and review data.</li>
        <li><strong>Payment providers:</strong> confirmation of successful payment, basic KYC signals.</li>
        <li>Analytics and fraud-prevention vendors.</li>
      </ul>

      <h3>4.4 Data we do NOT intentionally collect</h3>
      <p>
        We do not intentionally collect special categories of personal data within the meaning of Article 9 GDPR (such as data revealing racial or ethnic origin, political opinions, religious beliefs, health data, or biometric data). Please do not upload such data to the Services.
      </p>

      <h2>5. Why we process personal data and our legal basis</h2>
      <p>
        Under GDPR and the Law of Georgia on Personal Data Protection, we must have a lawful basis for each processing activity. The table below summarises the main purposes, the data used, and the lawful basis we rely on.
      </p>

      <div className="legal-table">
        <div className="legal-table-row">
          <div>
            <div className="legal-table-cell-label">Purpose</div>
            Providing, maintaining, and improving the Services; delivering customer support.
          </div>
          <div>
            <div className="legal-table-cell-label">Categories of data</div>
            Account, authentication, usage, technical, communications.
          </div>
          <div>
            <div className="legal-table-cell-label">Legal basis</div>
            Performance of a contract (Art. 6(1)(b) GDPR / Art. 5(b) Georgian Law).
          </div>
        </div>
        <div className="legal-table-row">
          <div>
            <div className="legal-table-cell-label">Purpose</div>
            Billing and collecting payments; preventing and detecting fraud.
          </div>
          <div>
            <div className="legal-table-cell-label">Categories of data</div>
            Account, billing, payment, technical.
          </div>
          <div>
            <div className="legal-table-cell-label">Legal basis</div>
            Performance of a contract; legal obligation (Art. 6(1)(b) and (c) GDPR).
          </div>
        </div>
        <div className="legal-table-row">
          <div>
            <div className="legal-table-cell-label">Purpose</div>
            Sending service-related emails (security alerts, notices of changes to terms).
          </div>
          <div>
            <div className="legal-table-cell-label">Categories of data</div>
            Account, communications.
          </div>
          <div>
            <div className="legal-table-cell-label">Legal basis</div>
            Legal obligation; legitimate interests in keeping users informed (Art. 6(1)(c) and (f)).
          </div>
        </div>
        <div className="legal-table-row">
          <div>
            <div className="legal-table-cell-label">Purpose</div>
            Direct marketing of our own similar services to existing Clients.
          </div>
          <div>
            <div className="legal-table-cell-label">Categories of data</div>
            Account, communications.
          </div>
          <div>
            <div className="legal-table-cell-label">Legal basis</div>
            Legitimate interests, subject to your right to object at any time (Art. 6(1)(f) and soft opt-in under ePrivacy).
          </div>
        </div>
        <div className="legal-table-row">
          <div>
            <div className="legal-table-cell-label">Purpose</div>
            Marketing to prospective Clients who are not yet our customers.
          </div>
          <div>
            <div className="legal-table-cell-label">Categories of data</div>
            Contact data, communications.
          </div>
          <div>
            <div className="legal-table-cell-label">Legal basis</div>
            Consent (Art. 6(1)(a) GDPR); you may withdraw at any time.
          </div>
        </div>
        <div className="legal-table-row">
          <div>
            <div className="legal-table-cell-label">Purpose</div>
            Complying with tax, accounting, anti-money-laundering, and other legal obligations.
          </div>
          <div>
            <div className="legal-table-cell-label">Categories of data</div>
            Account, billing, payment.
          </div>
          <div>
            <div className="legal-table-cell-label">Legal basis</div>
            Legal obligation (Art. 6(1)(c)).
          </div>
        </div>
        <div className="legal-table-row">
          <div>
            <div className="legal-table-cell-label">Purpose</div>
            Establishing, exercising, or defending legal claims.
          </div>
          <div>
            <div className="legal-table-cell-label">Categories of data</div>
            Any of the above, as relevant.
          </div>
          <div>
            <div className="legal-table-cell-label">Legal basis</div>
            Legitimate interests (Art. 6(1)(f)).
          </div>
        </div>
        <div className="legal-table-row">
          <div>
            <div className="legal-table-cell-label">Purpose</div>
            Security, monitoring for abuse, and enforcement of our Terms.
          </div>
          <div>
            <div className="legal-table-cell-label">Categories of data</div>
            Technical, usage, account.
          </div>
          <div>
            <div className="legal-table-cell-label">Legal basis</div>
            Legitimate interests (Art. 6(1)(f)).
          </div>
        </div>
      </div>

      <p>
        Where we rely on legitimate interests, we have conducted a balancing test and concluded that our interests do not override your fundamental rights. You have the right to object to such processing at any time (see Section 9).
      </p>

      <h2>6. Who we share personal data with</h2>
      <p>We share personal data only with the following categories of recipients, always under appropriate contractual safeguards:</p>
      <ul>
        <li><strong>Sub-processors and service providers:</strong> cloud hosting, email delivery (e.g. SendGrid, operated by Twilio Inc.), SMS delivery, analytics, customer-support tooling, error-monitoring, and payment processing (Keepz, operated by JSC Credo Bank, Georgia). A current list of sub-processors is available at <a href="https://review-boosters.org/subprocessors">https://review-boosters.org/subprocessors</a>.</li>
        <li><strong>Review Platforms:</strong> when you or your Client instruct us to submit invitations or publish Reviews to Trustpilot, Reviews.io, Google, or similar platforms.</li>
        <li><strong>Professional advisers:</strong> lawyers, accountants, auditors, insurers, under duties of confidentiality.</li>
        <li><strong>Public authorities:</strong> where disclosure is required by a binding court order or statutory obligation (tax authorities, the Personal Data Protection Service of Georgia, law-enforcement agencies acting on a lawful basis).</li>
        <li><strong>Purchasers in a corporate transaction:</strong> if we undergo a merger, acquisition, or sale of assets, personal data may be transferred, subject to the acquirer continuing to honour this Policy or giving you notice.</li>
      </ul>
      <p>
        We do not sell personal data, and we do not &ldquo;share&rdquo; personal data for cross-context behavioural advertising within the meaning of the CCPA/CPRA.
      </p>

      <h2>7. International data transfers</h2>
      <p>
        Georgia is recognised by the European Commission as having its own comprehensive data-protection framework. Where personal data is transferred from the European Economic Area, the United Kingdom, or Switzerland to Georgia or to any other country that does not benefit from an adequacy decision, we rely on one or more of the following safeguards:
      </p>
      <ul>
        <li>Standard Contractual Clauses adopted by the European Commission (Decision (EU) 2021/914), together with the UK Addendum where applicable;</li>
        <li>an adequacy decision, where available;</li>
        <li>supplementary technical, contractual, and organisational measures, based on a transfer-impact assessment.</li>
      </ul>
      <p>
        You may request a copy of the relevant safeguards by contacting us at <a href="mailto:contact@review-boosters.org">contact@review-boosters.org</a>.
      </p>

      <h2>8. How long we keep personal data</h2>
      <p>We retain personal data only as long as necessary for the purposes for which it was collected, including to comply with legal, accounting, or reporting requirements. Typical retention periods:</p>
      <ul>
        <li><strong>Account data:</strong> for the duration of your subscription plus up to twenty-four (24) months after termination.</li>
        <li><strong>Billing and invoicing records:</strong> six (6) years, in line with Georgian tax and accounting legislation.</li>
        <li><strong>Support communications:</strong> up to thirty-six (36) months after the last interaction.</li>
        <li><strong>Server logs and technical data:</strong> up to twelve (12) months.</li>
        <li><strong>Marketing-consent records:</strong> until you withdraw consent plus three (3) years for evidentiary purposes.</li>
        <li><strong>End Customer personal data</strong> (processed on behalf of a Client): for the duration of the Client&rsquo;s contract with us, plus up to thirty (30) days after termination, unless the Client requests earlier deletion.</li>
      </ul>
      <p>Where data is no longer needed, we either delete it securely or anonymise it so that it can no longer be linked to you.</p>

      <h2>9. Your rights</h2>
      <p>Subject to the conditions of Applicable Law, you have the following rights:</p>
      <ul>
        <li><strong>Right of access</strong> — to obtain confirmation of whether we process your personal data and, if so, to receive a copy.</li>
        <li><strong>Right to rectification</strong> — to have inaccurate or incomplete data corrected.</li>
        <li><strong>Right to erasure</strong> (&ldquo;right to be forgotten&rdquo;) — to have your data deleted where one of the grounds in Art. 17 GDPR / Art. 14 of the Georgian Law applies.</li>
        <li><strong>Right to restriction of processing</strong> — to limit how we use your data in certain circumstances.</li>
        <li><strong>Right to data portability</strong> — to receive your data in a structured, commonly used, machine-readable format.</li>
        <li><strong>Right to object</strong> — including to processing based on legitimate interests and to direct marketing (an absolute right in the latter case).</li>
        <li><strong>Right not to be subject to a decision based solely on automated processing,</strong> including profiling, that produces legal or similarly significant effects.</li>
        <li><strong>Right to withdraw consent</strong> at any time, without affecting the lawfulness of processing before the withdrawal.</li>
        <li><strong>Right to lodge a complaint</strong> with a supervisory authority (see Section 13).</li>
      </ul>
      <p>
        California residents additionally have the rights to know, to delete, to correct, to opt out of sale/sharing, and to non-discrimination under the CCPA/CPRA. Because we do not sell or share personal data for cross-context behavioural advertising, no opt-out is required for that purpose.
      </p>
      <p>
        To exercise any of these rights, contact us at <a href="mailto:contact@review-boosters.org">contact@review-boosters.org</a>. We will respond within thirty (30) days, extendable by up to sixty (60) days for complex requests. Exercising your rights is free of charge unless the request is manifestly unfounded or excessive.
      </p>

      <h2>10. Cookies and similar technologies</h2>
      <p>Our Website uses the following categories of cookies and similar technologies:</p>
      <ul>
        <li><strong>Strictly necessary cookies</strong> — essential to operate the Website (authentication, load balancing, security). These do not require consent.</li>
        <li><strong>Analytics cookies</strong> — help us understand how visitors use the Website (e.g. Google Analytics 4, operated by Google Ireland Limited). Set only with your consent.</li>
        <li><strong>Functional cookies</strong> — remember preferences such as language. Set only with your consent.</li>
        <li><strong>Marketing cookies</strong> — used to measure the effectiveness of our advertising. Set only with your consent.</li>
      </ul>
      <p>
        When you first visit the Website, you can accept or reject non-essential cookies through our cookie banner. You can change your preferences at any time via <a href="https://review-boosters.org/cookie-settings">https://review-boosters.org/cookie-settings</a> or by adjusting your browser settings. Rejecting non-essential cookies does not affect your ability to use the Services.
      </p>

      <h2>11. How we protect personal data</h2>
      <p>We implement technical and organisational measures appropriate to the risk, including:</p>
      <ul>
        <li>encryption in transit (TLS) and at rest for sensitive data;</li>
        <li>access controls, least-privilege principles, and multi-factor authentication for privileged accounts;</li>
        <li>regular backups and disaster-recovery testing;</li>
        <li>vulnerability monitoring, logging, and incident-response procedures;</li>
        <li>contractual obligations of confidentiality for personnel and sub-processors.</li>
      </ul>
      <p>
        Despite these measures, no method of transmission or storage is completely secure. If we become aware of a personal-data breach likely to result in a risk to your rights and freedoms, we will notify the competent supervisory authority within seventy-two (72) hours and, where legally required, inform affected individuals without undue delay.
      </p>

      <h2>12. Children</h2>
      <p>
        The Services are intended for business users only and are not directed at children under the age of sixteen (16). We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us and we will promptly delete it.
      </p>

      <h2>13. Complaints and supervisory authorities</h2>
      <p>If you have a concern about how we handle your personal data, please contact us first so we can try to resolve it. You also have the right to lodge a complaint with a supervisory authority, in particular:</p>
      <ul>
        <li><strong>Personal Data Protection Service of Georgia</strong> — <a href="https://personaldata.ge">personaldata.ge</a> — <a href="mailto:info@pdps.ge">info@pdps.ge</a> — +995 32 2 421 000.</li>
        <li>If you are in the EEA — the data-protection authority of your country of residence or place of work. A list is available at <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en">edpb.europa.eu</a>.</li>
        <li>If you are in the United Kingdom — the Information Commissioner&rsquo;s Office (ICO) — <a href="https://ico.org.uk">ico.org.uk</a> — +44 303 123 1113.</li>
      </ul>

      <h2>14. Automated decision-making and profiling</h2>
      <p>
        We do not make decisions that produce legal or similarly significant effects on you based solely on automated processing. We may use automated rules to detect fraud or abuse; any resulting action (for example, suspension of an account) is subject to human review upon request.
      </p>

      <h2>15. Changes to this Policy</h2>
      <p>
        We may update this Policy from time to time to reflect changes in our practices or Applicable Law. The &ldquo;Last updated&rdquo; date at the top shows when it was last changed. If we make material changes, we will notify you by email or a prominent notice on the Website at least fifteen (15) days before they take effect.
      </p>

      <h2>16. Contact</h2>
      <p>Questions, requests, and complaints regarding this Policy should be sent to:</p>
      <ul>
        <li>Review Boosters</li>
        <li>Email: <a href="mailto:contact@review-boosters.org">contact@review-boosters.org</a></li>
        <li>Website: <a href="https://review-boosters.org">https://review-boosters.org</a></li>
        <li>Operator: an individual entrepreneur registered in Georgia. Full legal-entity details are disclosed on written request to the contact email above.</li>
      </ul>
    </LegalDoc>
  );
}
