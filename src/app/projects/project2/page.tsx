"use client";

import secondProject from "@/utils/secondProject";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className=" max-w-6xl mx-auto ">
        <p className="text-5xl font-bold pt-20 pb-16 text-center md:text-start">
          ZetApp Banking Clone
        </p>
        {/* description */}
        <div className="flex gap-16 pb-10 flex-col items-center justify-center md:flex-row">
          <div className="w-1/2">
            <p className="text-2xl font-bold">Description:</p>
            <p
              className="text-slate-400 sm:text-start text-lg  text-center  pt-4      
            "
            >
              The ZetApp Banking Clone is a sophisticated web and mobile
              application designed to replicate the functionalities of a modern
              banking system, offering users a seamless and secure banking
              experience. With a focus on user convenience, advanced security
              measures, and intuitive interfaces, this clone provides a
              comprehensive range of banking services accessible from anywhere,
              anytime.
            </p>

            <Link
              href="https://zetapp-assignment-gkb.vercel.app/"
              className="text-blue-500 hover:text-blue-700 flex gap-2 pt-3"
            >
              View Project
              <Image
                src="/external-link.svg"
                alt="external-link"
                width={15}
                height={15}
              />
            </Link>
          </div>

          {/* domain and tools */}
          <div className="w-1/2 ">
            <div>
              <p className="text-2xl font-bold ">Domain:</p>
              <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
                Front-End Developer.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold pt-6">Technologies/Tools:</p>
              <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
                HTML,TailwindCSS, JavaScript,Nextjs,TypeScript,
                <br />
                framer-motion,carousel,GitHub.
              </p>
            </div>
          </div>
        </div>

        {/* introduction and landing page */}
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start px-4">
          <p className="text-2xl font-bold">Introduction</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            Introducing the ZetApp Banking Clone a cutting-edge solution that
            redefines the banking experience for the digital age. With
            meticulous attention to detail and advanced technology, our clone
            brings the functionalities of a modern banking system to you.
            Seamlessly blending convenience with security, our platform offers a
            comprehensive suite of banking services accessible anytime,
            anywhere.
          </p>
        </div>
        {/* landing page */}
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start px-4 pb-20">
          <p className="text-2xl font-bold pt-6">Landing Page</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            Experience the next generation of banking with ZetApp Banking Clone.
            Our cutting-edge platform combines state-of-the-art technology with
            intuitive design to deliver a seamless banking experience tailored
            for the modern user.
          </p>
        </div>

        {/* step and images */}
        <div className="bg-slate-800 flex flex-col items-center justify-center rounded-xl pt-8 mb-16 px-4">
          {secondProject.map((project) => (
            <div key={project.id} className="max-w-3xl pb-8">
              <p className="text-2xl font-bold pt-6">{project.page}</p>
              <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
                {project.description}
              </p>
              <div>
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={800}
                  height={600}
                  className="pt-8"
                />
              </div>
            </div>
          ))}
        </div>
        {/* technologies used */}
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start px-4 pb-16">
          <p className="text-2xl font-bold">Technologies Used:</p>
          <ul className="list-disc text-slate-400 sm:text-start text-lg text-center pt-4">
            <li>
              <span className="font-bold">Nextjs:</span>
              For building App Router rendering and static web applications
              using React.
            </li>
            <li>
              <span className="font-bold">TypeScript:</span>
              To catch mistakes early through a type system and to make
              JavaScript development more efficient.
            </li>
            <li>
              <span className="font-bold">carousel:</span>
              For animation scroll brand the web app from scratch.
            </li>
            <li>
              <span className="font-bold">Framer-motion:</span>
              For animation scroll the web app from scratch.
            </li>
            <li>
              <span className="font-bold">Headless UI:</span>
              React UI components library.
            </li>
            <li>
              <span className="font-bold">TypeScript:</span>
              For designing the web app from scratch.
            </li>
          </ul>
        </div>
        {/* Packages */}
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start px-4 pb-16">
          <p className="text-2xl font-bold">Packages:</p>
          <ul className="list-disc text-slate-400 sm:text-start text-lg text-center pt-4">
            <li>
              <span className="font-bold">TablerIcon:</span>
              For icon library.
            </li>
            <li>
              <span className="font-bold">Autoperfixer:</span>
              For CSS vendor prefixes.
            </li>
          </ul>
        </div>
        {/*conclusion  */}
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start px-4 pb-16">
          <p className="text-2xl font-bold">Conclusion</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center  pt-4">
            In conclusion, ZetApp Banking Clone represents the pinnacle of
            innovation in the banking sector, offering a seamless and secure
            platform for managing finances in the digital age. With advanced
            technology and user-centric design, we empower users to take control
            of their financial journey with confidence and ease. Whether you are
            accessing your accounts on the go or managing transactions from the
            comfort of your home, our platform ensures a convenient and reliable
            banking experience. Join us in embracing the future of banking today
            with ZetApp Banking Clone where convenience meets security for a
            truly transformative banking experience.
          </p>
        </div>
        {/* line */}
        <div className="h-px m-auto bg-gray-500 mx-4"></div>
        {/* Thank You! */}
        <div className="text-4xl font-bold py-6 text-center md:text-start">
          Thank You!
        </div>
        {/* back to projects */}
        <div className="py-20 flex items-center justify-center">
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-6 py-3 rounded-full ">
            <Link href="/projects">
              <span>Back to Projects</span>
            </Link>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </div>
      </div>
    </>
  );
};
export default page;
