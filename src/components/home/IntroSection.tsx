"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function IntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      {/* Subtle texture */}
      <div className="absolute inset-0 stripe-texture opacity-50 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Left: Hardware Laboratory Image Showcase (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="img-editorial relative shadow-2xl group">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/cresvora-lab.png"
                  alt="Cresvora Hardware Prototyping Laboratory Workbench"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Editorial Caption Tag */}
              <div
                className="absolute bottom-4 left-4 right-4 glass px-4 py-3 rounded border flex items-center justify-between"
                style={{ borderColor: "var(--border-medium)" }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <div>
                    <div className="text-xs font-semibold tracking-wider font-mono text-[#F4EDE0]">
                      CRESVORA R&D WORKBENCH
                    </div>
                    <div className="text-[11px] font-mono text-[#F4EDE0]/70">
                      Hardware Prototyping &bull; Embedded Logic Testing
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono border border-white/20 text-[#FF6B5B] px-2.5 py-1 rounded uppercase tracking-wider">
                  Lab Alpha
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial Narrative (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#FF6B5B]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
                Introducing Cresvora
              </span>
            </div>

            <h2 className="heading-lg mb-6" style={{ color: "var(--text-primary)" }}>
              Beyond Technology.{" "}
              <span className="text-[#FF6B5B]">Into Possibilities.</span>
            </h2>

            <div className="space-y-4 text-base font-normal leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              <p>
                Cresvora is an emerging product-driven innovation venture focused on engineering intelligent, AI-powered and IoT-enabled solutions that solve genuine real-world challenges.
              </p>
              <p>
                By combining Artificial Intelligence, Embedded Firmware, Connected Sensors, Smart Hardware and Robust Software, we turn theoretical engineering into dependable physical products.
              </p>
              <p>
                Our mission is to make daily life safer, smarter and more accessible through thoughtful, accessible technology.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { title: "AI-First Products", desc: "Intelligence at the edge" },
                { title: "Hardware Craft", desc: "Microcontrollers & PCB" },
                { title: "Human Centric", desc: "Designed for real lives" },
                { title: "Rigorous R&D", desc: "Tested in real conditions" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded border transition-colors hover:border-[#FF6B5B]/40"
                  style={{
                    borderColor: "var(--border-subtle)",
                    background: "var(--bg-card)",
                  }}
                >
                  <div className="flex items-center gap-1.5 font-semibold text-xs mb-1 text-[#FF6B5B]">
                    <CheckCircle2 size={13} />
                    <span>{item.title}</span>
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B5B] hover:text-[#ff8e82] transition-colors group">
              <span>Read Our Full Story & Principles</span>
              <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
