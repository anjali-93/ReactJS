import React from 'react'
import { DerivedState } from './components/Hooks/DerivedState'
// import { EventProps } from './components/EventProps'
// import NetflixSeries from './components/NetflixSeries'
// import "./components/Netflix.css";

// you can import the named-export by using {} brackets

function App() {
  return(
   <section className='container'>
    <h1 className='card-heading'>List of best Netflix Series</h1>
   {/* <NetflixSeries/> */}
  <DerivedState/>
   {/* <EventProps/> */}
   {/* <State/> */}
   </section>
  
   
  )
  
}


export default App
