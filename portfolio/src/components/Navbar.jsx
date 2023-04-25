import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import { SiSaturn } from 'react-icons/si';
import { TbSunHigh } from 'react-icons/tb';
import { FaMoon, FaRegMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  let signature = "<Juan J. Aguilera />"

  return (
    <nav id="navbvar" className='navbar'>
      <ul>
        <li><strong className="portfolio-signature">{signature}</strong></li>
      </ul>
      <ul>
        <li><a className='nav-item' href="#about">About</a></li>
        <li className='nav-item'><a className='nav-item' href="#experience">Experience</a></li>
        <li className='nav-item'><a className='nav-item' href="#projects">Projects</a></li>
        <li className='nav-item'><a className='nav-item' href="#contact">Contact</a></li>
      </ul>
      <ul>
      <li className='nav-item'><button className='resume-button'><a id="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button></li>
        <li>
          {/* <details role="list">
            <summary aria-haspopup="listbox" role="button" class="contrast"><TbSunHigh /></summary>
              <ul role="listbox">
                
              </ul>
          </details> */}
          <ul>
            <button className="light-mode-button" href="#" data-theme-switcher="light"><FaSun className="light-mode-icon"/></button>
            <button className="dark-mode-button" href="#" data-theme-switcher="dark"><FaMoon className="dark-mode-icon"/></button>
            {/* <li><a href="#" data-theme-switcher="light"><FaSun className="light-mode-icon"/></a></li>
            <li><a href="#" data-theme-switcher="dark"><FaMoon className="dark-mode-icon"/></a></li> */}
          </ul>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
