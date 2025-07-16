import React from 'react'

function RestaurantCard(props) {
  return (
    <div className='res-card'>
        <img className='res-img' src={props.url} alt='Res Card'/>
        <h3>{props.name}</h3>
        <h4>{props.cuisine}</h4>
        <h4>{props.rating} stars</h4>
        <h4>{props.time} mins</h4>
    </div>
  )
}

export default RestaurantCard