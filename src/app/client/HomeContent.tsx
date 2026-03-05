"use client";

import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/Hero";
import { FeaturesSection } from "@/components/sections/Features";
import { AboutSection } from "@/components/sections/About";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export function HomeContent() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
