import { RES_URL } from "./url";
import { useState,useEffect } from "react";
const useRestaurantData=()=>{
 const [restaurantLists, setRestaurantsList] = useState([]);
  const [filteredList,setFilteredList]=useState([])
    const fetchData = async () => {
      const data = await fetch(RES_URL);
      const json = await data.json();
      setRestaurantsList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
   
    useEffect(() => {
      fetchData();
  
    }, []);
    return {restaurantLists,filteredList,setFilteredList,setRestaurantsList}

}
export default useRestaurantData
