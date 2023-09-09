import React, { useState } from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { fadeIn } from "./variants";
import { motion } from "framer-motion";
import "../index.css";


const Nav = () => {
  let [open,setopen]=useState(false);
  return (
    <motion.div
      id="nav"
      className="p-5 lg:flex items-center sticky top-0 lg:bg-blue-200  bg-blue-100 lg:bg-opacity-40 z-20"
      variants={fadeIn("right", 0.9)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0 }}
    >
      <h1 className="text-3xl font-bold lg:pb-0 pr-32">Vin | Portfolio</h1>
      <nav className="text-xl">
      <div className=" lg:p-0 p-4 rounded-xl lg:w-auto lg:h-auto hover:text-yellow-300 cursor-pointer text-5xl transition-all duration-700 absolute lg:top-4 top-1 right-16">
        <AiTwotoneThunderbolt />
      </div>
        <div onClick={()=>setopen(!open)} className=" text-4xl absolute right-8 top-6 cursor-pointer lg:hidden">
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={` left-0 w-full bg-blue-100 lg:bg-none lg:bg-opacity-0 lg:pb-0 pb-12 lg:flex lg:gap-8 lg:static absolute lg:z-0 -z-10 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100':'top-[-490px]'} lg:opacity-100 opacity-0`}>
        <li className="relative group lg:p-0 p-4">
            <a
              href="#"
              className="cursor-pointer text-2xl hover:text-blue-400 transition-all duration-500"
              onClick={()=>setopen(!open)}
            >
              Home
            </a>
            <div className="lg:absolute lg:w-full lg:h-1 lg:bg-blue-400 lg:bottom-0 lg:left-0 lg:transform lg:scale-x-0 lg:origin-left lg:transition-transform lg:duration-500 lg:group-hover:scale-x-100 lg:rounded-lg lg:top-14"></div>
          </li>
          <li className="relative group lg:p-0 p-4">
            <a
              href="#About"
              className="cursor-pointer text-2xl hover:text-blue-400 transition-all duration-500"
              onClick={()=>setopen(!open)}
            >
              About
            </a>
            <div className="lg:absolute lg:w-full lg:h-1 lg:bg-blue-400 lg:bottom-0 lg:left-0 lg:transform lg:scale-x-0 lg:origin-left lg:transition-transform lg:duration-500 lg:group-hover:scale-x-100 lg:rounded-lg lg:top-14"></div>
          </li>
          <li className="relative group lg:p-0 p-4">
            <a
              href="#Experience"
              className="cursor-pointer text-2xl hover:text-blue-400 transition-all duration-500"
              onClick={()=>setopen(!open)}
            >
              Experience
            </a>
            <div className="lg:absolute lg:w-full lg:h-1 lg:bg-blue-400 lg:bottom-0 lg:left-0 lg:transform lg:scale-x-0 lg:origin-left lg:transition-transform lg:duration-500 lg:group-hover:scale-x-100 lg:rounded-lg lg:top-14"></div>
          </li>
          <li className="relative group lg:p-0 p-4">
            <a
              href="#Projects"
              className="cursor-pointer text-2xl hover:text-blue-400 transition-all duration-500"
              onClick={()=>setopen(!open)}
            >
              Projects
            </a>
            <div className="lg:absolute lg:w-full lg:h-1 lg:bg-blue-400 lg:bottom-0 lg:left-0 lg:transform lg:scale-x-0 lg:origin-left lg:transition-transform lg:duration-500 lg:group-hover:scale-x-100 lg:rounded-lg lg:top-14"></div>
          </li>
          <li className=" relative group lg:p-0 p-4">
            <a
              href="#Contact"
              className="cursor-pointer text-2xl hover:text-blue-400 transition-all duration-500"
              onClick={()=>setopen(!open)}
            >
              Contact
            </a>
            <div className=" relative group lg:absolute lg:w-full lg:h-1 lg:bg-blue-400 lg:bottom-0 lg:left-0 lg:transform lg:scale-x-0 lg:origin-left lg:transition-transform lg:duration-500 lg:group-hover:scale-x-100 lg:rounded-lg lg:top-14"></div>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Nav;
