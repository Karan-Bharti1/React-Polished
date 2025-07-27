import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from '../components/ItemList'
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const items=useSelector(state=>state.cart.items) //store subscription for the write portion in the store, don't subscribe full store as it is less efficient. Subscribing to full store leads to performance loss
  console.log(items)
  const dispatch=useDispatch()
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  return ( 
        <main className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6  '>
            <h2 className='text-center font-bold mt-6 text-2xl'>Your Cart</h2>
         { items?.length>0 && ( <div className='flex justify-end'>
              <button onClick={handleClearCart} className='p-2 m-2 text-white bg-red-500 rounded-lg cursor-pointer'>Empty Cart</button>
            </div>)}
<ItemList items={items} inCart={true}/>
{items?.length==0 && (<>
<h2 className='text-red-500 text-center mt-8 text-xl'>No Items Present In the cart </h2>
<div className='text-center my-8'>
<Link to="/" className='p-2 m-2 text-white bg-red-500 rounded-lg my-4 cursor-pointer'>To Order Food</Link>
</div>
</>)}

        </main>
  
  )
}

export default Cart