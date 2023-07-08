import React from 'react'
import { SiGithub, SiGitlab, SiLinkedin } from 'react-icons/si'

const Landing = () => {
  return (
    <section className="landing-section">
        <p>Hello!</p>
        <p>
            My name is Juan, welcome to my online portfolio! Take a look around and let me know what you think.
        </p>
        <img src="jja.png" alt="Project 1" className="img-fluid avatar-image" />
        <br />
        <a href='https://github.com/ElPinguiino'><SiGithub className='icon-link'/></a>
        <a href='https://www.linkedin.com/in/juan-aguilera-97b945b9/'><SiLinkedin className='icon-link'/></a>
        <a href='https://gitlab.com/ElPinguiino'><SiGitlab className='icon-link'/></a>
    </section>
  )
}

export default Landing