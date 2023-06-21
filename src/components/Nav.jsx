import React from "react";
import {AiTwotoneThunderbolt} from "react-icons/ai";

const Nav = () => {
  return (
    <div className="p-10 mb-10 flex items-center">
      <h1 className="text-3xl font-bold pr-32">Vin | Portfolio</h1>
      <nav className="text-xl">
        <ul className="flex gap-8">
          <li className="cursor-pointer rounded-lg text-2xl hover:font-semibold transition-all duration-200">
            <a href="#Zeitstrahl" className="">Zetistrahl</a>
          </li>
          <li className="cursor-pointer rounded-lg text-2xl hover:font-semibold transition-all duration-20">
          <a href="#Experience" className="">Erfahrung</a>
          </li>
          <li className="cursor-pointer  rounded-lg text-2xl hover:font-semibold transition-all duration-20">
          <a href="#Projekte" className="">Projekte</a>
          </li>
          <li className="cursor-pointer rounded-lg text-2xl hover:font-semibold transition-all duration-20">
          <a href="#Contact" className="">Kontakt</a>
          </li>
        </ul>
      </nav>
      <AiTwotoneThunderbolt  className=" hover:text-yellow-300 cursor-pointer text-5xl ml-auto transition-all duration-700 "/>
    </div>
  );
};

export default Nav;
