import React, { useEffect, useState } from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { fadeIn } from "./variants";
import { motion } from "framer-motion";
import "../index.css";

let theme2 = "dark";

const Nav = () => {
  let [open, setopen] = useState(false);
  let [color, setColor] = useState(false);
  const [theme, setTheme] = useState("dark");
  const element = document.documentElement;

  const Gettheme = () => {
    if (theme === "dark") {
      theme2 = "light";
      setTheme(theme2);
      setColor(!color);
    } else if (theme === "light") {
      theme2 = "dark";
      setTheme(theme2);
      setColor(!color);
    }
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        break;

      case "light":
        element.classList.remove("dark");
        break;

      default:
        break;
    }
  });
  return (
    <motion.div
      id="nav"
      className="p-5 lg:flex items-center sticky top-0 lg:bg-blue-200  bg-blue-100 lg:bg-opacity-40 z-20 dark:bg-slate-900 lg:dark:bg-opacity-90 transition-colors duration-500 ease-in"
      variants={fadeIn("right", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0 }}
    >
      <h1 className="text-3xl font-bold lg:pb-0 pr-32 dark:text-zinc-200">
        Vin | Portfolio
      </h1>
      <nav className="text-xl">
        <div
          onClick={Gettheme}
          className="lg:p-0 p-4 rounded-xl lg:w-auto lg:h-auto cursor-pointer text-5xl transition-all duration-1000 absolute lg:top-4 top-0 right-16 text-black"
        >
          <ion-icon
            style={color ? { color: "black" } : { color: "white" }}
            name={color ? "sunny-outline" : "moon-outline"}
          ></ion-icon>
        </div>
        <div
          onClick={() => setopen(!open)}
          className=" text-4xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          <ion-icon
            style={color ? { color: "black" } : { color: "white" }}
            name={open ? "close" : "menu"}
          ></ion-icon>
        </div>
        <ul
          className={` left-0 w-full bg-blue-100 dark:bg-slate-900 lg:dark:bg-none dark:lg:bg-opacity-0 lg:bg-none lg:bg-opacity-0 lg:pb-0 pb-12 lg:flex lg:gap-8 lg:static absolute lg:z-0 -z-10 transition-all duration-500 ease-in ${
            open ? "top-16 opacity-100" : "top-[-490px]"
          } lg:opacity-100 opacity-0`}
        >
          <li className="relative group lg:p-0 p-4">
            <a
              href="#"
              className="dark:text-zinc-200 cursor-pointer text-2xl hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-500"
              onClick={() => setopen(!open)}
            >
              Home
            </a>
            <div className="lg:absolute lg:w-full lg:h-1 lg:bg-blue-400 lg:bottom-0 lg:left-0 lg:transform lg:scale-x-0 lg:origin-left lg:transition-transform lg:duration-500 lg:group-hover:scale-x-100 lg:rounded-lg lg:top-12"></div>
          </li>
          <li className="relative group lg:p-0 p-4">
            <a
              href="#About"
              className="dark:text-zinc-200 cursor-pointer text-2xl hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-500"
              onClick={() => setopen(!open)}
            >
              About
            </a>
            <div className="lg:absolute lg:w-full lg:h-1 lg:bg-blue-400 lg:bottom-0 lg:left-0 lg:transform lg:scale-x-0 lg:origin-left lg:transition-transform lg:duration-500 lg:group-hover:scale-x-100 lg:rounded-lg lg:top-12"></div>
          </li>
          <li className="relative group lg:p-0 p-4">
            <a
              href="#Experience"
              className="dark:text-zinc-200 cursor-pointer text-2xl hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-500"
              onClick={() => setopen(!open)}
            >
              Experience
            </a>
            <div className="lg:absolute lg:w-full lg:h-1 lg:bg-blue-400 lg:bottom-0 lg:left-0 lg:transform lg:scale-x-0 lg:origin-left lg:transition-transform lg:duration-500 lg:group-hover:scale-x-100 lg:rounded-lg lg:top-12"></div>
          </li>
          <li className="relative group lg:p-0 p-4">
            <a
              href="#Projects"
              className="dark:text-zinc-200 cursor-pointer text-2xl hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-500"
              onClick={() => setopen(!open)}
            >
              Projects
            </a>
            <div className="lg:absolute lg:w-full lg:h-1 lg:bg-blue-400 lg:bottom-0 lg:left-0 lg:transform lg:scale-x-0 lg:origin-left lg:transition-transform lg:duration-500 lg:group-hover:scale-x-100 lg:rounded-lg lg:top-12"></div>
          </li>
          <li className=" relative group lg:p-0 p-4">
            <a
              href="#Contact"
              className="dark:text-zinc-200 cursor-pointer text-2xl hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-500"
              onClick={() => setopen(!open)}
            >
              Contact
            </a>
            <div className=" relative group lg:absolute lg:w-full lg:h-1 lg:bg-blue-400 lg:bottom-0 lg:left-0 lg:transform lg:scale-x-0 lg:origin-left lg:transition-transform lg:duration-500 lg:group-hover:scale-x-100 lg:rounded-lg lg:top-12"></div>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Nav;
