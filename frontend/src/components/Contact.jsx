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
        <div className="contact-container">
      <article className="contact-article">
        <h6>juanaguilera@developinglife.tech</h6>
      </article>
      <article id="contact" className="contact-article">
      <form>
        <div class="grid">
          <label htmlFor="firstname">
            First name
            <input type="text" id="firstname" name="firstname" placeholder="First name" required></input>
          </label>
          <label htmlFor="lastname">
          Last name
            <input type="text" id="lastname" name="lastname" placeholder="Last name" required></input>
          </label>
        </div>
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="Email address" required></input>
        <label htmlFor="email">Phone Number</label>
        <input type="number" id="number" name="number" placeholder="123-456-7890" required></input>
        <small>I will be in contact ASAP!</small>
      <button type="submit">Submit</button>
      </form>
      </article>
      </div>
      </>
    );
}

export default Contact