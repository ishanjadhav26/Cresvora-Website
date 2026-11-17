import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import TechDomains from "@/components/home/TechDomains";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import InnovationApproach from "@/components/home/InnovationApproach";
import MissionVision from "@/components/home/MissionVision";
import TechCapabilities from "@/components/home/TechCapabilities";
import HomeResearchSection from "@/components/home/HomeResearchSection";
import FounderSection from "@/components/home/FounderSection";
import HomeCareersSection from "@/components/home/HomeCareersSection";
import HomeContactSection from "@/components/home/HomeContactSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 01. Hero Experience with Embedded Animation Video */}
      <HeroSection />

      {/* 02. Introducing Cresvora & Laboratory Workbench (About Us Preview) */}
      <IntroSection />

      {/* 03. Technology Domains (AI/ML, IoT, Embedded Hardware, Software) */}
      <TechDomains />

      {/* 04. Flagship Product Portfolio (PathGuard, PAWIT, Animal Emotion, Smart Wearable) */}
      <ProductsShowcase />

      {/* 05. 4-Stage Engineering & Innovation Methodology */}
      <InnovationApproach />

      {/* 06. Mission & Vision */}
      <MissionVision />

      {/* 07. Detailed Technology Ecosystem & Toolchains */}
      <TechCapabilities />

      {/* 08. Research & Innovation Core Pillars Preview */}
      <HomeResearchSection />

      {/* 09. Leadership & Founder Feature */}
      <FounderSection />

      {/* 10. Careers & Engineering Opportunities Preview */}
      <HomeCareersSection />

      {/* 11. Direct Contact & Rapid Inquiry Desk */}
      <HomeContactSection />

      {/* 12. Final High-Impact CTA */}
      <FinalCTA />
    </>
  );
}
