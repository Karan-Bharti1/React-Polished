import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./pages/Body";
import { Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Menu from "./pages/Menu";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
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
    element: <About />,
  },{
    path:"/contact",
    element:<Contact/>
  },{
    path:"/cart",
    element:<Cart/>
  },{
    path:"/restaurants/:restaurantId",
    element:<Menu/>
  }],
    errorElement:<Error/>
  },
  
],);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
