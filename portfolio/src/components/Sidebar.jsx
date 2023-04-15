import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className="sidebar" isOpen={isOpen} onClick={toggle}>
      <ul className="sidebar-ul">
        <i onClick={toggle}><FaTimes /></i>
        <li><a className='nav-item' href="#about">About</a></li>
        <li className='nav-item'><a className='nav-item' href="#experience">Experience</a></li>
        <li className='nav-item'><a className='nav-item' href="#projects">Projects</a></li>
        <li className='nav-item'><a className='nav-item' href="#contact">Contact</a></li>
        <li className='nav-item'><button id="resume-button" className='resume-button' href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</button></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
