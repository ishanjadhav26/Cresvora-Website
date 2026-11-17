"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Play, Cpu, Activity, ShieldCheck } from "lucide-react";
import { useState, useRef } from "react";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center overflow-hidden stripe-texture pt-24 pb-16">
      {/* Dynamic Background Grids & Ambient Glows */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Radial ambient lighting */}
      <div
        className="absolute top-1/4 right-5 w-[650px] h-[650px] rounded-full pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle, var(--coral-glow) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 left-10 w-[550px] h-[550px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Brand & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 pt-4">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border mb-8"
              style={{
                borderColor: "var(--border-medium)",
                background: "var(--glass-bg)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B5B] animate-pulse" />
              <span
                className="text-[11px] font-mono uppercase tracking-[0.22em] font-semibold"
                style={{ color: "var(--coral)" }}
              >
                Innovation Through Engineering
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-xl mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Engineering{" "}
              <span className="text-[#FF6B5B] coral-glow-text">Intelligence.</span>
              <br />
              Empowering{" "}
              <span className="relative inline-block">
                Lives.
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B5B] to-transparent" />
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl font-normal"
              style={{ color: "var(--text-secondary)" }}
            >
              We engineer intelligent products connecting artificial intelligence, hardware and human innovation to solve meaningful real-world challenges across assistive mobility, animal wellness and connected safety.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link href="/products" className="btn-primary group">
                <span>Explore Innovations</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-secondary group">
                <span>Discover Cresvora</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-14 pt-8 border-t grid grid-cols-3 gap-6 max-w-lg"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase text-[#FF6B5B]">
                  <Cpu size={14} /> AI &bull; Edge
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  Embedded Intelligence
                </div>
              </div>
              <div className="pl-4 border-l" style={{ borderColor: "var(--border-subtle)" }}>
                <div className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase text-[#38BDF8]">
                  <Activity size={14} /> IoT &bull; Sensors
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  Connected Hardware
                </div>
              </div>
              <div className="pl-4 border-l" style={{ borderColor: "var(--border-subtle)" }}>
                <div className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase text-[#10B981]">
                  <ShieldCheck size={14} /> Assistive
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  Human Impact Tech
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column — The Animated Video Console Dashboard (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="lg:col-span-5 relative"
          >
            {/* The Main Glass Console Container (as indicated in user screenshot) */}
            <div
              className="glass rounded-xl p-5 sm:p-6 relative overflow-hidden shadow-2xl transition-all duration-300"
              style={{
                borderColor: "var(--border-medium)",
                background: "var(--glass-bg)",
              }}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B5B] animate-ping" />
                  <span
                    className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "var(--text-primary)" }}
                  >
                    CRESVORA INTELLIGENCE ENGINE
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B5B]/80" />
                </div>
              </div>

              {/* Video Player Display Container */}
              <div className="relative rounded-lg overflow-hidden border bg-black/60 aspect-[16/10] mb-5 group">
                <video
                  ref={videoRef}
                  src="/video/cresvora-hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle telemetry overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono tracking-widest text-[#FF6B5B] border border-[#FF6B5B]/30">
                    LIVE STREAM
                  </span>
                  <span className="text-[10px] font-mono text-white/70">
                    4K &bull; 60 FPS
                  </span>
                </div>

                {/* Manual Play/Pause click toggle */}
                <button
                  onClick={toggleVideoPlayback}
                  className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#FF6B5B]"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  title={isPlaying ? "Pause video" : "Play video"}
                >
                  <Play size={12} className={isPlaying ? "opacity-50" : "fill-current"} />
                </button>
              </div>

              {/* Telemetry Metrics Row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="p-3 rounded border" style={{ borderColor: "var(--border-subtle)", background: "rgba(255,255,255,0.03)" }}>
                  <div className="font-mono text-lg font-bold text-[#FF6B5B]">09</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Research Areas
                  </div>
                  <div className="text-[9px] font-mono text-[#10B981]">active &bull; open</div>
                </div>

                <div className="p-3 rounded border" style={{ borderColor: "var(--border-subtle)", background: "rgba(255,255,255,0.03)" }}>
                  <div className="font-mono text-lg font-bold text-[#38BDF8]">04</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Flagship Tech
                  </div>
                  <div className="text-[9px] font-mono text-[#38BDF8]">in development</div>
                </div>

                <div className="p-3 rounded border" style={{ borderColor: "var(--border-subtle)", background: "rgba(255,255,255,0.03)" }}>
                  <div className="font-mono text-lg font-bold text-[#F59E0B]">20+</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Tech Stack
                  </div>
                  <div className="text-[9px] font-mono text-[#F59E0B]">HW + SW + AI</div>
                </div>
              </div>

              {/* Innovation Pipeline Bar */}
              <div className="pt-3 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    INNOVATION PIPELINE ACTIVITY
                  </span>
                  <span className="text-[10px] font-mono text-[#FF6B5B] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B5B] inline-block animate-ping" />
                    Active
                  </span>
                </div>
                <div className="flex gap-1 h-3.5">
                  {[0.5, 0.8, 0.65, 0.95, 0.6, 0.85, 0.7, 0.9, 0.75, 1, 0.8].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm relative overflow-hidden"
                      style={{ background: "rgba(255, 107, 91, 0.15)" }}
                    >
                      <div
                        className="absolute bottom-0 left-0 right-0 rounded-sm bg-gradient-to-t from-[#FF6B5B] to-[#ff8e82]"
                        style={{ height: `${h * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Live Badge Top Left */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-5 glass px-4 py-2.5 rounded-lg border shadow-xl hidden sm:flex items-center gap-2.5"
              style={{ borderColor: "var(--border-medium)" }}
            >
              <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-[#10B981] uppercase">
                  LIVE R&D
                </div>
                <div className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>
                  Embedded AI Systems
                </div>
              </div>
            </motion.div>

            {/* Floating Product Badge Bottom Right */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-5 glass px-4 py-3 rounded-lg border shadow-xl hidden sm:block max-w-[200px]"
              style={{ borderColor: "var(--border-medium)" }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono text-[#FF6B5B] uppercase font-bold tracking-wider">
                  PATHGUARD
                </span>
                <span className="text-[9px] font-mono text-[#10B981]">Active</span>
              </div>
              <div className="text-xs font-normal leading-tight" style={{ color: "var(--text-secondary)" }}>
                Assistive AI for independent mobility
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
