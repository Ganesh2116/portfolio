import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 flex items-center justify-center">
      <div className="max-w-5xl">
        {/* contact and mail */}
        <div className="flex sm:flex-row sm:pt-16  flex-col items-center pt-10">
          <div className="pl-2">
            <h1 className="text-slate-300 p-4 text-5xl font-bold text-start">
              Lets get in touch.
            </h1>
            <p className="text-slate-400 text-start p-4 text-base">
              My inbox is always open, Whether you have a question or just want
              <span className="inline-block">
                to say hi. I’ll try my best to get back to you!
              </span>
            </p>
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-6 py-2 rounded-full ml-6">
              <Link href="/contact">
                <span>Contact Me</span>
              </Link>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </div>
          <div className="sm:pt-24 sm:mr-10 pt-10">
            <div className="flex flex-row gap-2 pb-4 ">
              <span>ganeshkundlikbharti@gmail.com</span>

              <Image src="./mail.svg" alt="mail" width={28} height={28}></Image>
            </div>
            <div>
              <Link
                href="https://www.google.com/maps/place/Nanded,+Maharashtra/@19.1472597,77.2746554,13z/data=!3m1!4b1!4m6!3m5!1s0x3bd1d66bb9d31721:0x43892c180155daf1!8m2!3d19.1485289!4d77.3191471!16zL20vMDU5bmoz?entry=ttu"
                target="_blank"
                className="flex flex-row gap-2 "
              >
                <span>Nanded,Maharashtra India.</span>
                <Image
                  src="./map-pin.svg"
                  alt="linkedin"
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* social media */}
        <div className="h-px  bg-gray-500 m-6 "></div>
        <div className="flex sm:justify-between p-2 pb-10 flex-col-reverse items-center sm:flex-row">
          <div className="text-slate-400 text-center p-4 text-base">
            <p>© 2023 All rights reserved.Ganesh</p>
          </div>
          <div className="flex flex-row">
            <Link href="https://github.com/Ganesh2116" target="_blank">
              <Image src="./github.svg" alt="linkedin" width={40} height={40} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ganesh-bharti-089b60228/"
              target="_blank"
            >
              <Image
                src="./linkedin.svg"
                alt="linkedin"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href="https://www.instagram.com/ganesh.bharti.1234/"
              target="_blank"
            >
              <Image
                src="./instagram.svg"
                alt="linkedin"
                width={40}
                height={40}
              />
            </Link>
            <Link href="" target="_blank">
              <Image
                src="./twitter.svg"
                alt="linkedin"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
