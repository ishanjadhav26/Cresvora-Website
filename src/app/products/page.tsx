import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Solutions — Cresvora",
  description: "Explore Cresvora's product initiatives: PathGuard, PAWIT, Animal Emotion Detector, and the Human Smart Wearable.",
};

const products = [
  {
    id: "pathguard",
    slug: "pathguard",
    name: "PathGuard",
    tagline: "Intelligent Assistive Technology for Independent Mobility",
    status: "In Development",
    statusColor: "#FF6B5B",
    image: "/images/product-pathguard.png",
    problem: "Visually impaired individuals face daily navigational barriers, dangerous overhangs, and inaccessible text information in environments built exclusively for sighted navigation.",
    description: "An AI-powered wearable vision and LiDAR sensor initiative designed to support independent mobility, spatial navigation, and accessibility for visually impaired individuals.",
    tech: ["Computer Vision", "LiDAR Depth", "OCR Recognition", "NLP Spoken Audio", "Edge Neural AI", "GNSS"],
    features: [
      "Obstacle detection and spatial terrain mapping",
      "AI-powered real-time scene narration via audio",
      "OCR text recognition for signage and printed text",
      "Currency and medicine package identification",
      "Spoken GPS turn-by-turn navigation guidance",
      "Emergency SOS and automated coordinate sharing",
    ],
    number: "01",
  },
  {
    id: "pawit",
    slug: "pawit",
    name: "PAWIT",
    tagline: "AI Pet Intelligence & Bio-Acoustic Wellness",
    status: "Research Phase",
    statusColor: "#38BDF8",
    image: "/images/product-pawit.png",
    problem: "Pet owners cannot decipher subtle animal vocal cues or detect early onset discomfort, leading to missed signs of acute pain, separation distress, or medical distress.",
    description: "An intelligent collar and acoustic analysis initiative helping pet owners interpret canine vocalizations, monitor vital activity indicators, and track wellness.",
    tech: ["Acoustic DSP", "ML Emotion Models", "ESP32 Firmware", "BLE 5.2", "GPS Telemetry", "Flutter App"],
    features: [
      "Continuous dog vocalization frequency analysis",
      "Emotional state classification (distress, fear, joy)",
      "Ergonomic waterproof collar hardware integration",
      "Rest, sleep-quality and physical activity monitoring",
      "Satellite GPS tracking with safe geofencing",
      "Owner companion mobile application with wellness logs",
    ],
    number: "02",
  },
  {
    id: "animal-emotion",
    slug: "animal-emotion",
    name: "Animal Emotion Detector",
    tagline: "AI & Signal Processing for Animal Communication Research",
    status: "Research Phase",
    statusColor: "#F59E0B",
    image: "/images/product-animal-emotion.png",
    problem: "Animal emotional communication is poorly understood scientifically, with no standardized, objective hardware capable of deconstructing complex vocal harmonics in real time.",
    description: "An AI and IoT-based bio-acoustic research initiative exploring how animal audio waveforms and behavioral telemetry can be analyzed to identify emotional states.",
    tech: ["48kHz Audio DSP", "Fast Fourier Transform", "Deep Learning CNNs", "Spectrogram Analysis", "OLED Display"],
    features: [
      "24-bit 48 kHz bio-acoustic waveform capture",
      "Multi-species vocalization spectrogram generation",
      "Deep Learning acoustic emotion classifier models",
      "Laboratory prototyping hardware with OLED readout",
      "Ethological correlation with physical telemetry",
      "Open research datasets for veterinary science",
    ],
    number: "03",
  },
  {
    id: "smart-wearable",
    slug: "smart-wearable",
    name: "Human Smart Wearable",
    tagline: "Intelligent Health Awareness & Personal Safety",
    status: "In Development",
    statusColor: "#10B981",
    image: "/images/product-smart-wearable.png",
    problem: "Mainstream smartwatches emphasize notifications and fitness over dedicated safety, leaving children, lone workers, and memory-impaired seniors without dependable protection.",
    description: "An intelligent wearable technology initiative designed to monitor selected physical activity and vital indicators while supporting continuous personal safety.",
    tech: ["PPG Optical Sensor", "Thermal Sensor", "3D IMU", "GNSS Tracker", "Cellular Beacon", "Edge AI"],
    features: [
      "Continuous heart-rate and SpO2 oxygen indicator tracking",
      "Skin surface temperature baseline monitoring",
      "High-impact physical fall detection and rapid SOS trigger",
      "Autonomous GPS positioning and safe-zone geofencing",
      "Parent-controlled mode for monitoring child safety",
      "AI conversational assistant for direct device queries",
    ],
    number: "04",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
              Hardware & AI Portfolio
            </span>
          </div>

          <h1 className="heading-xl mb-6" style={{ color: "var(--text-primary)" }}>
            Innovation Designed for <span className="text-[#FF6B5B]">Real Life.</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed max-w-2xl font-normal mb-8" style={{ color: "var(--text-secondary)" }}>
            Our product initiatives transform advanced research in computer vision, embedded sensors, and machine learning into tactile physical hardware that directly solves real human challenges.
          </p>

          <div className="p-4 rounded-xl border glass inline-flex items-center gap-3 max-w-xl" style={{ borderColor: "var(--border-medium)" }}>
            <ShieldAlert size={18} className="text-[#F59E0B] flex-shrink-0" />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              All product capabilities listed represent planned or developing initiatives. Products are not yet commercially available or medical devices.
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="glass-card rounded-2xl overflow-hidden border p-8 sm:p-12"
              style={{ borderColor: "var(--border-medium)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Visual Image Preview (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="img-editorial relative aspect-[16/11] w-full rounded-xl shadow-2xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider border backdrop-blur-md"
                        style={{
                          background: "rgba(10, 19, 34, 0.8)",
                          borderColor: product.statusColor,
                          color: product.statusColor,
                        }}
                      >
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-2 font-mono text-xs uppercase tracking-wider font-semibold" style={{ color: product.statusColor }}>
                    <span>PROJECT {product.number}</span>
                    <span>&bull;</span>
                    <span>{product.tagline}</span>
                  </div>

                  <h2 className="heading-md mb-4" style={{ color: "var(--text-primary)" }}>
                    {product.name}
                  </h2>

                  <div className="mb-4">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#FF6B5B] mb-1">
                      THE PROBLEM ADDRESSED
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {product.problem}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed mb-6 font-normal" style={{ color: "var(--text-secondary)" }}>
                    {product.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono uppercase tracking-widest mb-2 font-semibold" style={{ color: "var(--text-muted)" }}>
                      PROPOSED HARDWARE & AI CAPABILITIES
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.statusColor }} />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tech.map((t) => (
                      <span key={t} className="badge-tech">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className="btn-primary text-xs group"
                  >
                    <span>Read Full Specification For {product.name}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
