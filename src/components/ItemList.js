import React from "react";
import { CDN_URL } from "../utils/url"; // make sure this points to Cloudinary base URL

function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => {
        const info = item?.card?.info;
        const price =
          info?.finalPrice / 100 ||
          info?.defaultPrice / 100 ||
          info?.price / 100;

        return (
          <div
            key={info?.id}
            className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8  bg-white p-4 sm:p-6 my-4 rounded-xl"
          >
            
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold">
                {info?.name}
              </h3>

              <p className="text-sm sm:text-base font-semibold text-gray-800">
                ₹{price}
              </p>

              <p
                className={`text-sm font-medium ${
                  info?.itemAttribute?.vegClassifier === "VEG"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
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

            {info?.imageId && (
              <div className="w-32 h-24 rounded-md ">
                
                <button className="p-1 absolute bg-black cursor-pointer hover:font-semibold  shadow-xl text-gray-50">Add+</button>
                <img
                  src={CDN_URL + info.imageId}
                  alt={info.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
