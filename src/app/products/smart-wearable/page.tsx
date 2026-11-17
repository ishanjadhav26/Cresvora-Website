import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, ShieldAlert, Watch } from "lucide-react";

export const metadata: Metadata = {
  title: "Human Smart Wearable — Health & Safety Technology",
  description: "Cresvora's Human Smart Wearable initiative develops next-generation wearable hardware for vital telemetry and personal safety.",
};

export default function SmartWearablePage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#10B981] hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Products
        </Link>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 mb-6">
              <Watch size={13} />
              <span>PRODUCT 04 &bull; IN ACTIVE PROTOTYPING</span>
            </div>

            <h1 className="heading-xl mb-6" style={{ color: "var(--text-primary)" }}>
              Human Smart Wearable
            </h1>
            <p className="text-xl font-light mb-6" style={{ color: "#10B981" }}>
              Continuous Biometric Awareness & Rapid Emergency SOS Dispatch
            </p>
            <p className="text-base leading-relaxed font-normal max-w-xl" style={{ color: "var(--text-secondary)" }}>
              An ultra-refined wearable band engineered for the individuals who need continuous health awareness and dependable physical safety the most — including children, vulnerable elders, and solitary workers.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="img-editorial relative aspect-[16/11] w-full rounded-xl shadow-2xl">
              <Image
                src="/images/product-smart-wearable.png"
                alt="Human Smart Wearable with Heart Rate, SpO2 and Step Telemetry Micro-Display"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* Technical Capabilities Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Multi-Wavelength PPG Heart Sensor", desc: "Green and infrared optical diodes sampling capillary blood volume for pulse frequency and SpO2 oxygen saturation trends." },
            { title: "Sub-Skin Temperature Thermistor", desc: "High-precision thermal junction detecting subtle deviations from normative body temperature baselines." },
            { title: "Continuous 3D Accelerometry", desc: "Micro-electromechanical motion sensor monitoring steps, gait abnormalities, and high-impact physical falls." },
            { title: "Independent GNSS & Cellular Beacon", desc: "Standalone satellite lock capable of transmitting coordinates even when separated from a paired mobile smartphone." },
            { title: "Configurable Safe Geofencing", desc: "Automated perimeter tracking alerting guardians when a child or memory-impaired elder wanders beyond predefined boundaries." },
            { title: "Silent & Rapid SOS Trigger", desc: "Discrete physical tactile button sequence initiating immediate emergency dispatch and ambient audio transmission." },
          ].map((cap) => (
            <div key={cap.title} className="glass-card p-6 rounded-xl border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#10B981] mb-3">
                  <Check size={14} /> HARDWARE SPECIFICATION
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
            <ShieldAlert size={16} /> MEDICAL DISCLAIMER
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            The Human Smart Wearable is designed for general wellness, fitness tracking, and personal safety awareness. It is not an FDA or CE certified medical diagnostic device. It does not replace professional clinical healthcare evaluation.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="btn-primary">
            Inquire About Wearable Prototypes
          </Link>
          <Link href="/products" className="btn-secondary">
            View All Products
          </Link>
        </div>

      </div>
    </div>
  );
}
