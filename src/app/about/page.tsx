"use client";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsTools from "@/components/Skills&Tools";
import React from "react";

export default function page() {
  return (
    <div>
      <AboutSection />
      <SkillsTools />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
