import { useEffect, useState } from "react";
import RestaurantCard, { withOffersCard } from "../components/RestaurantCard";
import ShimmerRest from "../components/ShimmerRest";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineDisplay from "../components/OfflineDisplay";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { restaurantLists,setFilteredList, filteredList } =
    useRestaurantData();
    console.log(restaurantLists)
  const handleClick = () => {
    setSearchText("");
    setFilteredList(() =>
      restaurantLists.filter((res) => res.info.avgRating > 4.3)
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <>
        <OfflineDisplay />
      </>
    );
    const RestaurantCardWithOffer=withOffersCard(RestaurantCard) // Higher Order Functions
  return restaurantLists?.length === 0 ? (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <div className="flex flex-wrap justify-center gap-4 px-2 mt-6 max-w-6xl">
        {[0, 1, 2, 3, 4, 5].map((_, index) => (
          <ShimmerRest key={index} />
        ))}
      </div>
    </div>
  ) : (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-around gap-4">
        <div className="flex my-2 sm:flex-row items-center gap-2">
          <input
            className="border border-black p-3 rounded-sm w-full sm:w-[300px] md:w-[400px]"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurant or Cuisine"
          />
          <button
            className="p-4 bg-red-500 text-white rounded-sm cursor-pointer"
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
        <div>
          <button
            onClick={handleClick}
            className="p-3 bg-red-500 m-4 text-white rounded-sm cursor-pointer"
          >
           ⭐ Top rated
          </button>
        </div>
      </div>
      <div className={`flex flex-wrap gap-4 px-2 ${
    filteredList?.length === 1||filteredList?.length=== 2 ? "justify-start" : "justify-center"
  }`}>
  {filteredList?.map((data) => (
    <div
      key={data?.info.id}
      className="w-full sm:w-[48%] md:w-[30%] max-w-[320px]"
    >
      <Link to={`/restaurants/${data?.info?.id}`} className="no-underline">
      {
Object.keys(data?.info?.aggregatedDiscountInfoV3 || {}).length === 0

    ? <RestaurantCard resData={data}/>
    : <RestaurantCardWithOffer resData={data} />
}

       
      </Link>
    </div>
  ))}
</div>

      <div>
        {filteredList?.length === 0 && (
          <>
            <h2 className="text-center mx-6 text-red-500">No Restaurants Found</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
