"use client";
import sinppets from "@/utils/sinppets";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className=" max-w-6xl mx-auto ">
        <p className="text-5xl font-bold pt-20 pb-16 text-center md:text-start">
          Dark Mode Theme
        </p>
        {/* description */}
        <div className="flex gap-16 pb-10 flex-col items-center justify-center md:flex-row md:items-start md:justify-start ">
          <div className="w-1/2">
            <p className="text-2xl font-bold">Description:</p>
            <p
              className="text-slate-400 sm:text-start text-lg  text-center  pt-4      
            "
            >
              The Dark Theme VS Code Extension is tailored for developers who
              prefer a darker color scheme while coding. With rich, contrasting
              colors and carefully chosen syntax highlighting, this theme
              ensures optimal readability and eye comfort during long coding
              sessions. The extension includes support for various programming
              languages and file types, making it versatile and suitable for a
              wide range of coding projects.
            </p>

            <Link
              href="https://marketplace.visualstudio.com/items?itemName=ganeshbharti.gkb-theme"
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
                Vs-code Extension.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold pt-6">Technologies/Tools:</p>
              <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
                JavaScript,TypeScript,GitHub,
                <br />
                Azuer,vs-code Extension.
              </p>
            </div>
          </div>
        </div>

        {/* introduction and landing page */}
        <div className="text-center md:text-start">
          <p className="text-2xl font-bold  ">Introduction</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            The Dark Theme VS Code Extension offers a personalized and visually
            appealing dark theme for the Visual Studio Code (VS Code) editor.
            Crafted with meticulous attention to detail and designed to enhance
            the coding experience, this extension provides users with a sleek
            and customizable dark theme option that reflects their unique
            preferences and coding style.
          </p>
        </div>
        {/* landing page */}
        <div className="text-center md:text-start pb-20">
          <p className="text-2xl font-bold pt-6">Landing Theme Page</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            <span className="font-bold text-xl">
              Welcome toDark Theme for VS Code
            </span>{" "}
            <br /> <br />
            At Own Dark Theme, we believe in enhancing your coding experience
            with a touch of personalization and elegance. Our theme is
            meticulously crafted to provide you with a sleek and visually
            appealing dark theme for Visual Studio Code.
          </p>
        </div>

        {/* step and images */}
        <div className="bg-slate-800 flex flex-col items-center justify-center rounded-xl pt-8 mb-16 px-4 md:px-0">
          <h1 className="text-5xl font-bold py-4">GKB Theme</h1>

          <Image
            src="/projects/bharti-logo.png"
            alt="bharti-logo"
            width={400}
            height={400}
          />

          <h1 className="text-2xl font-semibold py-8">
            This is the made Dark Theme
          </h1>
          <h1 className="text-4xl font-bold">Installation via VS Code</h1>

          <Image
            src="/projects/theme.png"
            alt="theme"
            width={800}
            height={600}
            className="py-8"
          />
          <h1 className="text-3xl font-bold text-center">Installtion steps</h1>
          <p className="text-slate-400 sm:text-start text-lg py-8">
            1. Open Extensions sidebar panel in VS Code.{" "}
            <span className="font-bold">View → Extensions</span>
            <br />
            2. Search for <span className="font-bold"> Bharti </span>
            <br />
            3.Click on Bharti Theme <br />
            4.Click Install to install it <br />
            5. Click Reload to reload the editor <br />
            6. Code = Preferences = Color Theme ={" "}
            <span className="font-bold"> Bharti Theme</span>
          </p>
        </div>

        {/*conclusion  */}
        <div className="text-center md:text-start pb-16 px-4 md:px-0">
          <p className="text-2xl font-bold">Conclusion</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center  pt-4">
            In conclusion, the Own Dark Theme VS Code Extension offers a
            stylish, customizable, and performance-optimized dark theme option
            for Visual Studio Code users. With its sleek design, rich color
            palette, and extensive customization capabilities, this extension
            provides a superior coding experience tailored to individual
            preferences. Elevate your coding environment with the Own Dark Theme
            and immerse yourself in a visually stunning and ergonomic workspace.
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
