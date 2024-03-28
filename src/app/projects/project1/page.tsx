"use client";

import firstProject from "@/utils/firstProject";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className=" max-w-6xl mx-auto ">
        <p className="text-4xl sm:text-5xl font-bold pt-20 pb-16 text-center sm:text-start">
          Resume Builder
        </p>
        {/* description */}
        <div className="flex gap-16 pb-10 flex-col items-center sm:flex-row">
          <div className="w-1/2">
            <p className="text-2xl font-bold">Description:</p>
            <p
              className="text-slate-400  text-lg  pt-4      
            "
            >
              The Resume Builder Project is a web-based application designed to
              assist users in creating professional and visually appealing
              resumes effortlessly. It aims to streamline the resume creation
              process by providing intuitive tools and templates while ensuring
              customization options to suit individual preferences and career
              needs
            </p>

            <Link
              href="https://resume-builder-gkb.vercel.app/"
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
              <p className="text-slate-400  text-lg pt-4">
                Front-End Developer.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold pt-6">Technologies/Tools:</p>
              <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
                HTML,TailwindCSS, JavaScript,React,Mantine-UI,GitHub,jspdf.
              </p>
            </div>
          </div>
        </div>

        {/* introduction and landing page */}
        <div className="text-center px-4 sm:text-start sm:px-0">
          <p className="text-2xl font-bold ">Introduction</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            Introducing our revolutionary Resume Builder the ultimate solution
            for crafting professional resumes with ease. Our user-friendly web
            application empowers individuals to create stunning resumes tailored
            to their unique career aspirations. Whether you are a seasoned
            professional or just starting your career journey, our Resume
            Builder simplifies the task of showcasing your skills and
            experiences to potential employers. Join us and take the first step
            towards unlocking exciting career opportunities.
          </p>
        </div>
        {/* landing page */}
        <div className="text-center px-4 sm:text-start sm:px-0 pb-20">
          <p className="text-2xl font-bold pt-6">Landing Page</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            As soon as users land on our websites landing page, they have the
            option to from first using setper. They can also read through the
            features and other sections on the landing page.
          </p>
        </div>

        {/* step and images */}
        <div className="bg-slate-800 flex flex-col items-center justify-center rounded-xl pt-8 mb-16 px-4">
          {firstProject.map((project) => (
            <div key={project.id} className="max-w-3xl pb-8">
              <p className="text-2xl font-bold pt-6">{project.step}</p>
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
        <div className="text-center px-4 sm:text-start sm:px-0 pb-16">
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
        <div className="text-center px-4 sm:text-start sm:px-0 pb-16">
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
        <div className="text-center px-4 sm:text-start sm:px-0 pb-16">
          <p className="text-2xl font-bold">Conclusion</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center  pt-4">
            In conclusion, our Resume Builder offers a comprehensive and
            user-friendly solution for crafting resumes tailored to individual
            career aspirations. We empower users to create standout resumes that
            effectively showcase their skills and experiences. Whether you are a
            seasoned professional or just starting your career journey, our
            platform simplifies the resume creation process, helping you unlock
            exciting opportunities in your desired field. Join us today and take
            the first step towards building a compelling resume that sets you
            apart from the competition.
          </p>
        </div>
        {/* line */}
        <div className="h-px m-auto bg-gray-500 mx-4 sm:mx-0 "></div>
        {/* Thank You! */}
        <div className="text-4xl font-bold py-6 px-4 text-center sm:text-start">
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
