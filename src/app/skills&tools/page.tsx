"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="max-w-5xl mx-auto pt-24">
      <h1 className="text-start text-5xl font-bold pb-16">Skills & Tools</h1>

      {/* languages */}
      <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
        <div className="pl-2 bg-slate-900 rounded-lg p-4 mb-4 w-1/2">
          <h1 className="text-slate-300 p-4 text-2xl font-bold sm:text-start text-center">
            Languages
          </h1>
          <p className="text-slate-400 sm:text-start p-4 text-base text-center">
            HTML,CSS,TailwindCSS,JavaScript,Java,Cpp,C
          </p>
        </div>
        {/* tools and platforms */}
        <div className="pl-2 bg-slate-900 rounded-lg p-4 mb-4 w-1/2">
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
          duration: 1,
        }}
        initial={{
          opacity: 1,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
      >
        <p className="text-slate-300 pt-5 text-2xl font-bold sm:text-start text-center">
          Framework and Libraries
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 pt-4 gap-5 pb-20">
          <div>
            <p className="pb-2">React</p>
            <Image src="/react.png" alt="React" width={100} height={100} />
          </div>
          <div>
            <p className="pb-2">NextJs</p>
            <Image src="/nextjs.jpeg" alt="Nextjs" width={100} height={200} />
          </div>
          <div>
            <p className="pb-2">TypeScript</p>
            <Image
              src="/typescript.svg"
              alt="typescript"
              width={100}
              height={100}
            />
          </div>
          <div>
            <p className="pb-2">NodeJs</p>
            <Image src="/nodejs.svg" alt="Nodejs" width={100} height={100} />
          </div>
          <div>
            <p className="pb-2">MongoDB</p>
            <Image src="/mongodb.svg" alt="MongoDB" width={100} height={100} />
          </div>
          <div>
            <p className="pb-2">Vercel</p>
            <Image src="/vercel.png" alt="vercel" width={100} height={100} />
          </div>
          <div>
            <p className="pb-2">Aceternity UI</p>
            <Image
              src="/aceternityUi.png"
              alt="aceternityUI"
              width={100}
              height={100}
            />
          </div>
          <div>
            <p className="pb-2">JavaScript</p>
            <Image
              src="/javascript.svg"
              alt="javascript"
              width={100}
              height={100}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default page;
