import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          name="KFC"
          time={32}
          rating={4.4}
          cuisine="Burger, Fries, Nuggets, American"
          url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/12/11/b7fd1423-a54f-41b3-94c4-79a08650d847_e7355e6c-285d-424f-a24f-16bc6906ab95.jpg"
        />
        <RestaurantCard
          name="Sagar Ratna"
          time={38}
          rating={4.7}
          cuisine="Idli, Dosa ,South Indian"
          url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/7/26/30fbd676-705b-4f8f-97b4-35a11ea149c3_a7820718-5b9a-4c21-af00-d99ce8ce4d11.jpeg"
        />
      </div>
    </div>
  );
};
export default Body;
