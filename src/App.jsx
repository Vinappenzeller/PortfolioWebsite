import React, { useState } from 'react';
import Zeitstrahl from './components/Zeitstrahl';
import Experience from './components/Experience';
import Projekte from './components/Projekte';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Hero from './components/Hero' ;

function App() {
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <div className="bg-white">
        <div className="min-h-screen">
          <Nav />
          <Hero />
        </div>
        <Zeitstrahl />
        <Experience />
        <Projekte />
        <Contact />
      </div>
      {showButton && (
        <button
          className="fixed top-96 right-11 bg-blue-400 text-white font-bold py-5 px-8 rounded-full transition duration-500 ease-in-out transform translate-x-full hover:translate-x-10"
          onClick={handleClick}
        >
          ^Up
        </button>
      )}
    </>
  );
}

export default App;
