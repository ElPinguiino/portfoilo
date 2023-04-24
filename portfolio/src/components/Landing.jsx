import React from 'react'
import { SiGithub, SiGitlab, SiLinkedin } from 'react-icons/si'

const Landing = () => {
  return (
    <section className="landing-section">
        <p>Hello!</p>
        <p>
            My name is Juan, I am a Software Engineer with a background in IT Support and Administration.
        </p>
        <img src="avatar.png" alt="Project 1" className="img-fluid" />
        <br />
        <a href='https://github.com/ElPinguiino'><SiGithub className='icon-link'/></a>
        <a href='https://www.linkedin.com/in/juan-aguilera-97b945b9/'><SiLinkedin className='icon-link'/></a>
        <a href='https://gitlab.com/ElPinguiino'><SiGitlab className='icon-link'/></a>
    </section>
  )
}

export default Landing