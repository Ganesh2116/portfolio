"use client";
import ContactSection from "@/components/ContactSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsTools from "@/components/Skills&Tools";
import React from "react";

const page = () => {
  return (
    <div>
      <SkillsTools />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};
export default page;
