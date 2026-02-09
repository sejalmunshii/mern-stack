import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import "./Navbar.css";
import { ThemeContext } from "../Context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`header sticky-top shadow-sm p-3 ${
        theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">

        {/* Brand */}
        <NavLink to="/" className="navbar-brand fw-bold text-primary">
          Portfolio
        </NavLink>

        {/* Hamburger icon */}
        <div
          className="hamburger d-lg-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
        </div>

        {/* Nav items */}
        <nav className={`nav ${menuOpen ? "open" : ""} d-lg-flex align-items-center`}>
          <ul className="d-flex list-unstyled mb-0 flex-column flex-lg-row nav-list align-items-lg-center gap-lg-3">
            <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
            <li><NavLink to="/about" className="nav-link">About</NavLink></li>
            <li><NavLink to="/resume" className="nav-link">Resume</NavLink></li>
            <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
            <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>

            {/* Theme toggle */}
            <li>
              <button
                className="btn btn-md text-primary ms-lg-3 mt-2 mt-lg-0"
                onClick={toggleTheme}
              >
                {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
              </button>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
