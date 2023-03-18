import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav id="navbvar">
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><button id="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
