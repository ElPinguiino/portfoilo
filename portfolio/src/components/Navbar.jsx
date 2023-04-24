import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import { SiSaturn } from 'react-icons/si';
import { TbSunHigh } from 'react-icons/tb';

const Navbar = () => {
  let signature = "<Juan J. Aguilera />"

  return (
    <nav id="navbvar" className='navbar'>
      <ul className="navbar-site-name">
        <li><strong>{signature}</strong></li>
      </ul>
      <ul>
        <li><a className='nav-item' href="#about">About</a></li>
        <li className='nav-item'><a className='nav-item' href="#experience">Experience</a></li>
        <li className='nav-item'><a className='nav-item' href="#projects">Projects</a></li>
        <li className='nav-item'><a className='nav-item' href="#contact">Contact</a></li>
      </ul>
      <ul>
        <li>
          <details role="list">
            <summary aria-haspopup="listbox" role="button" class="contrast"><TbSunHigh /></summary>
              <ul role="listbox">
                <li><a href="#" data-theme-switcher="light">Light</a></li>
                <li><a href="#" data-theme-switcher="dark">Dark</a></li>
              </ul>
          </details>
          <ThemeSwitcher />
        </li>
        <li className='nav-item'><button className='resume-button'><a id="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
