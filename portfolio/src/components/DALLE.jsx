import React, { useState } from 'react'
import axios from 'axios';

const DALLE = () => {
    const [gptResponse, setGptResponse] = useState([])
    const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: 'POST',
      url: 'https://openai80.p.rapidapi.com/images/generations',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '100fe98584msh3cc3759f9aead09p18070ajsnfd70377b7ae1',
        'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
      },
      data: `{"prompt":"${message}","n":2,"size":"1024x1024"}`
    }).then((response) => {
      console.log(response.data);
      console.log(response.data.data[0].url)
      setGptResponse(response.data.data[0].url)
    }).catch(error => console.error(error));
  }

  return (
    <section className="chat-main-container">
      <article>
      <form>
      <h1>What image would you like to see?</h1>
      <textarea
        defaultValue={message} 
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
       <br />
      <button 
        onClick={handleSubmit}
      >
        Submit
      </button>
      </form>
      </article>
      
      <article>
        <img src={gptResponse} alt="first-image" />
      </article>
    </section>
  )
}

export default DALLE