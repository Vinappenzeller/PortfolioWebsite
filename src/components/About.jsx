import React from "react";
import Portrait from "../assets/avatar.png";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import jsico from "../assets/js.png";
import csharpico from "../assets/csharp.png";
import sqlico from "../assets/sql.png";
import htmlico from "../assets/html.png";
import cssico from "../assets/css.png";
import nodejsico from "../assets/nodejs.png";
import reactjsico from "../assets/react.png";
import tailwindico from "../assets/tailwindcss.png";
import nosqlico from "../assets/mongo.png";
import dockerico from "../assets/docker.png";

const About = () => {
  return (
    <div id="About" className=" scroll-m-14 min-h-screen flex">
      <div className=" text-center h-auto w-full bg-blue-50 dark:bg-slate-800 transition-colors duration-500 ease-in ">
        <motion.div
          variants={fadeIn("", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h1 className="pt-10 pb-2 lg:pb-20 text-center text-5xl font-bold text-blue-400">
            About me
          </h1>
        </motion.div>
        <div className="flex lg:flex-row flex-col justify-center gap-5 text-left">
          <div className=" lg:text-justify text-center  h-auto w-auto p-10">
            <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}>
            <h1 className=" text-blue-400 dark:text-zinc-200 transition-colors duration-500 ease-in text-3xl font-bold pb-4">
              Vin Appenzeller
            </h1>

            <p className=" lg:max-w-xl lg:text-lg md:text-lg text-sm pb-2 dark:text-zinc-400 transition-colors duration-500 ease-in">
              I'm a young developer at the IMS in Aarau. I enjoy creating
              different types applications that fit your expectaions.
              Something that i really like about being a software developer is
              always learning and adapting new technologies. In the first
              two years of being a student at IMS I've stumbled
              across alot of different programming languages and technologies
              and there is more to
              come in my third year which I'm currently in. For the fourth year
              of my school i have to
              get an internship as a application developer to complete my
              education. I am patient and
              focused at work, able to work alone as well as in a group.
            </p>
            <h2 className=" text-blue-400 dark:text-zinc-200 transition-colors duration-500 ease-in text-lg font-semibold pb-2">
              Technologies I've worked with
            </h2>
            <div className="flex flex-col gap-0 font-semibold">
              <div className=" lg:justify-normal justify-center flex">
                <img className=" animate-pulse select-none w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={jsico} alt="jsico" />
                <img className=" animate-pulse select-none w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={csharpico} alt="csharpico" />
                <img className=" animate-pulse select-none w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={sqlico} alt="sqlico" />
                <img className=" animate-pulse select-none w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={htmlico} alt="htmlico" />
                <img className=" animate-pulse select-none w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={cssico} alt="cssico" />
              </div>
              <div className=" lg:justify-normal justify-center flex">
              <img className=" animate-pulse select-none w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={nodejsico} alt="nodejsico" />
              <img className=" animate-pulse select-none w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={reactjsico} alt="reactjsico" />
              <img className=" animate-pulse select-none w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={tailwindico} alt="tailwindico" />
              <img className=" animate-pulse select-none w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={nosqlico} alt="nosqlico" />
              <img className=" animate-pulse select-none w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={dockerico} alt="dockerico" />
              </div>
            </div>
          </motion.div>
          </div>
          <motion.div
          className=" lg:pt-16 lg:self-auto self-center"
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}>
            <img
              className="rounded-xl shadow-lg h-80 w-auto"
              src={Portrait}
              alt="Portrait"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
