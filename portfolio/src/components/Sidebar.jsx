import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { TfiMenu } from 'react-icons/tfi'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggle = () => {
    setShowSidebar(!showSidebar);
  };

  let signature = "<Juan J. Aguilera />"
  
  return (
    <>
    {/* <p className="portfolio-signature">{signature}</p> */}
    <TfiMenu className="sidebar-menu-icon" onClick={handleToggle}/>
    <aside className={`sidebar-closed ${showSidebar ? 'sidebar-open' : ''}`}>
      <ul className="sidebar-ul">
        <FaTimes className="sidebar-close-icon" onClick={handleToggle}/>
        <li><a className='nav-item' href="#about">About</a></li>
        <li className='nav-item'><a className='nav-item' href="#experience">Experience</a></li>
        <li className='nav-item'><a className='nav-item' href="#projects">Projects</a></li>
        <li className='nav-item'><a className='nav-item' href="#contact">Contact</a></li>
        <li className='nav-item'><button className='resume-button'><a id="resume-button" className='resume-button' href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button></li>
      </ul>
    </aside>
    </>
  );
}

export default Sidebar;
