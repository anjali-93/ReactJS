import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return(
    <div>
      <h3>Custom App !!</h3>
    </div>
  )
 
  
}
const reactElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement01 = React.createElement(
  'a',
{href:'https://google.com',target:'_blank'},
  'Click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App/> 
    // reactElement01
  
)
