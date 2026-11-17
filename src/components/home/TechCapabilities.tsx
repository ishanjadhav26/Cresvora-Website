"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techGroups = [
  {
    category: "Artificial Intelligence & Edge Compute",
    accent: "#FF6B5B",
    items: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Deep Learning", "Computer Vision", "NLP", "Generative AI", "LLM Integration", "TinyML"],
  },
  {
    category: "Internet of Things & Connected Devices",
    accent: "#F59E0B",
    items: ["ESP32", "STM32", "Nordic nRF52840", "MQTT Protocol", "Sensor Fusion", "Cloud IoT", "BLE 5.2", "Cellular LTE-M"],
  },
  {
    category: "Embedded Systems & Hardware Design",
    accent: "#38BDF8",
    items: ["Embedded C/C++", "FreeRTOS", "PCB Schematic Design", "KiCad / Altium", "Hardware Prototyping", "Firmware Toolchains", "SPI / I2C / UART"],
  },
  {
    category: "Software Engineering & Companion Cloud",
    accent: "#10B981",
    items: ["Next.js", "React.js", "Flutter", "Node.js", "FastAPI (Python)", "Firebase", "PostgreSQL", "Docker", "Tailwind CSS"],
  },
];

export default function TechCapabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
              Integrated Toolchains
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="heading-lg"
            style={{ color: "var(--text-primary)" }}
          >
            Technology <span className="text-[#FF6B5B]">Capabilities.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base leading-relaxed mt-4 font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            A multi-disciplinary stack engineered for stability, rapid prototyping, and real-time edge processing.
          </motion.p>
        </div>

        {/* 4 Toolchain Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-xl border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: group.accent }} />
                  <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="badge-tech">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 flex items-center justify-between text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>
                <span>Stack Segment 0{i + 1}</span>
                <span style={{ color: group.accent }}>Production Ready</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
