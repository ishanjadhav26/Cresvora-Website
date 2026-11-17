"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Target } from "lucide-react";

export default function MissionVision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0 stripe-texture opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
              Purpose & Long-Term Horizon
            </span>
            <div className="w-8 h-px bg-[#FF6B5B]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="heading-lg"
            style={{ color: "var(--text-primary)" }}
          >
            Guided by <span className="text-[#FF6B5B]">Purpose.</span>
          </motion.h2>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass-card p-8 sm:p-12 rounded-xl border relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF6B5B]">
                <Target size={18} />
                <span>01 &bull; OUR MISSION</span>
              </div>
              <span className="text-3xl font-serif opacity-30">&ldquo;</span>
            </div>

            <blockquote className="text-xl sm:text-2xl font-light leading-relaxed mb-6" style={{ color: "var(--text-primary)" }}>
              &ldquo;To develop intelligent, accessible and affordable technology products that solve real-world challenges and improve quality of life through innovation and engineering excellence.&rdquo;
            </blockquote>

            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Focused on direct practical utility — turning advanced neural models and embedded electronics into affordable assistive products.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="glass-card p-8 sm:p-12 rounded-xl border relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#38BDF8]">
                <Compass size={18} />
                <span>02 &bull; OUR VISION</span>
              </div>
              <span className="text-3xl font-serif opacity-30 text-[#38BDF8]">&ldquo;</span>
            </div>

            <blockquote className="text-xl sm:text-2xl font-light leading-relaxed mb-6" style={{ color: "var(--text-primary)" }}>
              &ldquo;To become a globally recognised technology product company delivering impactful innovations in Artificial Intelligence, IoT, assistive technology, animal intelligence and smart wearable solutions.&rdquo;
            </blockquote>

            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Building world-class hardware products exported internationally from India, engineered with uncompromising aesthetic and functional integrity.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
