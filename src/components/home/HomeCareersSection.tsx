"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Sparkles, Terminal, Cpu } from "lucide-react";

const opportunityTracks = [
  { title: "Embedded Firmware & IoT", desc: "ESP32, STM32, Nordic nRF, RTOS & low-latency sensor protocols." },
  { title: "Edge AI & Computer Vision", desc: "PyTorch, TensorFlow Lite, ONNX & real-time video pipeline optimizations." },
  { title: "Hardware & PCB Layout", desc: "Schematics, multi-layer high-frequency PCB routing & hardware testing." },
  { title: "Software & Mobile Architecture", desc: "Next.js web platforms, Flutter companion apps & real-time telemetry." },
];

export default function HomeCareersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="careers" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0 stripe-texture opacity-30 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#FF6B5B]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
                Careers & Talent
              </span>
            </div>

            <h2 className="heading-lg mb-6" style={{ color: "var(--text-primary)" }}>
              Build Technology That <span className="text-[#FF6B5B]">Matters.</span>
            </h2>

            <p className="text-base leading-relaxed mb-8 font-normal" style={{ color: "var(--text-secondary)" }}>
              We believe transformative breakthroughs happen when curious minds, hands-on hardware engineering, and a passion for human impact unite. If you enjoy building real systems from the ground up, explore our open enquiry streams.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/careers" className="btn-primary group">
                <span>View Engineering Opportunities</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Opportunity Track Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {opportunityTracks.map((track, i) => (
              <div
                key={track.title}
                className="glass-card p-6 rounded-xl border flex flex-col justify-between hover:border-[#FF6B5B]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#FF6B5B]">STREAM 0{i + 1}</span>
                    <Terminal size={14} style={{ color: "var(--text-muted)" }} />
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "var(--text-primary)" }}>
                    {track.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {track.desc}
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

        </div>
      </div>
    </section>
  );
}

