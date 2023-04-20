import React from 'react';

const Navbar = () => {
  let signature = "Developing Life"

  return (
    <nav id="navbvar" className='navbar'>
      <p className="signature">
      <span>
        {signature}
      </span>
      </p>
      <ul>
        <li><a className='nav-item' href="#home">Home</a></li>
        <li><a className='nav-item' href="#about">About</a></li>
        <li className='nav-item'><a className='nav-item' href="#services">Services</a></li>
        <h4 className='nav-item'>Developing Life</h4>
        <li className='nav-item'><a className='nav-item' href="#projects">Projects</a></li>
        <li><a className='nav-item' href="#pricing">Pricing</a></li>
        <li className='nav-item'><a className='nav-item' href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
