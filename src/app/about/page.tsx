import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cpu, Target, Compass, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Cresvora",
  description: "Learn about Cresvora — our founding mission, engineering principles, core values, and what makes us a dedicated product company.",
};

const values = [
  { id: "01", title: "Innovation", desc: "Approaching real-world friction with curiosity, creativity, and unconventional engineering." },
  { id: "02", title: "Accessibility", desc: "Ensuring life-improving technologies reach those who have been historically underserved by mainstream tech." },
  { id: "03", title: "Reliability", desc: "Crafting hardware and firmware with rigorous tolerance testing for unpredictable everyday environments." },
  { id: "04", title: "Integrity", desc: "Transparent disclosure of our capabilities, development milestones, and scientific validity." },
  { id: "05", title: "User-Centric", desc: "Designing every form factor and sensory feedback around the lived ergonomics of the user." },
  { id: "06", title: "Engineering Excellence", desc: "Holding ourselves to uncompromising standards across electronics, firmware, and software craft." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF6B5B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF6B5B]">
              About Cresvora
            </span>
          </div>

          <h1 className="heading-xl mb-6" style={{ color: "var(--text-primary)" }}>
            Technology Built on <span className="text-[#FF6B5B]">Purpose.</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: "var(--text-secondary)" }}>
            Cresvora is an emerging product-driven innovation venture focused on turning advanced engineering, artificial intelligence, and embedded electronics into practical hardware solutions.
          </p>
        </div>

        {/* Featured Laboratory Image */}
        <div className="img-editorial relative aspect-[16/9] w-full rounded-2xl shadow-2xl mb-16 border" style={{ borderColor: "var(--border-medium)" }}>
          <Image
            src="/images/cresvora-lab.png"
            alt="Cresvora Hardware Engineering Laboratory & Workbench"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-xl border flex items-center justify-between" style={{ borderColor: "var(--border-medium)" }}>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <div className="text-xs font-mono text-white font-medium">
                Cresvora Prototyping Laboratory &bull; Hardware Validation Station
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#FF6B5B] uppercase tracking-widest border border-white/20 px-2.5 py-1 rounded">
              Active R&D
            </span>
          </div>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4 text-base font-normal leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <h2 className="heading-md mb-4" style={{ color: "var(--text-primary)" }}>
              Beyond Code. Into Physical Reality.
            </h2>
            <p>
              Many technology agencies remain confined to screen-based software. Cresvora was founded with the conviction that the most transformative breakthroughs occur when intelligence is embedded directly into physical hardware that touches everyday lives.
            </p>
            <p>
              By combining Artificial Intelligence, Machine Learning, Embedded Systems, Internet of Things, smart hardware and software engineering, we aim to transform innovative ideas into dependable, tactile solutions.
            </p>
            <p>
              Our flagship initiatives — PathGuard for blind accessibility, PAWIT for canine vocalization translation, the Animal Emotion Detector for ethological research, and our Human Smart Wearable — represent our deliberate choice to tackle neglected, high-impact frontiers.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="heading-md mb-4" style={{ color: "var(--text-primary)" }}>
              What Distinguishes Cresvora
            </h2>
            {[
              { title: "Product-Driven Engineering", desc: "We are not a consulting agency or an IT outsourcing shop. We design and own our proprietary product pipeline." },
              { title: "Complete Silicon-to-Cloud Stack", desc: "From PCB schematic trace design and firmware kernels to neural weights and mobile interfaces, we engineer every layer in-house." },
              { title: "Ethical & Transparent R&D", desc: "We are honest about our development timelines, prototype testing milestones, and entity stage." },
            ].map((item, i) => (
              <div key={i} className="glass-card p-5 rounded-xl border" style={{ borderColor: "var(--border-subtle)" }}>
                <div className="text-sm font-bold text-[#FF6B5B] mb-1">{item.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B5B] font-bold mb-4">
            ETHICAL FOUNDATION
          </div>
          <h2 className="heading-md mb-8" style={{ color: "var(--text-primary)" }}>
            Our 6 Core Engineering Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.id} className="glass-card p-6 rounded-xl border flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#FF6B5B] block mb-3">
                    VALUE {v.id}
                  </span>
                  <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                    {v.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Link Out */}
        <div className="flex items-center gap-4">
          <Link href="/products" className="btn-primary">
            Explore Our Products
          </Link>
          <Link href="/contact" className="btn-secondary">
            Get in Touch With Leadership
          </Link>
        </div>

      </div>
    </div>
  );
}
