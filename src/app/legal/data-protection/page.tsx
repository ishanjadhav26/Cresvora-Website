import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Protection Policy — Cresvora",
  description: "Cresvora Data Protection Policy — our commitment to protecting information.",
};

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <section className="relative pb-16 overflow-hidden stripe-texture">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-[#FF6B5B] text-xs font-semibold tracking-[0.3em] uppercase">Legal</span>
          </div>
          <h1 className="heading-lg mb-4" style={{ color: "var(--text-primary)" }}>Data Protection Policy</h1>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Last updated: November 2026</p>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10 font-normal leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>1. Our Commitment</h2>
            <p>
              Cresvora is committed to responsible, transparent and secure handling of all data entrusted to us. As an emerging technology company developing AI and IoT systems, data protection and privacy are fundamental design principles.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>2. Core Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {[
                { title: "Data Minimisation", desc: "We only collect information that is strictly necessary for the stated engineering or inquiry purpose." },
                { title: "Purpose Limitation", desc: "Data collected is used only for the purpose for which it was originally gathered." },
                { title: "Security by Design", desc: "We design our hardware firmware and cloud APIs with cryptographic encryption and access controls." },
                { title: "Transparency", desc: "We are clear about what telemetry our prototypes capture, why it is gathered and how it is protected." },
              ].map((p) => (
                <div key={p.title} className="glass-card p-4 rounded-xl border">
                  <div className="text-[#FF6B5B] text-xs font-mono uppercase tracking-wider mb-1 font-semibold">{p.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>3. Product Research Data</h2>
            <p>
              Where Cresvora conducts research involving telemetry data collection (e.g., animal vocalisation audio datasets or spatial LiDAR depth clouds), such data is gathered ethically, handled securely, and used solely for research and technology validation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>4. Security Measures</h2>
            <p>
              We implement industry-standard technical and organizational security measures to protect data against unauthorized access, alteration, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>5. Data Subject Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data held by Cresvora. To exercise these rights, please contact us via our Contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
