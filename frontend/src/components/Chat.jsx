import React, { useState } from 'react'
import axios from 'axios';

const Chat = () => {

    const [gptResponse, setGptResponse] = useState([])
    const [message, setMessage] = useState("")
    const [ariaState, setAriaState ] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setAriaState(!ariaState);
    await axios({
      method: 'POST',
      url: 'https://openai80.p.rapidapi.com/chat/completions',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '100fe98584msh3cc3759f9aead09p18070ajsnfd70377b7ae1',
        'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
      },
      data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${message}"}]}`
    }).then((response) => {
      console.log(response.data);
      console.log(message)
      console.log(response.data.choices[0].message.content)
      setGptResponse(response.data.choices[0].message.content)
    }).catch(error => console.error(error));
  }

  return (
    <section className="chat-main-container">
      <article className="chat-article-container">
      <form>
      <h1>What is your question?</h1>
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
      <article className="chat-article-container" aria-busy={ariaState}>
        <p>{gptResponse}</p>
      </article>
    </section>
  )
}

export default Chat