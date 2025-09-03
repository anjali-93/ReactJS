import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Greet = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

   const handleGreet = () => {
    setShow(true);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* this is when you don't have any button to submit */}
      {/* {name && <h1>Hello, {name}!</h1>} */}

      <button onClick={handleGreet}>Message</button>
      {show && <h1>Hello, {name}!</h1>}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greet />);
