import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Microscope, Cpu, Radio, Sparkles, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Innovation — Cresvora",
  description: "Explore Cresvora's 9 core R&D pillars across Artificial Intelligence, Embedded Hardware, Bio-Acoustics, and Assistive Mobility.",
};

const researchDomains = [
  { id: "01", title: "Artificial Intelligence & Edge Compute", desc: "Quantized neural networks running on microcontrollers for real-time sensor inferences under minimal battery draw.", icon: Cpu, accent: "#FF6B5B" },
  { id: "02", title: "Computer Vision & Spatial LiDAR Mapping", desc: "Edge stereo-vision combined with time-of-flight depth scanning for terrain obstacle classification.", icon: Sparkles, accent: "#38BDF8" },
  { id: "03", title: "Generative AI & Spoken Natural Language", desc: "Compact LLM integrations creating contextual audio summaries and assistive voice interactions.", icon: Layers, accent: "#F59E0B" },
  { id: "04", title: "Embedded Firmware & Microcontroller Systems", desc: "Deterministic C/C++ firmware toolchains for ESP32, STM32, and Nordic nRF low-power radios.", icon: Radio, accent: "#10B981" },
  { id: "05", title: "IoT Sensor Fusion & Cloud Telemetry", desc: "Multi-axis IMU, ambient light, and thermal sensors fused over secure MQTT cloud protocols.", icon: Cpu, accent: "#FF6B5B" },
  { id: "06", title: "Tactile Hardware & Custom PCB Design", desc: "Designing multi-layer circuit boards, antenna matching networks, and ergonomic mechanical enclosures.", icon: Layers, accent: "#38BDF8" },
  { id: "07", title: "Biometric Sensing & Health Analytics", desc: "Multi-spectral PPG sensors and algorithms extracting stable heart-rate variability and oxygen saturation.", icon: Microscope, accent: "#F59E0B" },
  { id: "08", title: "Assistive Technology & Independent Living", desc: "Human-centered engineering creating independent mobility and document reading for visually impaired individuals.", icon: Sparkles, accent: "#10B981" },
  { id: "09", title: "Bio-Acoustic Signal Processing & Animal Vocalizations", desc: "48 kHz acoustic spectrogram modeling to classify animal vocalizations into probable emotional states.", icon: Radio, accent: "#FF6B5B" },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
              Scientific Pillars & Research
            </span>
          </div>

          <h1 className="heading-xl mb-6" style={{ color: "var(--text-primary)" }}>
            Engineering the <span className="text-[#FF6B5B]">Frontier.</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: "var(--text-secondary)" }}>
            Cresvora operates a product-driven scientific laboratory. We choose exploratory research vectors that have a clear path to tactile physical implementation.
          </p>
        </div>

        {/* Dual Featured Imagery Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="img-editorial relative aspect-[16/10] w-full rounded-2xl shadow-xl border" style={{ borderColor: "var(--border-medium)" }}>
            <Image
              src="/images/tech-vision.png"
              alt="LiDAR Spatial Computing Research"
              fill
              className="object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 right-4 glass p-3.5 rounded-lg border flex items-center justify-between" style={{ borderColor: "var(--border-medium)" }}>
              <span className="text-xs font-mono font-semibold text-white">LiDAR Spatial Vision Analysis</span>
              <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider">Domain 02</span>
            </div>
          </div>

          <div className="img-editorial relative aspect-[16/10] w-full rounded-2xl shadow-xl border" style={{ borderColor: "var(--border-medium)" }}>
            <Image
              src="/images/tech-pcb.png"
              alt="Custom ESP32 and Nordic Embedded Hardware Architecture"
              fill
              className="object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 right-4 glass p-3.5 rounded-lg border flex items-center justify-between" style={{ borderColor: "var(--border-medium)" }}>
              <span className="text-xs font-mono font-semibold text-white">Custom ESP32 & Nordic Silicon Integration</span>
              <span className="text-[10px] font-mono text-[#F59E0B] uppercase tracking-wider">Domain 04</span>
            </div>
          </div>
        </div>

        {/* 9 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {researchDomains.map((dom) => {
            const Icon = dom.icon;
            return (
              <div key={dom.id} className="glass-card p-6 sm:p-7 rounded-xl border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold" style={{ color: dom.accent }}>
                      PILLAR {dom.id}
                    </span>
                    <Icon size={16} style={{ color: dom.accent }} />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                    {dom.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {dom.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t flex items-center justify-between" style={{ borderColor: "var(--border-subtle)" }}>
                  <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Active Vector
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: dom.accent }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Collaboration Notice */}
        <div className="glass-card p-8 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-6" style={{ borderColor: "var(--border-medium)" }}>
          <div>
            <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
              Interested in Research Collaboration?
            </h3>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              We partner with academic institutions and specialized engineers in bio-acoustics, computer vision, and embedded TinyML.
            </p>
          </div>
          <Link href="/contact" className="btn-primary flex-shrink-0">
            Submit Academic Proposal
          </Link>
        </div>

      </div>
    </div>
  );
}
