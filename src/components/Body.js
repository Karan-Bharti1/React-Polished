import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { RES_URL } from "../utils/url";

const Body = () => {
  const [restaurantLists, setRestaurantsList] = useState([]);
  const handleClick = () => {
    setRestaurantsList(() =>
      restaurantLists.filter((res) => res.info.avgRating > 4.5)
    );
  };
  const fetchData = async() => {
    const data =await  fetch(
      RES_URL
    )
      const json=await data.json()
      console.log(json.data?.cards)
    console.log (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  useEffect(() => {fetchData()
  console.log(restaurantLists)
  }, []);
  return (
    <div className="body">
      <div className="filter">
        <button onClick={handleClick} className="primary-button">
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantLists?.map((data) => (
          <RestaurantCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
