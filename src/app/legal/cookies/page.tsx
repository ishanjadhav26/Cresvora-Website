import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Cresvora",
  description: "Cresvora Cookie Policy — how we use cookies and tracking technologies.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <section className="relative pb-16 overflow-hidden stripe-texture">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-[#FF6B5B] text-xs font-semibold tracking-[0.3em] uppercase">Legal</span>
          </div>
          <h1 className="heading-lg mb-4" style={{ color: "var(--text-primary)" }}>Cookie Policy</h1>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Last updated: November 2026</p>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10 font-normal leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that websites store on your device to remember information about your visit, such as your theme preferences (Dark or Light mode) or display settings.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>2. How Cresvora Uses Cookies</h2>
            <p className="mb-3">
              Cresvora uses minimal local storage and cookies strictly necessary for the technical operation of this website, including:
            </p>
            <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--text-muted)" }}>
              <li>Client preference storage for Dark / Light theme selection.</li>
              <li>Basic performance analytics to understand how visitors interact with our content.</li>
            </ul>
            <p className="mt-3">
              We do not use third-party advertising tracking cookies to profile your behavior across external sites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>3. Managing Cookies</h2>
            <p>
              You can control and manage cookies using your browser settings. You can delete existing cookies and block new ones at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
