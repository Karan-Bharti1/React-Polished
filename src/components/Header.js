import React from 'react'
import { LOGO_URL, logoUrl } from '../utils/url'

function Header() {
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
                    <li>Contact</li>
            </ul>
          
        </div>
    </div>
  )
}

export default Header