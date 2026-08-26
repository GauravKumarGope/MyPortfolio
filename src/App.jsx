import { useState } from 'react'
import './App.css';
import Intro from './components/intro/Intro.jsx'
import Hero from './components/hero/Hero.jsx'
import Nav from './components/nav/Nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Hero />
    </>
  )
}

export default App;
