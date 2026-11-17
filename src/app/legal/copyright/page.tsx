import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright & Intellectual Property — Cresvora",
  description: "Cresvora Copyright and Intellectual Property policy.",
};

export default function CopyrightPage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <section className="relative pb-16 overflow-hidden stripe-texture">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-[#FF6B5B] text-xs font-semibold tracking-[0.3em] uppercase">Legal</span>
          </div>
          <h1 className="heading-lg mb-4" style={{ color: "var(--text-primary)" }}>Copyright & Intellectual Property</h1>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Last updated: November 2026</p>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10 font-normal leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>1. Ownership of Content</h2>
            <p>
              All materials displayed on this website, including but not limited to the brand identity, logo, product names (PathGuard, PAWIT, Animal Emotion Detector), visual designs, text descriptions, graphics, architecture diagrams and concepts, are the exclusive property of Cresvora and Vinod Gadekari (Kunukuntla Vinod Kumar).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>2. Cresvora Brand Assets</h2>
            <p>
              The Cresvora name, logo and visual identity are proprietary brand assets. You may not reproduce, adapt, alter or use these brand assets without prior written consent from Cresvora.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>3. Product Inventions & Concepts</h2>
            <p>
              The concepts, product architectures, feature designs and technical approaches described on this website represent proprietary research and development initiatives. Mention of these concepts on this website does not place them in the public domain.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>4. Permissions & Inquiries</h2>
            <p>
              For press inquiries, academic citations or permission requests regarding any content or brand assets, please contact us via our Contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
