import React from 'react'
import Chat from '../components/Chat'
import DALLE from '../components/DALLE'

const Playground = () => {
  return (
    <section class="playground-container">
        <Chat />
        <DALLE />
    </section>
  )
}

export default Playground