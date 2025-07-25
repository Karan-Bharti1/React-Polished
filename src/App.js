import React, { lazy,Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./pages/Body";
import { Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Menu from "./pages/Menu";
import ShimmerRest from "./components/ShimmerRest";
import ShimmerMenu from "./components/ShimmerMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./pages/Grocery";
const Grocery=lazy(()=>import("./pages/Grocery"));
const About=lazy(()=>import("./pages/About"))
const AppLayout = () => {
  const [user,setUser]=useState("Karan")
  return (
    <UserContext.Provider value={{loggedInUser:user,setUser}}>
    <div>
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[{
      path:"/",
      element:<Body/>
    },{
    path: "/about",
    element:<Suspense fallback={<><ShimmerMenu/></>}><About/></Suspense>,
  },{
    path:"/contact",
    element:<Contact/>
  },{
    path:"/cart",
    element:<Cart/>
  },{
    path:"/restaurants/:restaurantId",
    element:<Menu/>
  },{
    path:"/grocery",
    element:<Suspense fallback={<><ShimmerMenu/></>}><Grocery/></Suspense>
  }],
    errorElement:<Error/>
  },
  
],);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
