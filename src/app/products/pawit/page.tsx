import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, ShieldAlert, Radio } from "lucide-react";

export const metadata: Metadata = {
  title: "PAWIT — AI Pet Intelligence & Wellness",
  description: "PAWIT is Cresvora's AI pet intelligence initiative interpreting canine vocalizations and monitoring wellness telemetry.",
};

export default function PawitPage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#38BDF8] hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Products
        </Link>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 mb-6">
              <Radio size={13} />
              <span>PRODUCT 02 &bull; RESEARCH & FEASIBILITY PHASE</span>
            </div>

            <h1 className="heading-xl mb-6" style={{ color: "var(--text-primary)" }}>
              PAWIT
            </h1>
            <p className="text-xl font-light mb-6" style={{ color: "#38BDF8" }}>
              AI Pet Intelligence & Canine Vocalization Translation
            </p>
            <p className="text-base leading-relaxed font-normal max-w-xl" style={{ color: "var(--text-secondary)" }}>
              PAWIT is an intelligent collar module designed to help pet owners understand canine acoustic signals, emotional distress states, and long-term activity indicators through bio-acoustic analysis.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="img-editorial relative aspect-[16/11] w-full rounded-xl shadow-2xl">
              <Image
                src="/images/product-pawit.png"
                alt="PAWIT Smart Pet Collar Module with Acoustic Mesh"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* Capabilities Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Canine Acoustic Vocal Analysis", desc: "Digital microphone array analyzing pitch, frequency modulation, and duration of barks, whines, and growls." },
            { title: "Emotion & Distress Classification", desc: "Classification models identifying potential states including separation anxiety, excitement, alarm, and pain." },
            { title: "Ergonomic Smart Collar Integration", desc: "Lightweight, IP68 water-resistant casing designed with soft silicone and breathable textile straps." },
            { title: "Rest & Active Play Tracking", desc: "3-axis accelerometer recording sleep cycles, daily exertion levels, and abnormal restlessness." },
            { title: "GPS Geofencing & Real-Time Tracking", desc: "Cellular IoT and satellite positioning with automatic boundary alerts sent to the owner's smartphone." },
            { title: "Companion Mobile Intelligence App", desc: "Intuitive timeline of daily mood classifications, vet-shareable health reports, and immediate anomaly notifications." },
          ].map((cap) => (
            <div key={cap.title} className="glass-card p-6 rounded-xl border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#38BDF8] mb-3">
                  <Check size={14} /> PLANNED SPECIFICATION
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
            <ShieldAlert size={16} /> RESEARCH STATUS DISCLOSURE
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            PAWIT is currently exploring exploratory bio-acoustic modeling and collar form-factor testing. It is not currently on sale and does not substitute for certified veterinary diagnostics.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="btn-primary">
            Connect With PAWIT Researchers
          </Link>
          <Link href="/products" className="btn-secondary">
            View All Products
          </Link>
        </div>

      </div>
    </div>
  );
}
