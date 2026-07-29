import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="navbar">
      <div className="logo">
        Kenya NPO Working Group
      </div>

      <nav>
        <ul className="nav-links">

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/focus-areas">Focus Areas</NavLink>
          </li>

          <li>
            <NavLink to="/team">Team</NavLink>
          </li>

          <li>
            <NavLink to="/partner">Partner</NavLink>
          </li>

          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li>

          <li>
            <NavLink to="/media">Media</NavLink>
          </li>

          <li>
            <NavLink to="/join-us">Join Us</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

        </ul>
      </nav>

      <button
        className="theme-btn"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Navbar;