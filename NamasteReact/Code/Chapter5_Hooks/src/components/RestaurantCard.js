import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    //you can put the {resName, cuisines, rating} in the function parameter itself
    const {resData} = props;
    
    const {cloudinaryImageId,name,avgRating,cuisines} = resData?.info; //destructuring the info object from resData
    return (
        <div className="res-card" style = {{backgroundColor: "#f0f0f0"}}>
            <img src={CDN_URL+ cloudinaryImageId} alt="restaurant"  className="res-logo"/>
            <h3>{name}</h3>
            <h4>Rating :{avgRating}</h4>
            <h4>Cuisines: {cuisines.join(",")}</h4>
           
        </div>
    )
}

export default RestaurantCard;