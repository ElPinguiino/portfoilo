import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
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
      <Footer />
    </>
  )
}

export default Home