import React, { useState } from 'react'


function Header() {
  const [isLogin,setIsLogin]=useState(false)
  return (
    <div className='header'>
        <div className='logo-container'>
       <div className="logo">
  <span className="fire-icon">🔥</span>
  <span className="fire-text">Flames</span>
</div>
        </div>
        <div className='nav-items'>
            <ul>
                  <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <button onClick={()=>setIsLogin(!isLogin)} className='primary-button'>{isLogin?"Logout👤": "Login 👤"}</button>
            </ul>
          
        </div>
    </div>
  )
}

export default Header