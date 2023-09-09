import React from "react";
import Portrait from "../assets/avatar.gif";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const About = () => {
  return (
    <div id="About" className=" min-h-screen flex">
      <div className=" text-center h-auto w-full bg-blue-50 ">
        <motion.div
          variants={fadeIn("", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h1 className="pt-10 pb-28 text-center text-5xl font-bold text-blue-400">
            About me
          </h1>
        </motion.div>
        <div className="flex justify-center gap-5 text-left">
          <div className="  h-auto w-auto p-10">
            <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}>
            <h1 className=" text-blue-400 text-3xl font-bold pb-4">
              Vin Appenzeller
            </h1>

            <p className="text-lg pb-2">
              I'm a young Developer at the IMS in Aarau. <br /> I enjoy creating
              different types Applikations that fit your expectaions. <br />
              Something that i really like about being a software developer is
              always learning and <br /> adapting new technologies. In the first
              two years of being a student at IMS I've stubled <br />
              across alot of different programming languages and technologies
              and there is more to <br />
              come in my third year which I'm currently in. For the fourth year
              of my school i have to <br />
              get an internship as a applikation developer to complete my
              education. I am patient and <br />
              focused at work, able to work alone as well as in a group
            </p>
            <h2 className=" text-blue-400 text-lg font-semibold pb-2">
              Technologies I've worked with
            </h2>
            <div className="flex gap-10 pl-5 font-semibold">
              <div>
                <ul className=" list-disc">
                  <li>JavaScript</li>
                  <li>C#</li>
                  <li>SQL</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div>
                <ul className=" list-disc">
                  <li>NodeJS</li>
                  <li>ReactJS</li>
                  <li>Tailwindcss</li>
                  <li>NoSQL</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
          </motion.div>
          </div>
          <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}>
            <img
              className="rounded-xl shadow-lg"
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
