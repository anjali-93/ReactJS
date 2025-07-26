 import React from "react";
 import ReactDOM from "react-dom/client";
  
//   React Element
// Element in inside the Element 
const elem = <h1>Hello World from React</h1>; 
 const heading =(
 <>
 {elem}
 <h1>Namaste React </h1>
 </>
 ) ;


//  React Functional Component
const Title =() => (
   <h1>Hyy!! This is Title From Another Component</h1>
);

//  Component Composition
const HeadingComponent = () =>(
  <>
  
    <Title />
    {heading} {/* Put an ELement inside the Component */}
    <h1>Namaste React from Functional Component</h1>
  </>
) ;


    //  Get the root Element
     const root = ReactDOM.createRoot(document.getElementById("root"));
    
     //  Render the Functional Component to the root Element
     root.render(<HeadingComponent />);
