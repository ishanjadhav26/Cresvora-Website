"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/#technology" },
  { label: "Research", href: "/research" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b shadow-lg"
          : "border-b border-transparent"
      }`}
      style={{
        background: scrolled ? "var(--glass-nav)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderColor: scrolled ? "var(--border-subtle)" : "transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-9 h-11 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo-mark.png"
              alt="Cresvora Logo"
              fill
              className="object-contain"
              sizes="44px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className="font-extrabold text-lg tracking-[0.14em]"
              style={{ color: "var(--text-primary)" }}
            >
              CRESVORA
            </span>
            <span
              className="text-[9px] tracking-[0.24em] uppercase font-mono -mt-1 opacity-60"
              style={{ color: "var(--text-muted)" }}
            >
              Intelligence &bull; Motion
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.12em] font-medium transition-colors duration-200 relative group py-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <span className="group-hover:text-[#FF6B5B] transition-colors">
                {link.label}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B5B] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <div className="pl-2 border-l" style={{ borderColor: "var(--border-subtle)" }}>
            <ThemeToggle />
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="btn-primary text-xs tracking-wider"
          >
            <span>Contact Us</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            className="p-2 transition-colors rounded"
            style={{ color: "var(--text-primary)", border: "1px solid var(--border-subtle)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden border-b ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{
          background: "var(--bg-secondary)",
          borderColor: "var(--border-subtle)",
        }}
      >
        <div className="px-6 py-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-2.5 text-sm font-medium border-b transition-colors"
              style={{
                color: "var(--text-secondary)",
                borderColor: "var(--border-subtle)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary text-xs w-full justify-center mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
