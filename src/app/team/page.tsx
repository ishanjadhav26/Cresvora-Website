import type { Metadata } from "next";
import Link from "next/link";
import { User, Award, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team — Cresvora",
  description: "Meet the leadership and engineering team behind Cresvora's hardware, AI, and product innovations.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
              People & Structure
            </span>
          </div>

          <h1 className="heading-xl mb-6" style={{ color: "var(--text-primary)" }}>
            People Behind the <span className="text-[#FF6B5B]">Innovation.</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: "var(--text-secondary)" }}>
            Cresvora is spearheaded by multi-disciplinary technologists driven to build practical, life-improving physical products.
          </p>
        </div>

        {/* Founder Feature */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 border mb-16" style={{ borderColor: "var(--border-medium)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div
                className="w-full max-w-[280px] aspect-[3/4] rounded-xl border flex flex-col items-center justify-center p-6 text-center shadow-xl relative"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-medium)",
                }}
              >
                <div className="w-24 h-24 rounded-full border-2 border-[#FF6B5B]/40 flex items-center justify-center mb-6 bg-[#FF6B5B]/5">
                  <User size={40} className="text-[#FF6B5B]" />
                </div>
                <div className="font-bold text-lg mb-1" style={{ color: "var(--text-primary)" }}>
                  Vinod Gadekari
                </div>
                <div className="text-xs font-mono text-[#FF6B5B] uppercase tracking-wider mb-2">
                  Founder & CEO
                </div>
                <div className="text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>
                  Kunukuntla Vinod Kumar
                </div>
                <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#FF6B5B]/50" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#FF6B5B]/50" />
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-[#FF6B5B] bg-[#FF6B5B]/10 border border-[#FF6B5B]/20 mb-6">
                <Award size={13} />
                <span>EXECUTIVE LEADERSHIP</span>
              </div>

              <h2 className="heading-md mb-2" style={{ color: "var(--text-primary)" }}>
                Vinod Gadekari
              </h2>
              <p className="text-xs font-mono mb-6" style={{ color: "var(--text-muted)" }}>
                Kunukuntla Vinod Kumar &bull; Founder & Chief Executive Officer
              </p>

              <div className="space-y-4 text-base font-normal leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                <p>
                  Vinod Gadekari is an entrepreneur and technology innovator focused on Artificial Intelligence, Embedded Systems, Internet of Things and emerging technology products.
                </p>
                <p>
                  As Founder and CEO of Cresvora, he leads the company&apos;s strategic direction, product innovation, research initiatives, business development and technology commercialisation.
                </p>
                <p>
                  His vision is to transform practical technology ideas into scalable products that address real-world challenges across accessibility, animal wellness, healthcare and intelligent wearable technology.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Artificial Intelligence", "Embedded Systems", "IoT", "Product Innovation", "Technology Commercialisation"].map((area) => (
                  <span key={area} className="badge-tech">
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Engineering Disciplines Grid */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B5B] font-bold mb-4">
            ENGINEERING DISCIPLINES
          </div>
          <h2 className="heading-md mb-8" style={{ color: "var(--text-primary)" }}>
            Organizational Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI & ML Engineering", desc: "Edge model training, ONNX quantization, acoustic feature extraction, and computer vision pipelines." },
              { title: "Embedded Systems & Firmware", desc: "Deterministic C/C++ firmware, FreeRTOS task scheduling, BLE/cellular drivers, and power management." },
              { title: "Hardware & PCB Layout", desc: "Schematics, multi-layer high-frequency PCB routing, signal integrity testing, and physical enclosure design." },
              { title: "Full-Stack Software", desc: "Next.js web dashboards, Flutter companion mobile apps, cloud IoT backends, and secure device authentication." },
              { title: "Product Research & Ethology", desc: "Human ergonomics, clinical accessibility validation, and bio-acoustic animal behavior datasets." },
            ].map((dept, i) => (
              <div key={dept.title} className="glass-card p-6 rounded-xl border flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#FF6B5B] mb-3">
                    DIVISION 0{i + 1}
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                    {dept.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    {dept.desc}
                  </p>
                </div>
                <div className="pt-3 border-t flex items-center justify-between" style={{ borderColor: "var(--border-subtle)" }}>
                  <span className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>Status</span>
                  <span className="text-[11px] font-mono text-[#38BDF8]">Expanding Active Team</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notice on Team Representation */}
        <div className="p-6 rounded-xl border glass max-w-3xl" style={{ borderColor: "var(--border-medium)" }}>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#10B981] mb-2">
            <ShieldCheck size={16} /> TRANSPARENCY NOTICE
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            In accordance with our strict brand guidelines, Cresvora only displays verified personnel. Team profiles are updated as formal appointments are onboarded.
          </p>
        </div>

      </div>
    </div>
  );
}
