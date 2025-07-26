import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const onlineStatus = useOnlineStatus();
const {loggedInUser}=useContext(UserContext)
const cartItems=useSelector(state=>state.cart.items)//Subscribing to the store using selector
console.log(cartItems)
  return (
    <header className="bg-red-500 text-white px-4 py-4">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="container  flex flex-col justify-between md:flex-row  items-center">
        <div className="text-2xl font-bold mb-2 md:mb-0">
          <Link to="/" className="flex items-center space-x-2">
            <span>🔥</span>
            <span>Flames</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <li>
              <Link className="px-2 hover:text-lg text-base" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="px-2 hover:text-lg text-base" to="/grocery">
                Grocery
              </Link>
            </li>
            <li>
              <Link className="px-2 hover:text-lg text-base" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="px-2 hover:text-lg text-base" to="/cart">
                Cart({cartItems.length})
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="hover:text-lg text-base px-2"
              >
                {isLogin ? "Logout 👤" : "Login 👤"}
              </button>
            </li>
            <li>
               <div className="px-2 hover:text-lg text-base">
                {loggedInUser}
              </div>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </header>
  );
}

export default Header;
