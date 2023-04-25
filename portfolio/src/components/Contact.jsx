import React, { useState } from 'react'

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
        <h6>juanjaguilera1@gmail.com</h6>
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