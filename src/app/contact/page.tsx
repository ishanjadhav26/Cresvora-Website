"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight, Send } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "General Enquiries",
    subject: "",
    message: "",
  });

  const categories = [
    "General Enquiries",
    "Product Enquiries (PathGuard, PAWIT, Wearables)",
    "Business & Distribution Partnerships",
    "Research Collaborations",
    "Career & Internship Enquiries",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
              Direct Inquiries
            </span>
          </div>

          <h1 className="heading-xl mb-6" style={{ color: "var(--text-primary)" }}>
            Let&apos;s Create Something <span className="text-[#FF6B5B]">Meaningful.</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: "var(--text-secondary)" }}>
            Whether you have an inquiry regarding our product initiatives, research partnerships, or technology vision, we welcome your communication.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-xl border flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#FF6B5B]/15 text-[#FF6B5B]">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#FF6B5B] font-semibold mb-1">
                  OFFICIAL LOCATION
                </div>
                <div className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>
                  Tirupati, Andhra Pradesh, India
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  Corporate headquarters & hardware lab
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl border flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#38BDF8]/15 text-[#38BDF8]">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-semibold mb-1">
                  DIRECT PHONE
                </div>
                <a
                  href="tel:+919492270525"
                  className="font-medium text-sm hover:text-[#FF6B5B] transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  +91 9492270525
                </a>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  Mon &ndash; Fri &bull; 9:00 AM &ndash; 6:00 PM IST
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl border flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#10B981]/15 text-[#10B981]">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-semibold mb-1">
                  OFFICIAL EMAIL
                </div>
                <div className="font-medium text-sm italic" style={{ color: "var(--text-secondary)" }}>
                  Domain email in configuration
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  Forms submitted below are delivered immediately
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border glass" style={{ borderColor: "var(--border-subtle)" }}>
              <div className="text-[11px] font-mono text-[#FF6B5B] uppercase tracking-wider font-bold mb-1">
                CORPORATE NOTICE
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Cresvora is currently an emerging technology venture with statutory registrations in progress. Direct communications are addressed directly by leadership.
              </p>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-2xl border relative">
              {formSubmitted ? (
                <div className="py-12 text-center">
                  <CheckCircle2 size={48} className="text-[#10B981] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-xs max-w-md mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Thank you for reaching out to Cresvora. A member of our executive engineering team will follow up promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded border text-sm focus:outline-none focus:border-[#FF6B5B] transition-colors"
                        style={{
                          background: "var(--bg-secondary)",
                          borderColor: "var(--border-subtle)",
                          color: "var(--text-primary)",
                        }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded border text-sm focus:outline-none focus:border-[#FF6B5B] transition-colors"
                        style={{
                          background: "var(--bg-secondary)",
                          borderColor: "var(--border-subtle)",
                          color: "var(--text-primary)",
                        }}
                        placeholder="you@domain.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded border text-sm focus:outline-none focus:border-[#FF6B5B] transition-colors"
                        style={{
                          background: "var(--bg-secondary)",
                          borderColor: "var(--border-subtle)",
                          color: "var(--text-primary)",
                        }}
                        placeholder="+91 0000000000"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                        Inquiry Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded border text-sm focus:outline-none focus:border-[#FF6B5B] transition-colors"
                        style={{
                          background: "var(--bg-secondary)",
                          borderColor: "var(--border-subtle)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {categories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border text-sm focus:outline-none focus:border-[#FF6B5B] transition-colors"
                      style={{
                        background: "var(--bg-secondary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                      placeholder="Brief topic summary"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Detailed Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border text-sm focus:outline-none focus:border-[#FF6B5B] transition-colors resize-none"
                      style={{
                        background: "var(--bg-secondary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                      placeholder="Describe your inquiry, proposed partnership, or questions..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <span>Transmit Message</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
