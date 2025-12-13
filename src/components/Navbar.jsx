import { useState } from "react";
import "../css/Home.css";
import {Link} from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-header">
          <div className="logo">
            <img src="/images/logo2.png" alt="Logo" />
          </div>

          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>

            <Link to="/" >Home</Link>
            {/* <a href="/">Home</a> */}
          </li>
          <li>
            <a href="/masajidtimings">Masajid Timings</a>
          </li>
          <li className="dropdown">
            <a href="calculations">Calculations</a>
            <ul className="dropdown-menu">
              <li>
                <a href="/calculations/zakat">Zakat</a>
              </li>
              <li>
                <a href="/calculations/fitrah">Fitra</a>
              </li>
              <li>
                <a href="/calculations/inheritence">Inheritance</a>
              </li>
              <li>
                <a href="/calculations/iddat">Iddat</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
            {/* <a href="/aboutus">About Us</a> */}
          </li>
          <li>
            <a href="/joinus">Join Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
