import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Focus Areas", path: "/focus-areas" },
    { name: "Team", path: "/team" },
    { name: "Partners", path: "/partner" },
    { name: "Resources", path: "/resources" },
    { name: "Media", path: "/media" },
    { name: "Join Us", path: "/join-us" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">

      <div className="navbar-container">

        <div className="logo">
          Kenya NPO Working Group
        </div>


        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>


        <nav className={menuOpen ? "nav-open" : ""}>
          <ul className="nav-links">

            {links.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

          </ul>
        </nav>


        <button
          className={`theme-toggle ${darkMode ? "dark" : ""}`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <span></span>
        </button>

      </div>

    </header>
  );
}

export default Navbar;