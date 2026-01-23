import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout.jsx";
import Hero from "../Components/Hero.jsx";
import About from "../Components/About.jsx";
import Projects from "../Components/Projects.jsx";
import Contact from "../Components/Contact.jsx";
import Resume from "../Components/Resume.jsx";

/* Optional: 404 Page */
const NotFound = () => (
  <div className="container text-center py-5">
    <h1 className="display-4">404</h1>
    <p className="lead">Page not found</p>
  </div>
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,          // Navbar + Outlet
    errorElement: <NotFound />,   // 👈 404 support
    children: [
      {
        index: true,              // Home page
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
