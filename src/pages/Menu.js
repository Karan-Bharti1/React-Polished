import React from "react";
import { useParams } from "react-router-dom";
import ShimmerMenu from "../components/ShimmerMenu";
import { CDN_URL, PLACEHOLDER_URL } from "../utils/url";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";

function Menu() {
  const { restaurantId } = useParams();
  const resInfo = useRestaurantMenu(restaurantId);

  if (resInfo === null) return <ShimmerMenu />;

  const { name, avgRating, sla, costForTwoMessage, cuisines, availability } =
    resInfo[2]?.card?.card?.info || {};
  const { cards } = resInfo[5]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8 py-6 max-w-6xl">
    
      <div className="p-4 sm:p-6 shadow-md my-4 rounded-xl bg-white">
        <div className="flex justify-between flex-wrap gap-2 items-center">
          <h1 className="text-xl sm:text-2xl font-bold">{name}</h1>
          <h2 className="text-base font-bold text-green-600">⭐ {avgRating} </h2>
        </div>

        <div className="flex justify-between flex-wrap gap-2 my-2 text-sm sm:text-base">
          <p>
            🍽️ Cuisines: <strong>{cuisines?.join(", ") || "N/A"}</strong>
          </p>
          <p>
            ⌛ Next Close Time:{" "}
            <strong>{availability?.nextCloseTime || "N/A"}</strong>
          </p>
        </div>

        <div className="flex justify-between flex-wrap gap-2 my-2 text-sm sm:text-base">
          <p>
            💰 <strong>{costForTwoMessage || "N/A"}</strong>
          </p>
          <p>
            🕒 Delivery Time: <strong>{sla?.deliveryTime} mins</strong>
          </p>
        </div>
      </div>

      {/* Menu Items */}
      {cards.filter(card=>card?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory").map((card, index) => (
        <div key={index}>
         <RestaurantCategory data={card}/>
        </div>
      ))}
    </div>
  );
}

export default Menu;

