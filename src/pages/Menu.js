import React from "react";
import { useParams } from "react-router-dom";
import ShimmerMenu from "../components/ShimmerMenu";
import { CDN_URL, PLACEHOLDER_URL } from "../utils/url";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function Menu() {
  const { restaurantId } = useParams();
  const resInfo = useRestaurantMenu(restaurantId);

  if (resInfo === null) return <ShimmerMenu />;

  const { name, avgRating, sla, costForTwoMessage, cuisines, availability } =
    resInfo[2]?.card?.card?.info || {};
  const { cards } = resInfo[5]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 max-w-6xl">
    
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
      {cards.slice(2, 11).map((card, index) => (
        <div key={index}>
          <h2 className="text-xl sm:text-2xl font-semibold my-6 text-center">
            {card?.card?.card?.itemCards?.length > 0 &&
              card?.card?.card?.title}
          </h2>

          {card?.card?.card?.itemCards?.map((item) => {
            const info = item?.card?.info;
            const price =
              info?.finalPrice / 100 ||
              info?.defaultPrice / 100 ||
              info?.price / 100;

            return (
              <div
                className="shadow-md bg-white p-4 sm:p-6 my-4 rounded-xl"
                key={info?.id}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8">
                  {/* Left - Text */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {info?.name}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      ₹{price}
                    </p>
                    <p className="text-sm font-medium">
                      {info?.itemAttribute?.vegClassifier === "VEG"
                        ? "🟩 Veg"
                        : "🟥 Non-Veg"}
                    </p>
                    {info?.description && (
                      <p className="text-sm text-gray-600 leading-snug mt-2 line-clamp-3">
                        {info.description}
                      </p>
                    )}
                  </div>

                  
                  <div className="w-full sm:w-36 h-36 flex-shrink-0">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={
                        info?.imageId
                          ? `${CDN_URL}${info.imageId}`
                          : PLACEHOLDER_URL
                      }
                      alt={info?.name}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Menu;
