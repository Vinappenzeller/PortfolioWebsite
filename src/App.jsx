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
  const notify = () => {
    toast.info('To switch the Theme Klick the lightning ⚡', {
      position: "top-center",
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
    const timer = setTimeout(() => {
      notify(); 
    }, 2200);  
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="bg-white">
          <Nav />
          <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
