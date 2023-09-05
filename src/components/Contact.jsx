import React from "react";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdMail } from "react-icons/md";


const Contact = () => {
  return (
    <div id="Contact" className=" flex">
      <div className=" h-auto w-full rounded-3xl bg-blue-50 flex justify-evenly p-5">
        <a href="https://github.com/Vinappenzeller" target="_blank">
          <div className="flex flex-col items-center">
            <BsGithub className="mb-1 lg:text-8xl cursor-pointer md:text-7xl sm:text-6xl text-5xl hover:text-blue-400 transition-all duration-500" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/vin-appenzeller-b81522272/" target="_blank">
        <div className="flex flex-col items-center">
          <BsLinkedin className="mb-1  lg:text-8xl cursor-pointer md:text-7xl sm:text-6xl text-5xl hover:text-blue-400 transition-all duration-500" />
        </div>
        </a>
        <a href="https://www.youtube.com/@deeeezz6540" target="_blank">
        <div className="flex flex-col items-center">
          <BsYoutube className="mb-1  lg:text-8xl cursor-pointer md:text-7xl sm:text-6xl text-5xl hover:text-blue-400 transition-all duration-500" />
        </div>
        </a>
        <div className="flex flex-col items-center">
          <MdMail className="mb-1 lg:text-8xl cursor-pointer md:text-7xl sm:text-6xl text-5xl hover:text-blue-400 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
