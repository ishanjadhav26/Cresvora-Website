import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, ShieldAlert, Cpu, Eye, Radio, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "PathGuard — Intelligent Assistive Technology",
  description: "PathGuard is Cresvora's AI-powered assistive vision initiative for visually impaired individuals, supporting independent mobility.",
};

export default function PathGuardPage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF6B5B] hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Products
        </Link>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-[#FF6B5B] bg-[#FF6B5B]/10 border border-[#FF6B5B]/20 mb-6">
              <Eye size={13} />
              <span>PRODUCT 01 &bull; IN ACTIVE DEVELOPMENT</span>
            </div>

            <h1 className="heading-xl mb-6" style={{ color: "var(--text-primary)" }}>
              PathGuard
            </h1>
            <p className="text-xl font-light mb-6" style={{ color: "var(--coral)" }}>
              AI-Powered Assistive Vision & Independent Spatial Mobility
            </p>
            <p className="text-base leading-relaxed font-normal max-w-xl" style={{ color: "var(--text-secondary)" }}>
              PathGuard is an intelligent assistive technology initiative engineered to grant visually impaired individuals autonomous mobility, continuous obstacle awareness, and natural spoken environment narration.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="img-editorial relative aspect-[16/11] w-full rounded-xl shadow-2xl">
              <Image
                src="/images/product-pathguard.png"
                alt="PathGuard Wearable LiDAR and Dual Camera Sensor Hardware"
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
            { title: "LiDAR Spatial Depth Mapping", desc: "Infrared time-of-flight sensor continuously scanning for curbs, overhangs, and obstacles within a 5-meter radius." },
            { title: "Dual Vision Scene Narration", desc: "Stereo optical lenses feeding edge neural networks to synthesize concise, natural spoken descriptions of what lies ahead." },
            { title: "Instant OCR Document Reading", desc: "High-resolution character recognition capable of reading signs, product packaging, and printed correspondence aloud." },
            { title: "Currency & Medicine Identification", desc: "Specialized computer vision classification models for banknote denomination verification and prescription label alerts." },
            { title: "Contextual Spoken Navigation", desc: "High-accuracy GNSS positioning combined with directional audio prompts for seamless indoor and outdoor walking guidance." },
            { title: "Emergency SOS & Live Dispatch", desc: "Automated fall detection and manual panic trigger with instant GPS coordinates transmitted to designated emergency contacts." },
          ].map((cap) => (
            <div key={cap.title} className="glass-card p-6 rounded-xl border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF6B5B] mb-3">
                  <Check size={14} /> PROPOSED CAPABILITY
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

        {/* Regulatory & Safety Notice */}
        <div className="p-6 rounded-xl border glass max-w-3xl mb-12" style={{ borderColor: "var(--border-medium)" }}>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F59E0B] mb-2">
            <ShieldAlert size={16} /> R&D INITIATIVE NOTICE
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            PathGuard is currently an advanced research and engineering initiative. Proposed features represent development targets. PathGuard is not yet certified as a medical device or commercially available for public retail.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="btn-primary">
            Inquire About PathGuard Development
          </Link>
          <Link href="/products" className="btn-secondary">
            View Other Innovations
          </Link>
        </div>

      </div>
    </div>
  );
}
