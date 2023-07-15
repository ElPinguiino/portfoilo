import React, { useState } from 'react'
import { SiGithub, SiGitlab, SiLinkedin } from 'react-icons/si'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      // TODO: Send the form data to a backend API or email service
    }
  
    return (
      <>
        <h2 className="section-heading">Contact</h2>
        <section className="contact-section">
      <article className="contact-article">
        <p>Thank you for taking the time to see my portfolio. 
          <br />
          If you want to chat, drop me a line!</p>
        <p>juanjaguilera1@gmail.com</p>
        <a href='https://github.com/ElPinguiino'><SiGithub className='icon-link'/></a>
        <a href='https://www.linkedin.com/in/juan-aguilera-97b945b9/'><SiLinkedin className='icon-link'/></a>
        <a href='https://gitlab.com/ElPinguiino'><SiGitlab className='icon-link'/></a>
      </article>
      <article id="contact" className="contact-article">
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={event => setMessage(event.target.value)} />
        </label>
        <button className="contact-submit-button" type="submit">Submit</button>  
      </form>
      </article>
      </section>
      </>
    );
}

export default Contact