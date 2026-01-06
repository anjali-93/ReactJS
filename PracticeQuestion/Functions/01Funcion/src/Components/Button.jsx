// Question . Create a reusable Button component and use it in multiple places.


function Button(props) {
  return (
    <>
    <h1>Welcome {props.name}</h1>
    <p>This is your E-mail : {props.email}</p>
    <button style = {props.style}>
        {props.children}
    </button>

    


    </>
  );
}

export default Button;
