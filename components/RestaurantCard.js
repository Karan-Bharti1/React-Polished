import React from 'react'

function RestaurantCard({url,name,cuisine,rating,time}) {
  return (
    <div className='res-card'>
        <img className='res-img' src={url} alt='Res Card'/>
        <h3>{name}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating} stars</h4>
        <h4>{time} mins</h4>
    </div>
  )
}

export default RestaurantCard