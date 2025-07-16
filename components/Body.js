import { restaurantData } from "../sampleData/data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantData?.map(data=><RestaurantCard key={data.info.id} resData={data}/>)}
      </div>
    </div>
  );
};
export default Body;
