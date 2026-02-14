import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Home.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-header">
          <Link to="/" onClick={closeMenu}>
            <img src="/images/logo2.png" alt="Sakinah Logo" />
          </Link>

          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/masajidtimings" onClick={closeMenu}>
              Masajid Timings
            </NavLink>
          </li>

          <li className="dropdown">
            {/* 🔥 FIXED — absolute route */}
            <NavLink to="/calculations" onClick={closeMenu}>
              Calculations
            </NavLink>

            <ul className="dropdown-menu">
              <li>
                <NavLink to="/calculations/zakat" onClick={closeMenu}>
                  Zakat
                </NavLink>
              </li>

              <li>
                <NavLink to="/calculations/fitrah" onClick={closeMenu}>
                  Fitrah
                </NavLink>
              </li>

              <li>
                <NavLink to="/calculations/inheritence" onClick={closeMenu}>
                  Inheritence
                </NavLink>
              </li>

              <li>
                <NavLink to="/calculations/iddat" onClick={closeMenu}>
                  Iddat
                </NavLink>
              </li>

              <li>
                <NavLink to="/calculations/aqiqah" onClick={closeMenu}>
                  Aqiqah
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/aboutus" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/joinus" onClick={closeMenu}>
              Join Us
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
