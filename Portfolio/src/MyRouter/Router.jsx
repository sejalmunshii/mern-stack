  import React from "react";
  import { createBrowserRouter } from "react-router-dom";

  import Layout from "../Layout/Layout";
  import Hero from "../Components/Hero";
  import About from "../Components/About";
  import Projects from "../Components/Projects";
  import Contact from "../Components/Contact";
  import Resume from "../Components/Resume";

  const NotFound = () => (
    <div className="container text-center py-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Page not found</p>
    </div>
  );

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Hero /> },
        { path: "about", element: <About /> },
        { path: "resume", element: <Resume /> },
        { path: "projects", element: <Projects /> },
        { path: "contact", element: <Contact /> },
         { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> }, // 👈 catch-all
      ],
    },
  ]);

  export default Router;
