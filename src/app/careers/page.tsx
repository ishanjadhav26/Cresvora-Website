"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Briefcase, Terminal } from "lucide-react";

const opportunityAreas = [
  { area: "Embedded Systems & Firmware", desc: "Low-power C/C++ development for ESP32, STM32, and Nordic nRF52840, RTOS kernels, and sensor drivers." },
  { area: "Edge AI & Computer Vision", desc: "PyTorch/TensorFlow, model quantization (TinyML, ONNX), real-time video stream processing, and acoustic DSP." },
  { area: "Hardware & PCB Layout Engineering", desc: "Schematic capture, high-speed multi-layer PCB design, impedance matching, and bench testing with oscilloscopes." },
  { area: "IoT Cloud & Software Architecture", desc: "Next.js, TypeScript, Flutter mobile development, secure MQTT data pipelines, and scalable APIs." },
  { area: "Assistive Tech & Bio-Acoustic Research", desc: "Empirical studies with visually impaired end-users, animal behavior dataset curation, and ethological analysis." },
  { area: "Hardware Engineering Internships", desc: "Hands-on laboratory opportunities for ambitious students passionate about physical electronics and AI integration." },
];

export default function CareersPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "Embedded Systems & Firmware",
    message: "",
    portfolio: "",
  });

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
              Join Cresvora
            </span>
          </div>

          <h1 className="heading-xl mb-6" style={{ color: "var(--text-primary)" }}>
            Build Technology That <span className="text-[#FF6B5B]">Matters.</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: "var(--text-secondary)" }}>
            We believe meaningful innovation comes from curious minds, collaborative engineering, and people who relish solving hard technical problems in the physical world.
          </p>
        </div>

        {/* Opportunity Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {opportunityAreas.map((opp, i) => (
            <div key={opp.area} className="glass-card p-6 rounded-xl border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#FF6B5B]">STREAM 0{i + 1}</span>
                  <Terminal size={15} style={{ color: "var(--text-muted)" }} />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                  {opp.area}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {opp.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t flex items-center justify-between" style={{ borderColor: "var(--border-subtle)" }}>
                <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  Rolling Review
                </span>
                <span className="text-xs font-mono text-[#10B981]">&bull; Open</span>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto glass-card p-8 sm:p-12 rounded-2xl border" style={{ borderColor: "var(--border-medium)" }}>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF6B5B] font-bold mb-2">
            APPLICATION & TALENT ENQUIRY
          </div>
          <h2 className="heading-md mb-2" style={{ color: "var(--text-primary)" }}>
            Express Your Interest
          </h2>
          <p className="text-xs leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
            Tell us about your background, what engineering problems you enjoy tackling, and why you want to build hardware with Cresvora.
          </p>

          {formSubmitted ? (
            <div className="py-12 text-center">
              <CheckCircle2 size={48} className="text-[#10B981] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                Application Enquiry Received
              </h3>
              <p className="text-xs max-w-md mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Thank you for your interest in Cresvora. Our engineering leads review expressions of interest on a rolling basis.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                    Full Name *
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
                    Phone Number
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
                    Primary Discipline *
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border text-sm focus:outline-none focus:border-[#FF6B5B] transition-colors"
                    style={{
                      background: "var(--bg-secondary)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {opportunityAreas.map((opp) => (
                      <option key={opp.area} value={opp.area}>{opp.area}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                  Portfolio / GitHub / Project Links
                </label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded border text-sm focus:outline-none focus:border-[#FF6B5B] transition-colors"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="https://github.com/your-username"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                  Why Cresvora & What Do You Want To Build? *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded border text-sm focus:outline-none focus:border-[#FF6B5B] transition-colors resize-none"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Tell us what excites you about our mission and hardware focus..."
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                <span>Submit Career Interest</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
