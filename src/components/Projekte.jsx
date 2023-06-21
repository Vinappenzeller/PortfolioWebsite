import React from 'react';
import Lucky from '../../public/lucky.png';
import Punk from '../../public/flättpunk.png';
import { BsGithub, BsYoutube } from "react-icons/bs";

const Projekte = () => {
  return (
    <div id='Projekte' className='min-h-screen p-14 flex'>
      <div className="text-center shadow-xl p-10 h-auto w-full rounded-3xl bg-blue-50">
      <h1 className='pt-10 pb-14 text-center text-5xl font-bold text-blue-400'>Projekte</h1>
        <div className='flex-wrap'>
        <div className='flex gap-2 p-2'>
          <div id='Projekt1' className='bg-white flex-grow relative h-64'>
            <img src={Lucky} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
            <div className="bg-white bg-opacity-50 absolute top-0 left-0 w-full h-full items-center justify-center p-16">
              <p className="text-2xl font-bold text-black">Lucky Flätte</p>
              <p className="text-xl text-black">Eine Webseite auf der man nach dem registrieren und einloggen Slots spielen kann</p>
              <a className='w-auto' href="https://github.com/Kappa-X/LuckyFlaette" target="_blank">
              <BsGithub className=' text-5xl ml-5'/>
              </a>
              <a href="https://www.youtube.com/watch?v=RWmCtzmlfiM" target="_blank">
              <BsYoutube className=' text-5xl ml-5'/>
              </a>
            </div>
          </div>
          <div id='Projekt2' className='bg-white flex-grow relative h-64'>
            <img src={Punk} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
            <div className="bg-white bg-opacity-50 absolute top-0 left-0 w-full h-full items-center justify-center p-16">
              <p className="text-2xl font-bold text-black">Flättpunk</p>
              <p className="text-xl text-black pb-7">Eine Webseite auf welcher man verschiedene Spiele spielen kann</p>
              <a href="https://github.com/Vinappenzeller/Flaettpunk" target="_blank">
              <BsGithub className=' text-5xl ml-5'/>
              </a>
              <a href="https://www.youtube.com/watch?v=sw3240penwY" target="_blank">
              <BsYoutube className=' text-5xl ml-5'/>
              </a>
            </div>
          </div>
          </div>
          <div className='flex gap-2'>
          <div id='Projekt2' className='bg-white flex-grow relative h-64'>
            <img src={Punk} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
            <div className="bg-white bg-opacity-50 absolute top-0 left-0 w-full h-full items-center justify-center p-16">
              <p className="text-2xl font-bold text-black">Coming soon...</p>
            </div>
          </div>
          <div id='Projekt2' className='bg-white flex-grow relative h-64'>
            <img src={Punk} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
            <div className="bg-white bg-opacity-50 absolute top-0 left-0 w-full h-full items-center justify-center p-16">
              <p className="text-2xl font-bold text-black">Coming soon...</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projekte;
