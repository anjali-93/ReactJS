import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let [count,setCount]=useState(15)
  // let count=15

  const addValue = () =>{
    //count=count+1;
    if((count+1)<=20)
    setCount(count+1)
  }
  const removeValue =()=>{
    if((count-1)>=0)
    setCount(count-1)
  }
  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value : {count}</h2>

    <button onClick={addValue}>Increase Value</button>
    <br /> <br />
    <button onClick={removeValue}>Decrease Value</button>
      
    </>
  )
}

export default App
