import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { RES_URL } from "../utils/url";
import ShimmerRest from "../components/ShimmerRest";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {restaurantLists,setRestaurantsList,setFilteredList,filteredList}=useRestaurantData()
  const handleClick = () => {
    setSearchText("")
    setFilteredList(() =>
      restaurantLists.filter((res) => res.info.avgRating > 4.3)
    );
  };

  return restaurantLists?.length === 0 ? (
    <div className="body">
      <div className="res-container">
        {[0, 1, 2, 3, 4, 5].map((_, index) => (
          <ShimmerRest key={index} />
        ))}
      </div>
    </div>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-bar"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurant or Cuisine"
          />
          <button
            className="search-button"
            onClick={() => {
               const filteredRestaurants = restaurantLists.filter((res) => {
    const name = res.info.name.toLowerCase();
    const cuisines = res.info.cuisines.join(",").toLowerCase();
    const query = searchText.toLowerCase();

    return name.includes(query) || cuisines.includes(query);
  });
              setFilteredList(filteredRestaurants);
            }}
          >
            <FaSearch />
          </button>
        </div>
        <button onClick={handleClick} className="primary-button">
          4.3+ <FaStar />
        </button>
      </div>
      <div className="res-container">
        {filteredList?.map((data) => (
        <Link className="no-text-decor" key={data.info.id} to={`/restaurants/${data.info.id}` }><RestaurantCard  resData={data} /></Link> 
        ))}
        
      </div>
      <div>
        {filteredList?.length===0 && (<>
        <h2 className="no-res-text">No Restaurants Found</h2>
        </>)}
      </div>
    </div>
  );
};

export default Body;
