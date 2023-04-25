import React, { useState } from 'react';
import { FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { TfiMenu } from 'react-icons/tfi'
import ThemeSwitcher from './ThemeSwitcher';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggle = () => {
    setShowSidebar(!showSidebar);
  };

  let signature = "<Juan J. Aguilera />"
  
  return (
    <>
    {/* <p className="portfolio-signature">{signature}</p> */}
    <TfiMenu className="sidebar-menu-icon" onClick={handleToggle}/>
    <strong className="portfolio-sidebar-signature">{signature}</strong>
    <aside className={`sidebar-closed ${showSidebar ? 'sidebar-open' : ''}`}>
      <ul className="sidebar-ul">
        <li><a className='nav-item' href="#about">About</a></li>
        <li className='nav-item'><a className='nav-item' href="#experience">Experience</a></li>
        <li className='nav-item'><a className='nav-item' href="#projects">Projects</a></li>
        <li className='nav-item'><a className='nav-item' href="#contact">Contact</a></li>
        <li className='nav-item'><button className='resume-button'><a id="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button></li>
        <ul>
            <button className="light-mode-button" href="#" data-theme-switcher="light"><FaSun className="light-mode-icon"/> Light</button>
            <button className="dark-mode-button" href="#" data-theme-switcher="dark"><FaMoon className="dark-mode-icon"/> Dark</button>
            {/* <li><a href="#" data-theme-switcher="light"><FaSun className="light-mode-icon"/></a></li>
            <li><a href="#" data-theme-switcher="dark"><FaMoon className="dark-mode-icon"/></a></li> */}
            <ThemeSwitcher />
          </ul>
      </ul>
      
          
    </aside>
    </>
  );
}

export default Sidebar;
