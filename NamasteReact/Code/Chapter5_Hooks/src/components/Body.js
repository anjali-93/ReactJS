import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-containner">
                {/* <RestaurantCard resData={resObj.restaurants[0]}/> */}

                {resObj.restaurants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                })}
                         
            </div>
        </div>
    )
}

export default Body;