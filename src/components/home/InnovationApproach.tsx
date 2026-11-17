"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Cpu, Box, RefreshCw } from "lucide-react";

const stages = [
  {
    id: "01",
    title: "Research & Problem Discovery",
    description: "Deep examination of real human friction points — in visual accessibility, animal communication, and continuous personal safety — identifying what current technology fails to address.",
    icon: Search,
    accent: "#FF6B5B",
  },
  {
    id: "02",
    title: "Cross-Disciplinary Engineering",
    description: "Architecting custom embedded circuit boards, selecting microcontrollers (ESP32/STM32), training specialized neural network models, and designing low-latency communication firmware.",
    icon: Cpu,
    accent: "#F59E0B",
  },
  {
    id: "03",
    title: "Physical Prototype Development",
    description: "Fabricating tactile prototypes, testing sensor calibrations under varied environmental conditions, and deploying edge AI inference directly on wearable form factors.",
    icon: Box,
    accent: "#38BDF8",
  },
  {
    id: "04",
    title: "Continuous Field Testing & Scalability",
    description: "Empirical validation with target users, continuous model optimization, power budget refinement, and preparing designs for scalable manufacturing standards.",
    icon: RefreshCw,
    accent: "#10B981",
  },
];

export default function InnovationApproach() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
              Engineering Methodology
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="heading-lg"
            style={{ color: "var(--text-primary)" }}
          >
            From Ideas to <span className="text-[#FF6B5B]">Intelligent Products.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base leading-relaxed mt-4 font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            We adhere to a disciplined four-stage innovation cycle bridging foundational research to production-ready hardware.
          </motion.p>
        </div>

        {/* 4 Stage Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.id}
                className="glass-card p-6 sm:p-7 rounded-xl border flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-mono text-sm font-bold px-2 py-0.5 rounded border"
                      style={{
                        borderColor: stage.accent,
                        color: stage.accent,
                        background: "rgba(255, 107, 91, 0.08)",
                      }}
                    >
                      STAGE {stage.id}
                    </span>
                    <div className="p-2.5 rounded-lg border glass" style={{ borderColor: "var(--border-subtle)" }}>
                      <Icon size={18} style={{ color: stage.accent }} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                    {stage.title}
                  </h3>

                  <p className="text-xs leading-relaxed font-normal" style={{ color: "var(--text-secondary)" }}>
                    {stage.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--border-subtle)" }}>
                  <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    Phase 0{i + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: stage.accent }} />
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: stage.accent }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
