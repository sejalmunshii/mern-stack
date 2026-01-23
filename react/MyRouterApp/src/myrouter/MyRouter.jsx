import { createBrowserRouter } from "react-router";
import Navbar from "../component/navbar";
import Home from "../component/Home";
import About from "../component/About";
import Pricing from "../component/pricing";
import Product from "../component/Product";
import Profile from "../component/Profile";
import Id from "../component/id";

const router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/><Home/></> ,
  },
  {
    path: "/about",
    element:<><Navbar/><About/></> ,
  },
  {
    path: "/Pricing",
    element:<><Navbar/><Pricing/></> ,
  },
  {
    path: "/profile",
    element:<><Navbar/><Profile/></> ,
  },
  {
    path: "/product",
    element:<><Navbar/><Product/></> ,
  },
  {
    path: "/id/:username",
    element:<><Navbar/><Id/></> ,
  },
    {
    path: "/product/:id",         
    element: <><Navbar/><Id/></>,
  },

]);
export default router;