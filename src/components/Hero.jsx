import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Hero = () => {
  return (
    <div id="Hero" className=" min-h-screen flex">
      <motion.div
        className="text-center p-10 h-auto w-full bg-blue-50"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
      >
        <motion.div
        variants={fadeIn("right", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
        >
        <h1 className="text-5xl py-2 text-blue-400 font-medium md:text-6xl lg:text-7xl">
        Hi, I'm Vin Appenzeller
        </h1>
        <h2 className="text-2xl py-2 md:text-3xl lg:text-4xl">
        a Student at the IMS in Aarau
        </h2>
        <p className="lg:text-2xl py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto lg:pb-32 pb-16">
        I am looking for a 1 year internship as an application developer for my
          education at the IMS Aarau for the year 2024.
         This Portfolio summarizes the most important information about me.

        </p>
        <div className=" select-none relative">
          <a href="#About">
            <button className=" animate-bounce bg-blue-400 h-auto w-auto text-gray-800 text-3xl text-center rounded-xl hover:bg-blue-500 hover:text-black transition-all duration-500 shadow-lg">
              <p className="p-4 pl-10 pr-10">
                more <br />ᐁ
              </p>
            </button>
          </a>
        </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
