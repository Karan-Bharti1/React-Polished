import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from '../components/ItemList'
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items=useSelector(state=>state.cart.items) //store subscription
  console.log(items)
  const dispatch=useDispatch()
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  return ( 
        <main className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6  '>
            <h2 className='text-center font-bold mt-6 text-2xl'>Your Cart</h2>
            <div className='flex justify-end'>
              <button onClick={handleClearCart} className='p-2 m-2 text-white bg-red-500 rounded-lg'>Empty Cart</button>
            </div>
<ItemList items={items} inCart={true}/>

        </main>
  
  )
}

export default Cart