export const EventProps = () => {
    const HandleWelcomeUser = (user) =>{
        alert(`Hey , ${user}`);
    };
    const HandleHover = () =>{
        alert(`Hey! Thanks for Hovering me`);
    }
    return(
        <>

        {/* Child Components call */}
        <WelcomeUser onClick={() => HandleWelcomeUser("Anjali")}
            onMouseEnter={HandleHover}/>


        </>
    )
}

// Child Components Defines:

const WelcomeUser = (props) =>{
    const handleGreeting =(users) =>{
        console.log(`Welcome! ${users} `)
        props.onClick();
    }
    return(
        <>
        <button onClick= {props.onClick}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover me</button>
        <button onClick={() =>handleGreeting("Anjali")}>click me</button>
        
        </>
    )
}