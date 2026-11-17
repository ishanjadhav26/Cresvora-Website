"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Radio, Activity, Watch, ShieldAlert } from "lucide-react";

const products = [
  {
    id: "pathguard",
    name: "PathGuard",
    tagline: "Intelligent Assistive Technology for Independent Mobility",
    status: "In Development",
    statusColor: "#FF6B5B",
    image: "/images/product-pathguard.png",
    description: "An AI-powered wearable vision and LiDAR sensor initiative designed to support independent mobility, spatial navigation, and accessibility for visually impaired individuals.",
    capabilities: [
      "Obstacle Detection & LiDAR Depth Mapping",
      "AI-Powered Real-Time Scene Narration",
      "OCR Text & Document Reading",
      "Currency & Medicine Package Identification",
      "GPS Spoken Navigation Assistance",
      "Emergency SOS & Automated Location Sharing",
    ],
    href: "/products/pathguard",
    icon: Eye,
  },
  {
    id: "pawit",
    name: "PAWIT",
    tagline: "AI Pet Intelligence & Bio-Acoustic Wellness",
    status: "Research Phase",
    statusColor: "#38BDF8",
    image: "/images/product-pawit.png",
    description: "An intelligent collar and acoustic analysis initiative helping pet owners interpret canine vocalizations, monitor vital activity indicators, and track wellness.",
    capabilities: [
      "Acoustic Canine Vocalization Analysis",
      "Emotion & Distress State Classification",
      "Smart Collar Hardware with Sensor Array",
      "Continuous Movement & Rest Monitoring",
      "Real-Time GPS Tracking & Safe Geofences",
      "Companion Mobile App with Wellness Alerts",
    ],
    href: "/products/pawit",
    icon: Radio,
  },
  {
    id: "animal-emotion",
    name: "Animal Emotion Detector",
    tagline: "AI & Signal Processing for Animal Communication Research",
    status: "Research Phase",
    statusColor: "#F59E0B",
    image: "/images/product-animal-emotion.png",
    description: "An AI and IoT-based bio-acoustic research initiative exploring how animal audio waveforms and behavioral telemetry can be analyzed to identify emotional states.",
    capabilities: [
      "High-Precision Audio Signal Processing (48kHz)",
      "Vocal Acoustic Feature Extraction & Waveforms",
      "Deep Learning Acoustic Emotion Models",
      "Multi-Species Vocalization Dataset Development",
      "Laboratory Prototyping Hardware Unit",
      "Behavioral Correlation & Telemetry Insights",
    ],
    href: "/products/animal-emotion",
    icon: Activity,
  },
  {
    id: "smart-wearable",
    name: "Human Smart Wearable",
    tagline: "Intelligent Health Awareness & Personal Safety",
    status: "In Development",
    statusColor: "#10B981",
    image: "/images/product-smart-wearable.png",
    description: "An intelligent wearable technology initiative designed to monitor selected physical activity and vital indicators while supporting continuous personal safety.",
    capabilities: [
      "PPG Heart-Rate & SpO2 Indicator Monitoring",
      "Skin Surface Temperature Tracking",
      "Step, Sleep & Motion Intensity Analytics",
      "Autonomous GPS Monitoring & Geofencing",
      "Rapid-Trigger Emergency SOS Dispatch",
      "Parent-Controlled Mode for Child Safety",
    ],
    href: "/products/smart-wearable",
    icon: Watch,
  },
];

export default function ProductsShowcase() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      {/* Texture */}
      <div className="absolute inset-0 stripe-texture opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
              Our Product Initiatives
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="heading-lg max-w-2xl"
              style={{ color: "var(--text-primary)" }}
            >
              Innovation Designed for{" "}
              <span className="text-[#FF6B5B]">Real Life.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-3.5 rounded border max-w-md"
              style={{
                borderColor: "var(--border-subtle)",
                background: "var(--bg-card)",
              }}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#FF6B5B] mb-1">
                <ShieldAlert size={14} /> Product Development Disclosure
              </div>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                All capabilities listed represent planned or developing initiatives. Products are not yet commercially available or medical devices.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 4 Flagship Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="glass-card rounded-xl overflow-hidden border flex flex-col group"
              >
                {/* Product Hardware Photography Preview */}
                <div className="img-editorial relative aspect-[16/10] w-full bg-black/40">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Status Overlay Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider font-bold border backdrop-blur-md"
                      style={{
                        background: "rgba(10, 19, 34, 0.75)",
                        borderColor: product.statusColor,
                        color: product.statusColor,
                      }}
                    >
                      {product.status}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 p-2 rounded-full glass border" style={{ borderColor: "var(--border-subtle)" }}>
                    <Icon size={16} style={{ color: product.statusColor }} />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider mb-2 font-semibold" style={{ color: product.statusColor }}>
                      {product.tagline}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 transition-colors group-hover:text-[#FF6B5B]" style={{ color: "var(--text-primary)" }}>
                      {product.name}
                    </h3>

                    <p className="text-sm leading-relaxed mb-6 font-normal" style={{ color: "var(--text-secondary)" }}>
                      {product.description}
                    </p>

                    {/* Capabilities list */}
                    <div className="mb-6 space-y-2">
                      <div className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                        KEY PROPOSED CAPABILITIES
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.capabilities.slice(0, 4).map((cap) => (
                          <div key={cap} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.statusColor }} />
                            <span className="truncate">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--border-subtle)" }}>
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors group/link"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <span className="group-hover/link:text-[#FF6B5B] transition-colors">
                        Deep Dive Into {product.name}
                      </span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform group-hover/link:text-[#FF6B5B]" />
                    </Link>

                    <span className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>
                      0{i + 1} / 04
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Products Hub CTA */}
        <div className="text-center">
          <Link href="/products" className="btn-secondary">
            <span>View Full Product Architecture & Specifications</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
