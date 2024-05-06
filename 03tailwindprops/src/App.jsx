import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"anjali",
    age:21
  };

  return (
    <>
     <h1 className='bg-green-400 text-black p-7 rounded-xl mb-6'>Tailwind CSS</h1>
    <Card username="Anjali Saxena" btnText="Click me"/>
    <Card username="Tannu Saxena" btnText="Visit me"/>
    </>
  )
}

export default App
