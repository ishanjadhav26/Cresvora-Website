import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, ShieldAlert, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Animal Emotion Detector — AI Communication Research",
  description: "Cresvora's bio-acoustic research initiative exploring animal vocalization signals and emotional pattern detection.",
};

export default function AnimalEmotionPage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F59E0B] hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Products
        </Link>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-6">
              <Activity size={13} />
              <span>PRODUCT 03 &bull; BIO-ACOUSTIC RESEARCH LAB</span>
            </div>

            <h1 className="heading-xl mb-6" style={{ color: "var(--text-primary)" }}>
              Animal Emotion Detector
            </h1>
            <p className="text-xl font-light mb-6" style={{ color: "#F59E0B" }}>
              High-Precision Signal Processing for Animal Acoustic Translation
            </p>
            <p className="text-base leading-relaxed font-normal max-w-xl" style={{ color: "var(--text-secondary)" }}>
              An exploratory AI and IoT hardware initiative combining 48 kHz acoustic decomposition, spectrogram analysis, and neural classification to understand the internal emotional states behind animal vocal patterns.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="img-editorial relative aspect-[16/11] w-full rounded-xl shadow-2xl">
              <Image
                src="/images/product-animal-emotion.png"
                alt="Animal Emotion Detector Acoustic Hardware with Real-Time Waveform Display"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* Research Vectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: "24-bit 48 kHz Audio Intake", desc: "Studio-grade MEMS acoustic sensors capturing ultrasonic and high-frequency harmonics often lost in consumer microphones." },
            { title: "Fast Fourier Transform (FFT) Deconstruction", desc: "Real-time frequency decomposition separating environmental noise from biological vocal formants." },
            { title: "Acoustic Spectrogram Modeling", desc: "Converting sound pressure waves into 2D time-frequency spectrogram tensors for convolutional pattern recognition." },
            { title: "Ethological Dataset Annotation", desc: "Correlating vocal patterns with empirical physical observations (tail posture, ear position, heart telemetry)." },
            { title: "Multi-Species Acoustic Scaling", desc: "Foundational architecture initially tuned for canines and equines, with cross-species transfer learning capabilities." },
            { title: "Edge Hardware Synthesis", desc: "Designing dedicated DSP (Digital Signal Processing) chips capable of running neural inference on under 100mW power." },
          ].map((cap) => (
            <div key={cap.title} className="glass-card p-6 rounded-xl border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F59E0B] mb-3">
                  <Check size={14} /> RESEARCH VECTOR
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                  {cap.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="p-6 rounded-xl border glass max-w-3xl mb-12" style={{ borderColor: "var(--border-medium)" }}>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F59E0B] mb-2">
            <ShieldAlert size={16} /> SCIENTIFIC RIGOR STATEMENT
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Animal emotion identification is an evolving scientific field. Cresvora approaches this with academic honesty, presenting findings as probabilistic classifications rather than definitive psychological diagnoses.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="btn-primary">
            Collaborate on Bio-Acoustic Research
          </Link>
          <Link href="/research" className="btn-secondary">
            View All Research Domains
          </Link>
        </div>

      </div>
    </div>
  );
}
