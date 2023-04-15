import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbvar" className='navbar'>
      <ul>
        <li><a className='nav-item' href="#about">About</a></li>
        <li className='nav-item'><a className='nav-item' href="#experience">Experience</a></li>
        <li className='nav-item'><a className='nav-item' href="#projects">Projects</a></li>
        <li className='nav-item'><a className='nav-item' href="#contact">Contact</a></li>
        <li className='nav-item'><button className='resume-button'><a id="resume-button" className='resume-button' href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
