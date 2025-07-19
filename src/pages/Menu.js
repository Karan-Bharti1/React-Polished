import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShimmerMenu from '../components/ShimmerMenu'
import { FaStar } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { MENU_URL } from '../utils/url';
function Menu() {
    const {restaurantId}=useParams()
    const [resInfo,setResInfo]=useState(null)
    console.log(restaurantId)
    const fetchData=async()=>{
     const data =await fetch(`${MENU_URL}${restaurantId}`)   
    // const data =await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7046486&lng=76.71787259999999&restaurantId=50790&submitAction=ENTER")
     const json=await data.json()
     setResInfo(json?.data?.cards)
    }
    useEffect(()=>{
fetchData()
    },[])
    if(resInfo===null) return<ShimmerMenu/>

   const {
    name,
    avgRating,
    sla,  
costForTwoMessage,
    cuisines,
    availability,
  } = resInfo[2]?.card?.card?.info || {};
  const {itemCards}=resInfo[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

   console.log(resInfo)
  return  (
    <div className='menu-container'>
        <div className='details-card'>
            <div className='restaurant-name'>
           <h1>
        {name} 
      </h1>
      <h2>
        ({avgRating} <FaStar/>)
      </h2>
      </div>
<div className='res-details-inner'>
     <h3 style={{ margin: "8px 0", fontSize: "16px" }}>
        <IoFastFood/> Cuisines:{" "}
        <strong>{cuisines?.length ? cuisines.join(", ") : "N/A"}</strong>
      </h3>
      <p style={{ margin: "8px 0", fontSize: "16px" }}>
        <MdAccessTimeFilled/> Next Close Time: <strong>{availability?.nextCloseTime}</strong>
      </p>

      </div>
      <div className='res-details-inner-1'>
      <h3 >
         <strong>{
costForTwoMessage}/- </strong>
      </h3>

      <p style={{ margin: "8px 0", fontSize: "16px" }}>
        🕒 Delivery Time: <strong>{sla?.deliveryTime} mins</strong>
      </p>
</div>
      </div>
        <h2>Menu</h2>
        <ul>
        {itemCards.length>0 && itemCards.map((item,index)=>(
            <li key={item?.card?.info?.id}>
         <div>{item?.card?.info?.name} 
            Rs. {item?.card?.info?.finalPrice/100||item?.card?.info?.defaultPrice/100||item?.card?.info?.price/100}
         </div>
            </li>
        ))}
</ul>
    </div>
  )
}

export default Menu