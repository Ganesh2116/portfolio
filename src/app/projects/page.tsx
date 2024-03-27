"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
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
export const projects = [
  {
    title: "Resume Builder",
    description:
      "A web application that helps you create a professional resume in minutes.",
    link: "https://resume-builder-gkb.vercel.app/",
  },
  {
    title: "ZetApp Banking Clone",
    description:
      "A clone of the ZetApp banking app that allows you to manage your finances easily.",
    link: "https://zetapp-assignment-gkb.vercel.app/",
  },
  {
    title: "React Sinppets",
    description:
      "A collection of React snippets for Visual Studio Code that helps you write React code faster.",
    link: "https://marketplace.visualstudio.com/items?itemName=ganeshbharti.react-sinppets",
  },
  {
    title: "Dark Mode Theme",
    description:
      "A collection of code snippets tailored for Visual Studio Code's dark theme, designed to expedite coding across various languages and frameworks..",
    link: "https://marketplace.visualstudio.com/items?itemName=ganeshbharti.gkb-theme",
  },
  {
    title: "Login page",
    description:
      "A simple login page that allows you to sign in to your account.",
    link: "https://login-page-gkb.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "A portfolio website that showcases your work and skills to potential employers.",
    link: "https://portfolio-gkb.vercel.app/",
  },
];
