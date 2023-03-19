import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Landing from './components/Landing'
import About from './components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css"></link>
      <Navbar />
      <Landing name="home"/>
      <About name="about" />
      <Experience name="experience"/>
      <Projects name="projects"/>
      <Contact name="contact"/>
      <Footer />
    </>
  )
}

export default App
