"use client";
import React from "react";
import { Label } from "@/components/ui/lable";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-5xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black ">
      {/* title */}
      <div className="flex items-center justify-center flex-col pt-8">
        <h1 className="text-5xl font-bold text-black dark:text-white">
          Contact Me
        </h1>
        <p className="text-slate-400 p-4 text-base text-center">
          I am always open to new projects, collaborations, or employment
          <span className="inline-block">opportunities. Lets connect!</span>
        </p>
      </div>
      {/* contact form */}
      <div className="sm:flex sm:gap-6">
        <div className="sm:w-1/2">
          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="xxxx" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="subject">Subject*</Label>
              <Input id="subject" placeholder="subject" type="text" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-8">
              <Label htmlFor="message">Message*</Label>
              <Input
                id="message"
                placeholder="write your message here "
                type="text"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Submit &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>

        {/* support and hire  */}
        {/* support */}
        <div className="sm:w-1/2 sm:pt-8">
          <div className="pl-2 bg-slate-800 rounded-lg p-4 mb-4">
            <h1 className="text-slate-300 p-4 text-2xl font-bold sm:text-start text-center">
              Support Me.
            </h1>
            <p className="text-slate-400 sm:text-start p-4 text-base text-center">
              Your support means the world to me! With your help, I will create
              even more incredible
              <span className="inline-block">
                projects that inspire and uplift others. Together, we will turn
                dreams into reality.
              </span>
            </p>
            <div className="flex justify-center sm:justify-start sm:ml-5 pt-5">
              <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-6 py-2 rounded-full">
                <Link href="/contact">
                  <span>Support Me</span>
                </Link>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
              </button>
            </div>
          </div>

          {/* hire me */}
          <div className="pl-2 bg-slate-800 rounded-lg p-4">
            <h1 className="text-slate-300 p-4 text-2xl font-bold sm:text-start text-center">
              Hire Me.
            </h1>
            <p className="text-slate-400 sm:text-start p-4 text-base text-center">
              If my work resonates with you, I am open to collaborations and
              opportunities.
              <span className="inline-block">
                Feel free to reach out for potential projects!
              </span>
            </p>
            <div className="flex justify-center sm:justify-start sm:ml-5 pt-5">
              <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-6 py-2 rounded-full">
                <Link href="/contact">
                  <span>Hire Me</span>
                </Link>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
