"use client";
import sinppets from "@/utils/sinppets";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className=" max-w-6xl mx-auto ">
        <p className="text-5xl font-bold pt-20 pb-16 text-center md:text-start">
          React Sinppets
        </p>
        {/* description */}
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start gap-16 pb-10">
          <div className="w-1/2">
            <p className="text-2xl font-bold">Description:</p>
            <p
              className="text-slate-400 sm:text-start text-lg  text-center  pt-4      
            "
            >
              The React Snippets VS Code Extension offers a comprehensive
              collection of code snippets tailored specifically for React
              development. These snippets cover a variety of scenarios,
              including component creation, state management, lifecycle methods,
              event handling, and more. Each snippet is carefully crafted to
              adhere to best practices and common coding conventions, ensuring
              clean and maintainable code.
            </p>

            <Link
              href="https://marketplace.visualstudio.com/items?itemName=ganeshbharti.react-sinppets"
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
        <div>
          <p className="text-2xl font-bold text-center md:text-start px-6 md:px-0 ">
            Introduction
          </p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            The React Snippets VS Code Extension is a powerful tool designed to
            streamline React development workflows within Visual Studio Code.
            With a wide range of pre-defined code snippets, this extension
            significantly enhances productivity by reducing the time spent on
            writing repetitive code and improving code consistency across
            projects. Whether you are a seasoned React developer or just getting
            started, this extension is an invaluable resource for accelerating
            your development process and building high-quality React
            applications efficiently.
          </p>
        </div>
        {/* landing page */}
        <div className="pb-20 text-center md:text-start px-4">
          <p className="text-2xl font-bold pt-6">Sinppts Code</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center pt-4">
            React Snippets Code simplifies React development in VS Code. With
            intuitive triggers, it accelerates coding by providing ready-to-use
            components, reducing manual effort, and ensuring consistency.
          </p>
        </div>

        {/* step and images */}
        <div className="bg-slate-800 flex flex-col items-center justify-center rounded-xl pt-8 mb-16 px-8 md:px-0">
          <div>
            <h1 className="text-3xl font-bold pt-4 pb-3">
              React-code-snippets
            </h1>
            <p className=" text-slate-400  text-lg pl-2 ">
              A snippet library which includes simple daily use snippets
            </p>

            {/* language  */}
            <h1 className="text-2xl font-bold pt-4">Language Supported :</h1>
            <p className="pl-2 text-lg text-slate-400 gap-4 pt-4">
              1. Javascript(js)
              <br />
              2. Typescript(ts)
              <br />
              3. Javascriptreact(jsx)
              <br />
              4. Typescriptreact(tsx)
            </p>

            {/* all command */}

            <h1 className="text-2xl font-bold pt-4">All Command:</h1>
            <p className="text-slate-400 pl-2 pt-2 ">
              1. cl - Console Log <br />
              2. cls - Console Log String <br />
              3. clc - Console Section <br />
              4. fc - functional Component <br />
              5. us - functional Component with useState <br />
              6. fcp - Arrow functional Component with Props <br />
              7. ace - React functional Component Export
            </p>

            {/* sinppets */}
            <h1 className="text-2xl font-bold pt-6">Sinppets:</h1>
            {sinppets.map((sinppet) => (
              <div key={sinppet.id} className="pb-10">
                <p className="text-slate-400 pl-2 py-6">{sinppet.title}</p>
                <Image
                  src={sinppet.src}
                  alt={sinppet.alt}
                  width={400}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>

        {/*conclusion  */}
        <div className="pb-16 text-center md:text-start px-4">
          <p className="text-2xl font-bold">Conclusion</p>
          <p className="text-slate-400 sm:text-start text-lg  text-center  pt-4">
            In conclusion, the React Snippets VS Code Extension is an
            indispensable tool for React developers seeking to boost their
            productivity and streamline their development process. By providing
            a comprehensive library of pre-defined code snippets, intuitive tab
            triggers, and extensive customization options, this extension
            empowers developers to write clean, efficient React code with ease.
            Whether you are building small prototypes or large-scale
            applications, the React Snippets VS Code Extension is a must-have
            addition to your development toolkit.
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
