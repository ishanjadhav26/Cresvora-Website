"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, ShieldCheck, ArrowRight, Award } from "lucide-react";

export default function FounderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founder" ref={ref} className="section-padding relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
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
              Leadership & Vision
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="heading-lg"
            style={{ color: "var(--text-primary)" }}
          >
            Driven by Vision. <span className="text-[#FF6B5B]">Built Through Engineering.</span>
          </motion.h2>
        </div>

        {/* Founder Feature Box */}
        <div
          className="glass-card rounded-2xl p-8 sm:p-12 border relative overflow-hidden"
          style={{ borderColor: "var(--border-medium)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Founder Portrait Frame (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                className="w-full max-w-[280px] aspect-[3/4] rounded-xl border flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group shadow-xl"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-medium)",
                }}
              >
                <div className="w-24 h-24 rounded-full border-2 border-[#FF6B5B]/40 flex items-center justify-center mb-6 bg-[#FF6B5B]/5 shadow-inner">
                  <User size={40} className="text-[#FF6B5B]" />
                </div>
                <div className="font-bold text-lg mb-1" style={{ color: "var(--text-primary)" }}>
                  Vinod Gadekari
                </div>
                <div className="text-xs font-mono text-[#FF6B5B] uppercase tracking-wider mb-2">
                  Founder & CEO
                </div>
                <div className="text-[11px] font-mono leading-tight" style={{ color: "var(--text-muted)" }}>
                  Kunukuntla Vinod Kumar
                </div>

                {/* Subtle corner tech ornaments */}
                <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#FF6B5B]/50" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#FF6B5B]/50" />
              </div>
            </div>

            {/* Right: Bio & Strategic Direction (8 cols) */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-[#FF6B5B] bg-[#FF6B5B]/10 border border-[#FF6B5B]/20 mb-6">
                <Award size={13} />
                <span>EXECUTIVE PROFILE</span>
              </div>

              <h3 className="heading-md mb-2" style={{ color: "var(--text-primary)" }}>
                Vinod Gadekari
              </h3>
              <p className="text-xs font-mono mb-6" style={{ color: "var(--text-muted)" }}>
                Official Name: Kunukuntla Vinod Kumar &bull; Tirupati, Andhra Pradesh, India
              </p>

              <div className="space-y-4 text-base font-normal leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                <p>
                  Vinod Gadekari is an entrepreneur and technology innovator specializing in Artificial Intelligence, Embedded Systems, Internet of Things and next-generation connected hardware.
                </p>
                <p>
                  As Founder and CEO of Cresvora, he steers the company&apos;s strategic roadmap, research initiatives, physical prototype engineering, and technology commercialization efforts.
                </p>
                <p>
                  His foundational vision is to transform complex technological concepts into accessible, production-grade products that directly uplift lives across assistive mobility, animal welfare, and healthcare awareness.
                </p>
              </div>

              {/* Founder Focus Areas Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Artificial Intelligence",
                  "Embedded Systems",
                  "Internet of Things",
                  "Assistive Technology",
                  "Hardware Commercialisation",
                  "Strategic R&D",
                ].map((item) => (
                  <span key={item} className="badge-tech">
                    {item}
                  </span>
                ))}
              </div>

              <Link href="/team" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B5B] hover:text-[#ff8e82] transition-colors group">
                <span>View Leadership & Engineering Team Structure</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
