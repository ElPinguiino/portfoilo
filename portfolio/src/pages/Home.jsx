import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { FaHandPointUp } from 'react-icons/fa'

const Home = () => {
    const [showButton, setShowButton] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        console.log('does this work?')
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll); // Add a scroll listener
      return () => window.removeEventListener('scroll', handleScroll); // Remove the scroll listener on component unmount
    }, []);
  
    const handleScroll = () => {
      if (window.pageYOffset > 500) { // Change 500 to the desired scroll distance from the top of the page
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  
    const handleClick = () => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    };

  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css"></link>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/> 
      <Landing name="home"/>
      <About name="about" />
      <Experience name="experience"/>
      <Projects name="projects"/>
      <Contact name="contact"/>
      <button
      className={`top-button ${showButton ? 'show' : ''}`}
      onClick={handleClick}
    >
      <FaHandPointUp className="top-button-icon"/>
    </button>
      <Footer />
    </>
  )
}

export default Home