import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <Link to="/" className="logo-text">
            <span className="fire-icon">🔥</span>
            <span className="fire-text">Flames</span>
          </Link>
        </div>
      </div>
      <div className="nav-items">
        <ul>

          <li>
            <Link className="primary-button" to="/contact">
              Contact
            </Link>
            
          </li>
           <li>
            <Link className="primary-button" to="/grocery">
              Grocery
            </Link>
            </li>
          <li>
            <Link className="primary-button" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="primary-button" to="/cart">
              Cart
            </Link>
          </li>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="primary-button"
          >
            {isLogin ? "Logout👤" : "Login 👤"}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
