import React from 'react';
import {motion} from "framer-motion";
import Punk from '../assets/flättpunk.png';
import { fadeIn } from './variants';
import Lucky from  '../assets/lucky.png';
import Zoo from '../assets/Zoo.png'

const Projects = () => {
  return (
    <div id='Projects' className='scroll-m-4 min-h-screen flex'>
      <div className=" p-10 h-auto w-full bg-blue-50 dark:bg-slate-800 transition-colors duration-500 ease-in">
      <motion.div
      variants={fadeIn('top', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0}}
      ><h1 className='pt-10 pb-14 text-center text-5xl font-bold text-blue-400'>Projects</h1></motion.div>
       <div className=" container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'> 
          <motion.div
           variants={fadeIn('right', 0.4)}
           initial='hidden'
           whileInView={'show'}
           viewport={{ once: true, amount: 0}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {}
            <div>
              <h2 className=' text-3xl mb-6 tracking-1 uppercase leading-tight text-blue-400 dark:text-zinc-200 transition-colors duration-500 ease-in'>
                My Latest  <br />
              Work.
              </h2>
              <p className='max-w-sm mb-16 dark:text-zinc-400 transition-colors duration-500 ease-in'>
              This is an overview of some of the projects I worked on or created all by myself. Because I'm a student at the IMS, we are working on new projects every month. And some of the projects I made at home are also featured on GitHub. To get to my GitHub, you can either click on the button below or on the GitHub button in the contact section. Not all my projects have been uploaded to GitHub!
              </p>
              <a href="https://github.com/Vinappenzeller" target="_blank">
              <button className="md:hover:scale-110 lg:hover:scale-110 shadow-lg bg-blue-400 hover:bg-blue-500 hover:dark:bg-slate-900 dark:bg-slate-900 dark:bg-opacity-70 dark:text-zinc-200 rounded-full font-medium h-14 px-10 sm:text-sm lg:h-14 lg:px-10 lg:text-base transition-all duration-500 ease-in ">View Projects</button>
              </a>
            </div>
            {}
            <div className='cursor-pointer group relative overflow-hidden border-2 border-black/50 rounded-xl'>
              {}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300'></div>
              {}
              <img className='group-hover:scale-125 transition-all duration-500' src={Punk} alt="" />
              {}
              <div className='absolute -bottom-full lg:left-12 left-5 group-hover:bottom-24 transition-all duration-500 z-10'>
                <span className=' text-md md:text-xl lg:text-2xl text-white'>A website with all kinds of quizzes created by my classmates and me</span>
                </div>
              {}
              <div className='absolute -bottom-full lg:left-12 left-5 group-hover:bottom-14 transition-all duration-700 z-10'>
                <span className=' text-xl md:text-2xl lg:text-3xl text-white'>Flättpunk</span>
              </div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0}}
          className='flex-1 flex flex-col gap-y-10'>
            {}
            <div className='cursor-pointer group relative overflow-hidden border-2 border-black/50 rounded-xl'>
              {}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300'></div>
              {}
              <img className='group-hover:scale-125 transition-all duration-500' src={Lucky} alt="" />
              {}
              <div className='absolute -bottom-full lg:left-12 left-5 group-hover:bottom-24 transition-all duration-500 z-10'>
                <span className='text-md md:text-xl lg:text-2xl text-white'>A website with an complex login system</span>
                </div>
              {}
              <div className='absolute -bottom-full lg:left-12 left-5 group-hover:bottom-14 transition-all duration-700 z-10'>
                <span className='text-xl md:text-2xl lg:text-3xl text-white'>Lucky Flätte</span>
              </div>
            </div>
            {}
            <div className='cursor-pointer group relative overflow-hidden border-2 border-black/50 rounded-xl'>
              {}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300'></div>
              {}
              <img className='group-hover:scale-125 transition-all duration-500' src={Zoo} alt="" />
              {}
              <div className='absolute -bottom-full lg:left-12 left-5 group-hover:bottom-24 transition-all duration-500 z-10'>
                <span className='text-md md:text-xl lg:text-2xl text-white'>A Website for zoo's to monitor and manage their animals</span>
                </div>
              {}
              <div className='absolute -bottom-full lg:left-12 left-5 group-hover:bottom-14 transition-all duration-700 z-10'>
                <span className='text-xl md:text-2xl lg:text-3xl text-white'>Zooinventory</span>
              </div>
            </div>
          </motion.div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Projects;
