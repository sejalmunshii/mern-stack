import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header sticky-top shadow-sm p-3 ${theme}`}>
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
          <ul className="d-flex list-unstyled mb-0 flex-column flex-lg-row nav-list">
            <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
            <li><NavLink to="/about" className="nav-link">About</NavLink></li>
            <li><NavLink to="/resume" className="nav-link">Resume</NavLink></li>
            <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
            <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            <li>
              {/* Theme toggle */}
              <button
                className="btn text-primary ms-lg-3 mt-2 mt-lg-0"
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
