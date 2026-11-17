import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Cresvora",
  description: "Cresvora Privacy Policy — understanding how we handle information and data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <section className="relative pb-16 overflow-hidden stripe-texture">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-[#FF6B5B] text-xs font-semibold tracking-[0.3em] uppercase">Legal</span>
          </div>
          <h1 className="heading-lg mb-4" style={{ color: "var(--text-primary)" }}>Privacy Policy</h1>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Last updated: November 2026</p>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10 font-normal leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
          <div className="border border-[#FF6B5B]/20 bg-[#FF6B5B]/5 p-6 mb-8 rounded-xl">
            <h3 className="text-[#FF6B5B] font-semibold text-sm mb-2">Company Notice</h3>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Cresvora is currently an emerging technology venture with formal statutory incorporation in progress. This policy outlines our principles regarding data collection and usage through this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>1. Information We Collect</h2>
            <p className="mb-3">
              We collect information that you directly provide to us through contact forms, career inquiries or communications. This may include:
            </p>
            <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--text-muted)" }}>
              <li>Your name and contact details (email address, phone number).</li>
              <li>Information provided in inquiries, messages or career applications.</li>
              <li>Basic technical data automatically collected when you browse our website (e.g., browser type, general location).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>2. How We Use Information</h2>
            <p className="mb-3">We use the information we collect solely to:</p>
            <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--text-muted)" }}>
              <li>Respond to your inquiries, questions and partnership requests.</li>
              <li>Evaluate career and internship applications.</li>
              <li>Improve our website content, usability and performance.</li>
              <li>Communicate updates regarding our products where requested.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>3. Information Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We do not share personal information except where required by law or to protect our legitimate legal interests.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>4. Product Data</h2>
            <p>
              As our products are currently in development and research phases, this policy applies strictly to data collected through this website. Specific privacy policies will be established and published for each product prior to any public release.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>5. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at +91 9492270525 or via our Contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
