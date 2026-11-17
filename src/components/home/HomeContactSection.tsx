"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function HomeContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Product Enquiries",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
              Direct Inquiries
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="heading-lg"
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s Create Something <span className="text-[#FF6B5B]">Meaningful.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base leading-relaxed mt-4 font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            Whether you have a product partnership proposal, research collaboration inquiry, or feedback on our technology initiatives, we invite your message.
          </motion.p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-xl border flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#FF6B5B]/15 text-[#FF6B5B]">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#FF6B5B] font-semibold mb-1">
                  HEADQUARTERS
                </div>
                <div className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>
                  Tirupati, Andhra Pradesh, India
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  Strategic innovation & research base
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
                  Email domain setup in progress
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  Use the quick form for immediate delivery
                </div>
              </div>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF6B5B] hover:text-[#ff8e82] transition-colors pt-2">
              <span>Go to Dedicated Contact Page</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Quick Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-xl border relative">
              {submitted ? (
                <div className="py-12 text-center">
                  <CheckCircle2 size={44} className="text-[#10B981] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-xs max-w-sm mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Thank you for reaching out to Cresvora. Your transmission has been logged with our leadership team.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Mr. / Ms."
                        className="w-full px-3.5 py-2.5 rounded border text-sm focus:outline-none focus:border-[#FF6B5B] transition-colors"
                        style={{
                          background: "var(--bg-secondary)",
                          borderColor: "var(--border-subtle)",
                          color: "var(--text-primary)",
                        }}
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
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded border text-sm focus:outline-none focus:border-[#FF6B5B] transition-colors"
                        style={{
                          background: "var(--bg-secondary)",
                          borderColor: "var(--border-subtle)",
                          color: "var(--text-primary)",
                        }}
                      />
                    </div>
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
                      <option value="Product Enquiries">Product Enquiries (PathGuard, PAWIT, Wearables)</option>
                      <option value="Research Collaboration">Academic & Research Collaboration</option>
                      <option value="Partnership & Commercialization">Partnership & Distribution</option>
                      <option value="Career & Engineering">Career & Internship Interest</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your inquiry, feedback, or proposed collaboration..."
                      className="w-full px-3.5 py-2.5 rounded border text-sm focus:outline-none focus:border-[#FF6B5B] transition-colors resize-none"
                      style={{
                        background: "var(--bg-secondary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <span>Send Message to Cresvora</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

