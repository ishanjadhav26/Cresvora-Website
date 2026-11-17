import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Cresvora",
  description: "Cresvora Terms & Conditions — website usage terms and product disclosures.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <section className="relative pb-16 overflow-hidden stripe-texture">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-[#FF6B5B] text-xs font-semibold tracking-[0.3em] uppercase">Legal</span>
          </div>
          <h1 className="heading-lg mb-4" style={{ color: "var(--text-primary)" }}>Terms & Conditions</h1>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Last updated: November 2026</p>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10 font-normal leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>1. Website Purpose</h2>
            <p>
              This website is published by Cresvora for informational purposes regarding our technology initiatives, research and planned products. By accessing this website, you agree to these Terms & Conditions.
            </p>
          </div>

          <div className="border border-[#FF6B5B]/20 bg-[#FF6B5B]/5 p-6 rounded-xl">
            <h2 className="text-[#FF6B5B] text-base font-semibold mb-2">2. Product Disclosure & Status</h2>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              All products showcased on this website — including PathGuard, PAWIT, Animal Emotion Detector and the Human Smart Wearable — represent concepts, prototypes or initiatives in active research and development. Cresvora makes no representations or warranties that these products are commercially available, clinically validated or fit for any specific medical or safety purpose.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>3. Company Entity Disclosure</h2>
            <p>
              Cresvora is currently an emerging technology venture. Statutory registrations and formal corporate incorporation are pending. Nothing on this website should be interpreted as representing Cresvora as a fully incorporated private limited company at this stage.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>4. Intellectual Property</h2>
            <p>
              All content on this website — including text, logos, graphics, design elements and concept descriptions — is the intellectual property of Cresvora and its founder, unless otherwise credited. Unauthorized reproduction or use is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>5. Disclaimer of Warranties</h2>
            <p>
              This website and all information provided on it are made available &ldquo;as is&rdquo; without warranties of any kind, whether express or implied.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
