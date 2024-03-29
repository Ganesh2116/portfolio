"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/utils/projects";

export default function ProjectSection() {
  return (
    <div className="max-w-5xl mx-auto px-8 pt-16">
      <div className="">
        <h1 className="text-5xl font-bold text-black dark:text-white text-start pl-2">
          Projects
        </h1>
        <p className="text-slate-400 p-4 text-base text-start">
          Here’s some of my projects which showcases my skills in the field of
          development.
        </p>
      </div>

      <div>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
