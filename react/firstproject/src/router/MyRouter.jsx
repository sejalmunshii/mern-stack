import { createBrowserRouter} from "react-router";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import Form from "../pages/Form";
import About from "../pages/About";
import Section1 from "../pages/Section1";
import Section2 from "../pages/Section2";
import Product from "../pages/Product";

const Myrouter = createBrowserRouter([
     {
    path: "Section1",
    element: (
      <>
        <Navbar />
        <div><Section1/></div>,
        <Footer />
      </>
    ),
  },
  {
    path: "/Section2",
    element: (
      <>
        <Navbar />
        <div><Section2/></div>,
        <Footer />
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <Navbar/>
        <div><About/></div>,
        <Footer/>
      </>
    ),
  },
  {
    path: "/Section2",
    element: (
      <>
        <Navbar />
        <div><Section2/></div>,
        <Footer />
      </>
    ),
  },
  {
    path: "/Form",
    element: (
      <>
        <Navbar />
        <div><Form/></div>,
        <Footer />
      </>
    ),
  },
  {
    path:"/Product",
    element: (
      <>
        <Navbar />
        <div><Product/></div>,
        <Footer />
      </>
    ),
  },
]);

export default Myrouter;