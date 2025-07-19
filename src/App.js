import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Error from "./pages/Error";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>
  },
  {
    path: "/about",
    element: <About />,
  },{
    path:"/contact",
    element:<Contact/>
  },{
    path:"/cart",
    element:<Cart/>
  }
],);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
