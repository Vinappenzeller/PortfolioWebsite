import React from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { fadeIn } from "./variants";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.div
      className="p-5 flex items-center "
      variants={fadeIn("right", 0.9)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.9 }}
    >
      <h1 className="text-3xl font-bold pr-32">Vin | Portfolio</h1>
      <nav className="text-xl">
        <ul className="flex gap-8">
          <li className="relative group">
            <a
              href="#About"
              className="cursor-pointer text-2xl hover:text-blue-400 transition-all duration-500"
            >
              About
            </a>
            <div className="absolute w-full h-1 bg-blue-400 bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-lg top-14"></div>
          </li>
          <li className="relative group">
            <a
              href="#Experience"
              className="cursor-pointer text-2xl hover:text-blue-400 transition-all duration-500"
            >
              Experience
            </a>
            <div className="absolute w-full h-1 bg-blue-400 bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-lg top-14"></div>
          </li>
          <li className="relative group">
            <a
              href="#Projects"
              className="cursor-pointer text-2xl hover:text-blue-400 transition-all duration-500"
            >
              Projects
            </a>
            <div className="absolute w-full h-1 bg-blue-400 bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-lg top-14"></div>
          </li>
          <li className="relative group">
            <a
              href="#Contact"
              className="cursor-pointer text-2xl hover:text-blue-400 transition-all duration-500"
            >
              Contact
            </a>
            <div className="absolute w-full h-1 bg-blue-400 bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-lg top-14"></div>
          </li>
        </ul>
      </nav>
      <div className=" rounded-xl w-auto h-auto hover:text-yellow-300 cursor-pointer text-5xl ml-auto transition-all duration-700 mr-20">
        <AiTwotoneThunderbolt className="" />
      </div>
    </motion.div>
  );
};

export default Nav;
