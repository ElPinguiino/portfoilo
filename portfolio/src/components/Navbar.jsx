import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  let signature = "<Juan J. Aguilera />"

  return (
    <nav id="navbvar" className='navbar'>
      {/* <p>{signature}</p> */}
      <p className="signature">
      <span>
        {signature}
      </span>
      </p>
      <ul>
        <li><a className='nav-item' href="#about">About</a></li>
        <li className='nav-item'><a className='nav-item' href="#experience">Experience</a></li>
        <li className='nav-item'><a className='nav-item' href="#projects">Projects</a></li>
        <li className='nav-item'><a className='nav-item' href="#contact">Contact</a></li>
        <li className='nav-item'><button className='resume-button'><a id="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button></li>
      </ul>
      <ul>
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
      </ul>
    </nav>
  );
};

export default Navbar;
