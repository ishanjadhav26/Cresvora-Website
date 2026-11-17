"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden text-center"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Ambient center glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, var(--coral-glow) 0%, transparent 65%)",
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-8 glass"
          style={{ borderColor: "var(--border-medium)" }}
        >
          <Sparkles size={13} className="text-[#FF6B5B]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#FF6B5B] font-semibold">
            THE HORIZON AHEAD
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black mb-6 tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          The Future Is <span className="text-[#FF6B5B] coral-glow-text">Engineered.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl font-normal leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Have an idea, an innovation or a problem worth solving? Let&apos;s build something meaningful together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <Link href="/contact" className="btn-primary group text-sm">
            <span>Let&apos;s Connect</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/products" className="btn-secondary text-sm">
            <span>Explore All Products</span>
          </Link>
        </motion.div>

        <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-xs" style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}>
          <span className="font-mono uppercase tracking-widest">
            CRESVORA &bull; INTELLIGENCE IN ACTION. INNOVATION IN MOTION.
          </span>
          <span className="mt-2 sm:mt-0 font-mono">
            TIRUPATI, INDIA
          </span>
        </div>

      </div>
    </section>
  );
}
