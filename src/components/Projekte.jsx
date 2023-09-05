import React from 'react';
import {motion} from "framer-motion";
import Punk from '../assets/flättpunk.png';
import { fadeIn } from './variants';
import Lucky from  '../assets/lucky.png';
import Zoo from '../assets/Zoo.png'

const Projekte = () => {
  return (
    <div id='Projekte' className=' min-h-screen flex'>
      <div className=" p-10 h-auto w-full bg-blue-50">
      <motion.div
      variants={fadeIn('top', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.3}}
      ><h1 className='pt-10 pb-14 text-center text-5xl font-bold text-blue-400'>Projects</h1></motion.div>
       <div className=" container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'> 
          <motion.div
           variants={fadeIn('right', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{ once: true, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {}
            <div>
              <h2 className=' text-3xl mb-6 tracking-1 uppercase leading-tight text-violet-900'>
                My Latest  <br />
              Work.
              </h2>
              <p className='max-w-sm mb-16'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sdfsfsfsdfssfddddddddddddddddd
              sed diam nonumy eirmod tempor invidunt ut labore et dolore 
              magna aliquyam erat, sed diam voluptua. 
              sdfsfsfsdfssfddddddddddddddddds
              dddddddddddddddddddffffffff
              dddddddddddddddddddffffffff
              dddddddddddddddddddd 
              </p>
              <a href="https://github.com/Vinappenzeller" target="_blank">
              <button className="bg-blue-500 hover:bg-blue-600 rounded-full font-medium sm:h-14 sm:px-6 sm:text-sm lg:h-14 lg:px-10 lg:text-base">View all Projects</button>
              </a>
            </div>
            {}
            <div className='cursor-pointer group relative overflow-hidden border-2 border-black/50 rounded-xl'>
              {}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {}
              <img className='group-hover:scale-125 transition-all duration-500' src={Punk} alt="" />
              {}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className=' text-2xl text-white'>A website with all kinds of quizzes created by my classmates and me</span>
                </div>
              {}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Flättpunk</span>
              </div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-10'>
            {}
            <div className='cursor-pointer group relative overflow-hidden border-2 border-black/50 rounded-xl'>
              {}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {}
              <img className='group-hover:scale-125 transition-all duration-500' src={Lucky} alt="" />
              {}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className=' text-2xl text-white'>A website with an complex login system</span>
                </div>
              {}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Lucky Flätte</span>
              </div>
            </div>
            {}
            <div className='cursor-pointer group relative overflow-hidden border-2 border-black/50 rounded-xl'>
              {}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {}
              <img className='group-hover:scale-125 transition-all duration-500' src={Zoo} alt="" />
              {}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className=' text-2xl text-white'>A Website for zoo's to monitor and manage their animals</span>
                </div>
              {}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Zooinventory</span>
              </div>
            </div>
          </motion.div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Projekte;
