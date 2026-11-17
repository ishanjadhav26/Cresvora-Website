"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const footerNav = {
  Navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Research & R&D", href: "/research" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  Products: [
    { label: "PathGuard (Vision AI)", href: "/products/pathguard" },
    { label: "PAWIT (Pet Intelligence)", href: "/products/pawit" },
    { label: "Animal Emotion Detector", href: "/products/animal-emotion" },
    { label: "Human Smart Wearable", href: "/products/smart-wearable" },
    { label: "All Product Portfolios", href: "/products" },
  ],
  Governance: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Copyright & IP", href: "/legal/copyright" },
    { label: "Cookie Policy", href: "/legal/cookies" },
    { label: "Data Protection Policy", href: "/legal/data-protection" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="border-t transition-colors duration-300"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3.5 mb-6 group">
              <div className="relative w-8 h-10 transition-transform group-hover:scale-105">
                <Image
                  src="/logo-mark.png"
                  alt="Cresvora Logo"
                  fill
                  className="object-contain"
                  sizes="36px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-[0.14em]" style={{ color: "var(--text-primary)" }}>
                  CRESVORA
                </span>
                <span className="text-[9px] font-mono tracking-[0.24em] uppercase text-[#FF6B5B]">
                  Intelligence in Action. Innovation in Motion.
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-6 max-w-sm font-normal" style={{ color: "var(--text-secondary)" }}>
              A product-driven technology innovation company engineering intelligent hardware, AI-powered assistive solutions, and IoT ecosystems.
            </p>

            {/* Direct Contact Badges */}
            <div className="space-y-2.5 mb-6 text-xs font-mono">
              <div className="flex items-center gap-2.5" style={{ color: "var(--text-muted)" }}>
                <MapPin size={14} className="text-[#FF6B5B] flex-shrink-0" />
                <span>Tirupati, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2.5" style={{ color: "var(--text-muted)" }}>
                <Phone size={14} className="text-[#FF6B5B] flex-shrink-0" />
                <a href="tel:+919492270525" className="hover:text-[#FF6B5B] transition-colors">
                  +91 9492270525
                </a>
              </div>
              <div className="flex items-center gap-2.5" style={{ color: "var(--text-muted)" }}>
                <Mail size={14} className="text-[#FF6B5B] flex-shrink-0" />
                <span className="italic">Domain email setup in progress</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              {[
                { Icon: LinkedInIcon, label: "LinkedIn" },
                { Icon: TwitterIcon, label: "Twitter" },
                { Icon: InstagramIcon, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  className="w-8 h-8 rounded border flex items-center justify-center transition-all hover:border-[#FF6B5B] hover:text-[#FF6B5B]"
                  style={{
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-muted)",
                    background: "var(--glass-bg)",
                  }}
                  aria-label={`${label} channel (coming soon)`}
                  title={`${label} channel (coming soon)`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerNav).map(([category, links]) => (
              <div key={category}>
                <div className="text-[11px] font-mono uppercase font-bold tracking-[0.2em] mb-4 text-[#FF6B5B]">
                  {category}
                </div>
                <ul className="space-y-2.5 text-xs font-normal">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-[#FF6B5B] inline-block"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Sub-Footer Disclosures */}
      <div className="border-t py-6" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
          <p>
            &copy; 2026 Cresvora. All intellectual property & engineering designs reserved.
          </p>
          <p className="text-[11px] text-center md:text-right opacity-80">
            Entity status: Emerging venture with statutory incorporation pending. Product capabilities represent planned initiatives.
          </p>
        </div>
      </div>
    </footer>
  );
}
