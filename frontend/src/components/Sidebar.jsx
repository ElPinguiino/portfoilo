import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { TfiMenu } from 'react-icons/tfi'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggle = () => {
    setShowSidebar(!showSidebar);
  };

  let signature = "Developing Life"
  
  return (
    <>
    {/* <p className="portfolio-signature">{signature}</p> */}
    <p className="dl-sidebar-header">
      <span>
        {signature}
      </span>
      </p>
    <TfiMenu className="sidebar-menu-icon" onClick={handleToggle}/>
    <aside className={`sidebar-closed ${showSidebar ? 'sidebar-open' : ''}`}>
      <ul className="sidebar-ul">
      <li><a className='nav-item' href="#home">Home</a></li>
        <li><a className='nav-item' href="#about">About</a></li>
        <li className='nav-item'><a className='nav-item' href="#services">Services</a></li>
        <li className='nav-item'><a className='nav-item' href="#projects">Projects</a></li>
        <li><a className='nav-item' href="#pricing">Pricing</a></li>
        <li className='nav-item'><a className='nav-item' href="#contact">Contact</a></li>
      </ul>
    </aside>
    </>
  );
}

export default Sidebar;
