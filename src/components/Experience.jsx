import React from "react";
import image1 from '../assets/javascript.png';
import image2 from '../assets/Csharpo.png';
import image3 from '../assets/mysql.png';
import image4 from '../assets/docker.png';
import image5 from '../assets/vmware.png';
import image6 from '../assets/tailwindcss.png';
import image7 from '../assets/react.png';
import image8 from '../assets/html.png';
import image9 from '../assets/css.png';
import image10 from '../assets/mongodb.png';
import image11 from '../assets/aws.png';
import image12 from '../assets/nodejs.png';

const Experience = () => {
  return (
    <div id="Experience" className=" min-h-screen flex">
      <div className=" text-center h-auto w-full rounded-3xl bg-blue-50 ">
        <h1 className='pt-10 pb-28 text-center text-5xl font-bold text-blue-400'>About</h1>
        <div className="flex gap-10 pl-44 pr-44 flex-wrap justify-center">
        <div id="JavaScript" className=" bg-white p-5 h-34 w-34 rounded-lg ">
        <img src={image1} className="w-28 h-28" />
        <p className="font-bold">JavaScript</p>
        </div>
        <div id="C#" className=" bg-white p-5 h-34 w-34 rounded-lg">
        <img  src={image2} className="w-28 h-28"/>
        <p className="font-bold">C#</p>
        </div>
        <div id="MySQL" className=" bg-white p-5 h-34 w-34 rounded-lg">
        <img src={image3} className="w-28 h-28"/>
        <p className="font-bold">MySQL</p>
        </div>
        <div id="Docker" className=" bg-white p-5 h-34 w-34 rounded-lg">
        <img src={image4} className="w-28 h-28"/>
        <p className="font-bold">Docker</p>
        </div>
        <div id="VMWare" className=" bg-white p-5 h-34 w-34 rounded-lg">
        <img src={image5} className="w-28 h-28"/>
        <p className="font-bold">VMWare</p>
        </div>
        <div id="TailwindCSS" className=" bg-white p-5 h-34 w-34 rounded-lg">
        <img src={image6} className="w-28 h-28"/>
        <p className="font-bold">TailwindCSS</p>
        </div>
        <div id="React" className=" bg-white p-5 h-34 w-34 rounded-lg">
        <img src={image7} className="w-28 h-28"/>
        <p className="font-bold">React</p>
        </div>
        <div id="HTML" className=" bg-white p-5 h-34 w-34 rounded-lg">
        <img src={image8} className="w-28 h-28"/>
        <p className="font-bold">HTML</p>
        </div>
        <div id="CSS" className=" bg-white p-5 h-34 w-34 rounded-lg">
        <img src={image9} className="w-28 h-28"/>
        <p className="font-bold">CSS</p>
        </div>
        <div id="MongoDB" className=" bg-white p-5 h-34 w-34 rounded-lg">
        <img src={image10} className="w-28 h-28"/>
        <p className="font-bold">MongoDB</p>
        </div>
        <div id="AWS" className=" bg-white p-5 h-34 w-34 rounded-lg">
        <img src={image11} className="w-28 h-28"/>
        <p className="font-bold">AWS</p>
        </div>
        <div id="NodeJS" className=" bg-white p-5 h-34 w-34 rounded-lg">
        <img src={image12} className="w-28 h-28"/>
        <p className="font-bold">NodeJS</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
