import React from "react";
import { BsGithub, BsLinkedin, BsMailbox2 } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="Contact" className=" flex">
      <div className=" h-auto w-full bg-blue-100 dark:bg-slate-900 dark:bg-opacity-60 p-5 transition-colors duration-500 ease-in">
        <div className=" text-center" id="maincontact">
          <h1 className="font-semibold text-blue-400 text-5xl pt-16">
            Wanna reach me out?
          </h1>
          <p className="pb-5 text-3xl dark:text-zinc-200 transition-colors duration-500 ease-in">Here's my e-mail</p>
          <h2 className="pb-16 text-xl dark:text-zinc-400 transition-colors duration-500 ease-in">vin_appenzeller@outlook.de</h2>
          <div className="flex gap-5 justify-center text-6xl pb-10">
            <a href="https://github.com/Vinappenzeller" target="blank">
              <BsGithub className="hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-500 dark:text-zinc-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/vin-appenzeller-b81522272/"
              target="blank"
            >
              <BsLinkedin className="hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-500 dark:text-zinc-200" />
            </a>
            <a href="mailto: vin_appenzeller@outlook.de">
              <BsMailbox2 className="hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-500 dark:text-zinc-200" />
            </a>
          </div>
        </div>
        <div className="pb-5">
          <p className=" text-center text-gray-500 dark:text-zinc-400 transition-colors duration-500 ease-in">Built by Vin Appenzeller.</p>
          <p className="text-gray-500 text-center dark:text-zinc-400 transition-colors duration-500 ease-in">Website Code on <a className="underline hover:text-gray-800 dark:hover:text-zinc-600 transition-colors duration-500 ease-in" href="https://github.com/Vinappenzeller/PortfolioWebsite" target="blank">GitHub</a></p>
        </div>
        <div className="text-center" id="icon8 reference">
            <p className=" text-gray-500 dark:text-zinc-400 transition-colors duration-500 ease-in">Technology icons by</p>
            <a
              className=" text-gray-500 underline cursor-pointer hover:text-gray-800 dark:text-zinc-400 transition-colors duration-500 ease-in dark:hover:text-zinc-600"
              href="https://icons8.com/"
              target="_blank"
            >
              icons8
            </a>
          </div>
      </div>
    </div>
  );
};

export default Contact;
