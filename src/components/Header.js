import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className='logo-container'>
        <img className='logo' src="https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg"/>
        </div>
        <div className='nav-items'>
            <ul>
                  <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Contact</li>
            </ul>
          
        </div>
    </div>
  )
}

export default Header