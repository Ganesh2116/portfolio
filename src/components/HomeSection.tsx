"use client";
import React from "react";
import Link from "next/link";
import Photo from "./Photo";

const HomeSection = () => {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold xl:px-16 pt-4 flex justify-center md:px-12 md:justify-start lg:px-20">
        Ganu
        <span className="text-sky-400 text-4xl">.</span>
      </div>
      <main className="flex items-center justify-center gap-8 md:h-screen flex-col md:flex-row ">
        <div className="text-center px-4 md:text-start">
          <p className="text-slate-400  text-base font-light">
            Software Developer
          </p>
          <p className="text-5xl font-semibold text-white pt-4">
            Hello I'm <br />
          </p>
          <p className="text-sky-400 text-5xl font-semibold mt-3 ">
            Ganesh Bharti
          </p>

          <p className="text-slate-400 text-lg pt-4">
            I am a web developer with a passion for front end development and
            <br />
            design. I aspire toward a career that will allow me to showcase my
            creativity <br /> through crafting beautiful websites and engaging
            experiences. About Me
          </p>
          <div className="pb-4 md:pb-0 pt-8 space-x-3 lg:space-x-6 ">
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-10 sm:py-4 px-6 py-2 rounded-full ">
              <Link href="/about">
                <span>About Me</span>
              </Link>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-10 sm:py-4 px-6 py-2 rounded-full">
              <Link href="/projects">
                <span>My Projects</span>
              </Link>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </div>
        </div>
        <div className="pt-4 px-8 md:px-0 md:pt-0">
          <Photo />
        </div>
      </main>
    </div>
  );
};
export default HomeSection;
