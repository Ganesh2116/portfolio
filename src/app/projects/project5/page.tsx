"use client";

import firstProject from "@/utils/firstProject";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className=" max-w-6xl mx-auto ">
        <p className="text-5xl font-bold pt-20 pb-16 text-center md:text-start">
          Login Page
        </p>
        {/* description */}
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start gap-16 pb-10">
          <div className="w-1/2">
            <p className="text-2xl font-bold">Description:</p>
            <p
              className="text-slate-400 sm:text-start text-lg  text-center  pt-4      
            "
            >
              This tutorial will cover everything you need to know to implement
              authentication functionality in your Next.js application. We will
              start by setting up our Next.js project and configuring MongoDB
              with Mongoose to store user data securely. Next, we will design
              and develop the frontend components for the login and signup
              pages, ensuring a clean and intuitive user interface.
            </p>

            <Link
              href="https://login-page-gkb.vercel.app/login"
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
                Full-Stack Project.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold pt-6">Technologies/Tools:</p>
              <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
                HTML,TailwindCSS,JavaScript,
                <br />
                Nextjs,Mongoose,MongoDB,GitHub.
              </p>
            </div>
          </div>
        </div>

        {/* introduction and landing page */}
        <div className="text-center md:text-start px-4">
          <p className="text-2xl font-bold ">Introduction</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            Welcome to the Full Stack Login and Signup Pages tutorial using
            Next.js, MongoDB, and Mongoose. In this comprehensive guide, we will
            walk you through the process of creating secure and user-friendly
            login and signup pages for your web application. Leveraging the
            power of Next.js for the frontend and MongoDB with Mongoose for the
            backend, you will learn how to build a robust authentication system
            that meets modern security standards while providing a seamless user
            experience.
          </p>
        </div>

        <div className="text-center md:text-start px-4 pb-16 pt-4">
          <p className="text-2xl font-bold">Conclusion</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center  pt-4">
            Building a full-stack login and signup system with Next.js, MongoDB,
            and Mongoose is a powerful way to enhance the security and usability
            of your web application. By following this tutorial, you have gained
            valuable insights into implementing authentication functionality
            using industry-standard practices. With your newfound knowledge, you
            are well-equipped to create secure, user-friendly login and signup
            pages that will delight your users and protect their data.
          </p>
        </div>
        {/* line */}
        <div className="h-px m-auto bg-gray-500 mx-4 md:mx-0"></div>
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
