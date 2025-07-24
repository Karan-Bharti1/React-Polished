import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import ItemList from './ItemList';

function RestaurantCategory({ data }) {
    const [showItems,setShowItems]=useState(false)
  const { title, itemCards } = data?.card?.card || {};
const handleClick=()=>{
setShowItems(!showItems)
}
  return (
    <div className="shadow-md bg-gray-50 w-full mt-6 rounded-lg">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 cursor-pointer" onClick={handleClick}>
        <h1 className="text-base sm:text-lg font-semibold text-gray-800">
          {title} {itemCards?.length ? `(${itemCards.length})` : ''}
        </h1>
        <button className="text-gray-600 hover:text-black transition-all duration-200">
          <FaChevronDown />
        </button>
      </div>

      {/* Render only if itemCards has data */}
      {showItems && Array.isArray(itemCards) && itemCards.length > 0 && (
        <ItemList items={itemCards} />
      )}
    </div>
  );
}

export default RestaurantCategory;
