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
const Class1 = "bg-white shadow-md shadow rounded-3xl h-28 w-80 mb-44 p-2";
const Class2 = "bg-white shadow-md shadow rounded-3xl h-28 w-80 mt-36 p-3";
const Class3 = "bg-white shadow-md shadow rounded-3xl h-28 w-80 p-3"
const Class4 = "bg-white shadow-md shadow rounded-3xl h-28 w-80 mt-44 p-3"

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
      <h1 className="text-2xl font-bold">{year}</h1>
      <p className="text-lg font-medium text-gray-800">{content}</p>
    </motion.div>
  );
};

const Zeitstrahl = () => {
  return (
    <div id='Zeitstrahl' className='min-h-screen flex'>
      <div className=" p-10 h-auto w-full bg-blue-50 ">
        <motion.div
        variants={fadeIn('top', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.3}}><h1 className="text-center text-5xl font-bold text-blue-400">Timeline</h1></motion.div>
        <div id='Timeline' className='flex flex-row gap-1 pt-5 justify-center'>
          <div className='flex flex-col mt-16'>
            <TimelineElement year="2012" content="Primarschule, Hermetschwil-Staffeln" id={1} />
            <TimelineElement year="2018" content="Bezirkschule, Seengen" id={3} />
          </div>
          <div className='bg-black w-2 rounded-lg shadow-md'></div>
          <div className='flex flex-col mt-16'>
            <TimelineElement year="2016" content="Primarschule, Hallwil" id={2} />
            <TimelineElement year="2021" content="Informatikmittelschule, Altekanti Aarau und BBBaden" id={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zeitstrahl;