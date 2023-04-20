import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { TfiMenu } from 'react-icons/tfi'

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
    <aside className={`sidebar-closed ${showSidebar ? 'sidebar-open' : ''}`}>
      <ul className="sidebar-ul">
        <li><a className='nav-item' href="#about">About</a></li>
        <li className='nav-item'><a className='nav-item' href="#experience">Experience</a></li>
        <li className='nav-item'><a className='nav-item' href="#projects">Projects</a></li>
        <li className='nav-item'><a className='nav-item' href="#contact">Contact</a></li>
        <li className='nav-item'><button className='resume-button'><a id="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button></li>
      </ul>
      {/* <ul>
      <li>
          <details role="list">
            <summary aria-haspopup="listbox" role="button" class="secondary">Theme</summary>
              <ul role="listbox">
                <li><a href="#" data-theme-switcher="auto">Auto</a></li>
                <li><a href="#" data-theme-switcher="light">Light</a></li>
                <li><a href="#" data-theme-switcher="dark">Dark</a></li>
              </ul>
          </details>
        </li>
      </ul> */}
    </aside>
    </>
  );
}

export default Sidebar;
