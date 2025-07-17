
import { useState } from "react";
import { restaurantData } from "../utils/data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantLists,setRestaurantsList]=useState(restaurantData)
const handleClick=()=>{
  setRestaurantsList(()=>restaurantLists.filter(res=>res.info.avgRating>4.5))
}
  return (
    <div className="body">
      <div className="filter"><button onClick={handleClick} className="primary-button">Top Rated Restaurants</button></div>
      <div className="res-container">
        {restaurantLists?.map(data=><RestaurantCard key={data.info.id} resData={data}/>)}
      </div>
    </div>
  );
};
export default Body;
