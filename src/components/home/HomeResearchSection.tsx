"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Microscope, Check } from "lucide-react";

const researchHighlights = [
  { title: "Computer Vision & Spatial Navigation", desc: "Edge LiDAR mapping and depth understanding for blind mobility." },
  { title: "Bio-Acoustic Signal Processing", desc: "48kHz waveform decomposition for animal emotion classification." },
  { title: "Low-Power Embedded TinyML", desc: "Neural network quantization running on battery-constrained microcontrollers." },
  { title: "Biometric Telemetry & PPG Algorithms", desc: "Noise filtering for real-time heart rate and SpO2 tracking." },
];

export default function HomeResearchSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0 stripe-texture opacity-30 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#FF6B5B]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
                Research & Innovation
              </span>
            </div>

            <h2 className="heading-lg mb-6" style={{ color: "var(--text-primary)" }}>
              Engineering the <span className="text-[#FF6B5B]">Frontier.</span>
            </h2>

            <p className="text-base leading-relaxed mb-8 font-normal" style={{ color: "var(--text-secondary)" }}>
              Our R&D division focuses exclusively on purposeful, product-oriented scientific exploration. Rather than abstract academic experiments, every research domain is calibrated toward physical hardware viability.
            </p>

            <div className="space-y-3.5 mb-8">
              {researchHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded bg-[#FF6B5B]/15 text-[#FF6B5B] mt-0.5">
                    <Check size={13} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {item.title}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/research" className="btn-primary group">
              <span>Explore All 9 Research Domains</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Research Visual Asset (7 cols) */}
          <div className="lg:col-span-7">
            <div className="img-editorial relative aspect-[16/10] w-full rounded-xl shadow-2xl">
              <Image
                src="/images/tech-vision.png"
                alt="LiDAR Spatial Computing & AI Vision Research"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8"
              >
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#38BDF8]">
                  <Microscope size={15} />
                  <span className="uppercase tracking-widest font-semibold">Active R&D Focus 02</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Spatial Vision & Point-Cloud Point Analysis
                </h3>
                <p className="text-xs text-white/70 max-w-lg leading-relaxed">
                  Real-time ambient room reconstruction powering the PathGuard assistive spatial obstacle detection subsystem.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

