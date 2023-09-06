import React, { useState, useEffect } from 'react';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Hero from './components/Hero';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showButton, setShowButton] = useState(false);
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }

    if (window.pageYOffset === 0) {
      setIsScrolledToTop(true);
    } else {
      setIsScrolledToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const notify = () => {
    toast.info('To switch the Theme Klick on the lightning ⚡', {
      position: "top-right",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: 'unique_notification_id'
      });
  };

  useEffect(() => {
    notify(); 
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="bg-white">
        <div className="min-h-screen">
          <Nav />
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <button
        className={`fixed ${
          showButton
            ? isScrolledToTop
              ? '-top-20 right-[-80px]'
              : 'top-[20%] right-11'
            : '-top-20 right-[-80px]'
        } bg-blue-400 text-white font-bold py-5 px-8 rounded-full transition-transform shadow-lg ${
          showButton ? 'translate-x-0 transition duration-1000' : 'translate-x-full'
        } hover:scale-105 hover:bg-blue-500`}
        onClick={handleClick}
      >
        ⮝
      </button>
    </>
  );
}

export default App;
