import Button from './Components/Button'
import Children  from './Components/Children'


function App() {

  return (
    <>
 
     <Children>
        <h2>User Profile</h2>
        <p>Name: Anjali</p>
        <p>Role: Frontend Developer</p>
      </Children>
      <Button style ={{backgroundColor:'blue' , color:'white'}} name = 'Tanya ' email ='tanya@gmail.com'>
        Click Me!
      </Button>
      <br />
      <Button style ={{backgroundColor:'yellow' , color:'green'}} 
      name = 'Anjali ' email ='anjali@gmail.com'>Submit</Button>

  
    </>
  )
}

export default App
