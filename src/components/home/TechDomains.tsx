"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Layers, Radio, Code2 } from "lucide-react";

const domains = [
  {
    id: "01",
    title: "Artificial Intelligence & Machine Learning",
    short: "AI & ML",
    tagline: "Edge Inference & Computer Vision",
    description: "Deep learning, real-time object detection, OCR reading, and audio signal processing optimized for edge microprocessors and mobile devices.",
    image: "/images/tech-vision.png",
    imageCaption: "LiDAR Spatial Computing & Vision Point Cloud",
    techList: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Edge AI", "NLP", "LLM Integration"],
    icon: Cpu,
    accent: "#FF6B5B",
  },
  {
    id: "02",
    title: "Internet of Things & Embedded Systems",
    short: "IoT & Embedded",
    tagline: "Microcontroller Engineering & Sensor Integration",
    description: "Hardware firmware and low-power architectures utilizing ESP32, STM32, and Nordic Semiconductor chips communicating via MQTT and BLE protocols.",
    image: "/images/tech-pcb.png",
    imageCaption: "Custom ESP32 & Nordic nRF52840 Hardware Architecture",
    techList: ["ESP32", "STM32", "Nordic nRF52840", "MQTT", "Embedded C/C++", "RTOS"],
    icon: Radio,
    accent: "#F59E0B",
  },
  {
    id: "03",
    title: "Smart Wearable Technology",
    short: "Wearables",
    tagline: "Biometric Sensing & Personal Safety",
    description: "Ultra-compact wearable devices integrating PPG heart-rate sensing, skin temperature, GPS geofencing, emergency SOS, and on-device intelligent alerts.",
    image: "/images/product-smart-wearable.png",
    imageCaption: "Biometric Sensor Array & Micro-OLED Interface",
    techList: ["Biometric PPG", "BLE 5.2", "GPS & Geofencing", "IMU Sensors", "Low-Power Firmware"],
    icon: Layers,
    accent: "#38BDF8",
  },
  {
    id: "04",
    title: "Software & Intelligent Applications",
    short: "Software",
    tagline: "Full-Stack Platforms & Companion Mobile Apps",
    description: "Responsive cross-platform applications and secure cloud backends that provide seamless interfaces for device telemetry, health dashboards, and AI interaction.",
    image: "/images/hero-hardware.png",
    imageCaption: "Unified Cresvora Device & Application Ecosystem",
    techList: ["React.js", "Next.js", "Flutter", "Node.js", "PostgreSQL", "Firebase"],
    icon: Code2,
    accent: "#10B981",
  },
];

export default function TechDomains() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const activeDomain = domains[activeTab];

  return (
    <section id="technology" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="mb-14 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
              Technology Domains
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="heading-lg"
            style={{ color: "var(--text-primary)" }}
          >
            Where <span className="text-[#FF6B5B]">Intelligence</span> Meets Hardware.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base leading-relaxed mt-4 font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            We operate across every layer of the product engineering stack — from silicon and printed circuit boards to deep learning models and intuitive human interfaces.
          </motion.p>
        </div>

        {/* Domain Interactive Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {domains.map((dom, i) => {
            const Icon = dom.icon;
            const isActive = activeTab === i;
            return (
              <button
                key={dom.id}
                onClick={() => setActiveTab(i)}
                className={`p-4 rounded text-left border transition-all duration-300 relative ${
                  isActive ? "shadow-lg" : "hover:border-opacity-40"
                }`}
                style={{
                  borderColor: isActive ? dom.accent : "var(--border-subtle)",
                  background: isActive ? "var(--bg-card-hover)" : "var(--bg-card)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold" style={{ color: dom.accent }}>
                    {dom.id}
                  </span>
                  <Icon size={16} style={{ color: isActive ? dom.accent : "var(--text-muted)" }} />
                </div>
                <div className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>
                  {dom.short}
                </div>
                <div className="text-[11px] truncate mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {dom.tagline}
                </div>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: dom.accent }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Domain Feature Showcase Display */}
        <div
          className="glass rounded-xl p-6 sm:p-10 border relative overflow-hidden"
          style={{ borderColor: "var(--border-medium)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Domain Details (6 cols) */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded" style={{ background: "rgba(255, 107, 91, 0.12)", color: activeDomain.accent }}>
                  DOMAIN {activeDomain.id}
                </span>
                <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                  {activeDomain.tagline}
                </span>
              </div>

              <h3 className="heading-md mb-4" style={{ color: "var(--text-primary)" }}>
                {activeDomain.title}
              </h3>

              <p className="text-base font-normal leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                {activeDomain.description}
              </p>

              {/* Technologies Included */}
              <div className="mb-8">
                <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                  ENGINEERING STACK INVOLVED
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeDomain.techList.map((tech) => (
                    <span key={tech} className="badge-tech">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: activeDomain.accent }} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
                style={{ color: activeDomain.accent }}
              >
                <span>Explore Research Capabilities In This Domain</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: Actual Photorealistic Engineering Asset (6 cols) */}
            <div className="lg:col-span-6">
              <div className="img-editorial relative aspect-[16/10] w-full rounded-lg shadow-2xl">
                <Image
                  src={activeDomain.image}
                  alt={activeDomain.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Tech Asset Overlay Badge */}
                <div
                  className="absolute bottom-3 left-3 right-3 glass px-3.5 py-2.5 rounded border flex items-center justify-between"
                  style={{ borderColor: "var(--border-medium)" }}
                >
                  <span className="text-xs font-mono font-medium truncate" style={{ color: "#F4EDE0" }}>
                    {activeDomain.imageCaption}
                  </span>
                  <span className="text-[10px] font-mono text-[#FF6B5B] uppercase tracking-wider pl-2 flex-shrink-0">
                    HARDWARE SPEC
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
