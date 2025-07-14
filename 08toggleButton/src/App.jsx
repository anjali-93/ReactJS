import { useState } from 'react'
import { ToggleSwitch } from './ToggleSwitch/ToggleSwitch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ToggleSwitch/>
    </>
  )
}

export default App
