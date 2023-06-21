import React from "react";

const Hero = () => {
  return (
    <div id="Hero" className=" min-h-screen p-14 flex">
      <div className="text-center shadow-xl p-10 h-auto w-full rounded-3xl bg-blue-50 ">
        <h1 className="text-5xl py-2 text-blue-400 font-medium md:text-6xl lg:text-7xl">
          Vin Appenzeller
        </h1>
        <h2 className="text-2xl py-2 md:text-3xl lg:text-4xl">Schüler and der IMS Aarau</h2>
        <p className="lg:text-2xl py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto">
          Ich suche ein 1 jahriges Praktikum als Applikationsentwicker für meine Ausbildung an der
          Infomatikmittelschlule Aarau für das Jahr 2024. In diesem Portfoio kann man die 
          wichtigsten Informationen über mich zusammengefasst ansehen. In dem Teil Kontakt sind 
          die Links für mein Github, YouTube und Linkedin sowie für meine E-Mail.
        </p>
      </div>
    </div>
  );
};

export default Hero;
