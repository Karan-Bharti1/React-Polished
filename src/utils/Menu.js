import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerMenu from "../components/ShimmerMenu";
import { FaStar } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { CDN_URL, MENU_URL, PLACEHOLDER_URL } from "./url";
import useRestaurantMenu from "./useRestaurantMenu";
function Menu() {
  const { restaurantId } = useParams();
  const resInfo=useRestaurantMenu(restaurantId)
  if (resInfo === null) return <ShimmerMenu />;

  const { name, avgRating, sla, costForTwoMessage, cuisines, availability } =
    resInfo[2]?.card?.card?.info || {};
  const { cards } = resInfo[5]?.groupedCard?.cardGroupMap?.REGULAR;

  console.log(resInfo);
  return (
    <div className="menu-container">
      <div className="details-card">
        <div className="restaurant-name">
          <h1>{name}</h1>
          <h2>
            ({avgRating} <FaStar />)
          </h2>
        </div>
        <div className="res-details-inner">
          <h3 style={{ margin: "8px 0", fontSize: "16px" }}>
            <IoFastFood /> Cuisines:{" "}
            <strong>{cuisines?.length ? cuisines.join(", ") : "N/A"}</strong>
          </h3>
          <p style={{ margin: "8px 0", fontSize: "16px" }}>
            <MdAccessTimeFilled /> Next Close Time:{" "}
            <strong>{availability?.nextCloseTime}</strong>
          </p>
        </div>
        <div className="res-details-inner-1">
          <h3>
            <strong>{costForTwoMessage}/- </strong>
          </h3>

          <p style={{ margin: "8px 0", fontSize: "16px" }}>
            🕒 Delivery Time: <strong>{sla?.deliveryTime} mins</strong>
          </p>
        </div>
      </div>
      {cards.slice(2, 11).map((card, index) => (
        <div key={index}>
          <h2 className="cards-head">
            {card?.card?.card?.itemCards?.length && card?.card?.card?.title}
          </h2>
          
            {card?.card?.card?.itemCards?.length > 0 &&
              card?.card?.card?.itemCards?.map((item, index) => (
                <div className="item-card" key={item?.card?.info?.id}>
                    <div className="card-container">
                  <div>
                    <h3>{item?.card?.info?.name}</h3>
                    <p>
                      {" "}
                      Rs.{" "}
                      {item?.card?.info?.finalPrice / 100 ||
                        item?.card?.info?.defaultPrice / 100 ||
                        item?.card?.info?.price / 100}
                    </p>
                    <p>
                      {item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                        ? "🟩 Veg"
                        : "🟥 Non-Veg"}{" "}
                    </p>
                    <p>{item?.card?.info?.description}</p>
                  </div>
                  <div className="item-image">
                    <img src={`${CDN_URL}${item?.card?.info?.imageId}`|| PLACEHOLDER_URL}/>
                  </div>
                  </div>
                </div>
              ))}
          
        </div>
      ))}
   
    </div>
  );
}
export default Menu;
