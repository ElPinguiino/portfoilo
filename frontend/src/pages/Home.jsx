import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Pricing from '../components/Pricing'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        console.log('does this work?')
    };

  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css"></link>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/> 
      <Landing name="home"/>
      <About name="about" />
      <Projects name="projects"/>
      <Pricing name="pricing" />
      <Contact name="contact"/>
      <Footer />
    </>
  )
}

export default Home