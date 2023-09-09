import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import { useInView } from 'react-intersection-observer';

const TimelineElement = ({ year, content, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation wird nur einmal ausgelöst
    threshold: 0, // Element wird animiert, wenn es zu mindestens 20% sichtbar ist
  });

var Class = "";
const Class1 = "bg-white dark:bg-slate-900 lg:dark:bg-opacity-90 shadow-md shadow rounded-3xl m-4 p-2 h-28 w-80 lg:mb-44 lg:p-2 transition-colors duration-500 ease-in";
const Class2 = "bg-white dark:bg-slate-900 lg:dark:bg-opacity-90 shadow-md shadow rounded-3xl m-4 p-2 h-28 w-80 lg:mt-36 lg:p-3 transition-colors duration-500 ease-in";
const Class3 = "bg-white dark:bg-slate-900 lg:dark:bg-opacity-90 shadow-md shadow rounded-3xl m-4 p-2 h-28 w-80 lg:p-3 transition-colors duration-500 ease-in"
const Class4 = "bg-white dark:bg-slate-900 lg:dark:bg-opacity-90 shadow-md shadow rounded-3xl m-4 p-2 h-28 w-80 lg:mt-44 lg:p-3 transition-colors duration-500 ease-in"

if(id == 1){
  Class = Class1;
}
else if(id == 2){
  Class = Class2;
}
else if(id == 3){
  Class = Class3;
}
else if(id ==4 ){
  Class = Class4;
}

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 130 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 140 }}
      transition={{ duration: 1.5 }}

      className={Class}
    >
      <h1 className="text-2xl font-bold dark:text-zinc-200 transition-colors duration-500 ease-in">{year}</h1>
      <p className="text-lg font-medium text-gray-800 dark:text-zinc-400 transition-colors duration-500 ease-in">{content}</p>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div id='Experience' className=' scroll-m-14 min-h-screen flex'>
      <div className=" p-10 h-auto w-full bg-blue-50 dark:bg-slate-800 transition-colors duration-500 ease-in ">
        <motion.div
        variants={fadeIn('top', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0}}><h1 className="text-center text-5xl font-bold text-blue-400">Experience</h1></motion.div>
        <div id='Timeline' className='flex flex-col lg:flex-row lg:gap-1 pt-5 lg:justify-center'>
          <div className='lg:flex lg:flex-col lg:mt-16 lg:self-auto self-center '>
            <TimelineElement year="2012" content="Primary School, Hermetschwil-Staffeln" id={1} />
            <TimelineElement year="2018" content="High School, Seengen" id={3} />
          </div>
          <div className='lg:bg-black dark:lg:bg-blue-400 lg:w-2 lg:rounded-lg lg:shadow-md transition-colors duration-500 ease-in'></div>
          <div className='lg:flex lg:flex-col lg:mt-16 lg:self-auto self-center '>
            <TimelineElement year="2016" content="Primary School, Hallwil" id={2} />
            <TimelineElement year="2021" content="IMS, Altekanti Aarau and BBBaden" id={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;