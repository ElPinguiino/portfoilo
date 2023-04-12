import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav id="navbvar" className='navbar'>
      
      <ul>
      {/* <i><a className="site-logo" href="/">Juan J. Aguilera</a></i> */}
        <li><a className='nav-item' href="#about">About</a></li>
        <li className='nav-item'><a className='nav-item' href="#experience">Experience</a></li>
        <li className='nav-item'><a className='nav-item' href="#projects">Projects</a></li>
        <li className='nav-item'><a className='nav-item' href="#contact">Contact</a></li>
        
        <li className='nav-item'><button id="resume-button" className='resume-button' href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
