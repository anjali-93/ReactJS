import { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Intro from './components/Intro/intro'
import Skills from './components/skills/skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    <Intro/>
    <Skills/>
    </>
  )
}

export default App
