import React from 'react'
import { CDN_URL } from '../utils/url'
import { FaStar } from "react-icons/fa6";
function RestaurantCard({resData}) {
    const {name,cuisines,cloudinaryImageId,avgRating,sla,costForTwo}=resData?.info
  return (
    <div className='res-card'>
        <img className='res-img' src={CDN_URL+cloudinaryImageId} alt='Res Card'/>
        <div className='res-card-inner'>
            <h3>{name}</h3>
          <h4>{sla.deliveryTime} mins</h4>
        </div>
        <div>
        <h4>{cuisines.join(",")}</h4>
        </div>
         <div className='res-card-inner'>
        <h4>{avgRating} <FaStar/></h4>
        <h4>{costForTwo}/-</h4>
        </div> 
    </div>
  )
}

export default RestaurantCard