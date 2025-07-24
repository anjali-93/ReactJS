 import React from "react";
 import ReactDOM from "react-dom/client";
  
  
 const heading = <h1>Namaste React from JSX</h1>

    console.log(heading); //  React Element is an Object

    //  Get the root Element
     const root = ReactDOM.createRoot(document.getElementById("root"));
    
     //  Render the heading to the root Element
     root.render(heading); //rendering React Element to the DOM
