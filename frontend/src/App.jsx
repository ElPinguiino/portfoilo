import { useState } from 'react'

import './App.css'

import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Playground from './pages/Playground'


function App() {
  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css"></link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ai-playground" element={<Playground />} />
    </Routes>
    </>
  )
}

export default App