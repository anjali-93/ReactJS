import React from "react";
import ReactDOM from "react-dom/client";



const Header =() =>{
    return (
        <div className="header">
            <div className="logo-containner">
                <img className="logo" src="https://thumbs.dreamstime.com/b/foodie-chef-logo-graphic-20100575.jpg" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>   
                
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    //you can put the {resName, cuisines, rating} in the function parameter itself
    const {resName, cuisines, rating} = props; 
    return (
        <div className="res-card" style = {{backgroundColor: "#f0f0f0"}}>
            <img src="https://wallpapers.com/images/hd/delicious-chicken-biryani-lvt0vzn0ru95pezx.jpg" alt="restaurant"  className="res-logo"/>
            <h3>{props.resName}</h3>
            <h4>Rating :{props.rating}</h4>
            <h4>Cuisines: {props.cuisines}</h4>
           
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-containner">
                <RestaurantCard resName = "Meghana Foods" cuisines = "Biryani ,Indian" rating = "4.4"/>
                <RestaurantCard resName = "KFC" cuisines = "Burger , Fries" rating = "4.5"/>            
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);