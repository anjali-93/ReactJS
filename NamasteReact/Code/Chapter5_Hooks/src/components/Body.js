import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState(resObj.restaurants);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"onClick={() =>{
                    const filterList = ListOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.5);
                    setListOfRestaurants(filterList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-containner">
                {/* <RestaurantCard resData={resObj.restaurants[0]}/> */}

                {ListOfRestaurants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                })}
                         
            </div>
        </div>
    )
}

export default Body;