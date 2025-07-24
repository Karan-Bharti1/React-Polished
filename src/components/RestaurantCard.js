import React from "react";
import { CDN_URL } from "../utils/url";
import { FaStar } from "react-icons/fa6";

function RestaurantCard({ resData }) {
  const { name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo } =
    resData?.info || {};

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <img
        className="w-full h-44 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-3 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold text-gray-800 truncate">
            {name}
          </h3>
          <span className="text-xs text-gray-500">
            {sla?.deliveryTime} mins
          </span>
        </div>
        <p className="text-sm text-gray-600 truncate">{cuisines?.join(", ")}</p>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center text-yellow-500 font-medium gap-1">
            <FaStar className="text-sm" />
            <span className="text-sm text-gray-800">{avgRating}</span>
          </div>
          <span className="text-sm text-gray-700">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
}
//Higher Order Component
export const withOffersCard = (RestaurantCard) => {
  return ({ resData }) => {
    return (
      <div>
        <label className="absolute text-amber-50 bg-gray-800 p-1 rounded-l-md m-1">
          {resData?.info?.aggregatedDiscountInfoV3?.header}-
          {resData?.info?.aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestaurantCard resData={resData} />
      </div>
    );
  };
};
export default RestaurantCard;
