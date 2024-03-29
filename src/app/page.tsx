"use client";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsTools from "@/components/Skills&Tools";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <SkillsTools />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
