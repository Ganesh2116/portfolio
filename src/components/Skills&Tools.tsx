"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import skillsImg from "@/utils/skillsImg";

const SkillsTools = () => {
  return (
    <div className="max-w-5xl mx-auto pt-24">
      <h1 className="sm:text-start text-center text-5xl font-bold pb-16">
        Skills & Tools
      </h1>

      {/* languages */}
      <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
        <div className="pl-2 bg-slate-900 rounded-lg p-4 mb-4 sm:w-1/2 ">
          <h1 className="text-slate-300 p-4  text-2xl font-bold sm:text-start text-center">
            Languages
          </h1>
          <p className="text-slate-400 sm:text-start p-4 text-base text-center">
            HTML,CSS,TailwindCSS,JavaScript,
            <span className="inline-block">Java,Cpp,C</span>
          </p>
        </div>
        {/* tools and platforms */}
        <div className="pl-2 bg-slate-900 rounded-lg p-4 mb-4 sm:w-1/2">
          <h1 className="text-slate-300 p-4 text-2xl font-bold sm:text-start text-center">
            Tools and Platforms
          </h1>
          <p className="text-slate-400 sm:text-start p-4 text-base text-center">
            Git,VSCode,Github,Figma,Vercel
          </p>
        </div>
      </div>

      {/* 3 framework */}
      <motion.div
        transition={{
          duration: 1.5,
        }}
        initial={{
          opacity: 1,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="flex flex-col items-center justify-center"
      >
        <p className="text-slate-300 pt-5 text-2xl font-bold sm:text-start text-center">
          Framework and Libraries
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pt-4 gap-20 pb-20">
          {skillsImg.map((skill, id) => (
            <div key={id}>
              <p className="p-4">{skill.title}</p>
              <Image
                src={skill.src}
                alt={skill.title}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default SkillsTools;
