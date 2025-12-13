import { useState } from 'react'
import "../css/Home.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo2.png" alt="Logo" />
        </div>
        
        <button className="hamburger" onClick={toggleMenu}>☰</button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
          <li><a href="/">Home</a></li>
          <li><a href="/mosque">Mosque Timing</a></li>
          <li className="dropdown">
            <a href="#">Calculations</a>
            <ul className="dropdown-menu">
              <li><a href="#">Zakat</a></li>
              <li><a href="#">Fitra</a></li>
              <li><a href="#">Inheritance</a></li>
              <li><a href="#">Iddat</a></li>
            </ul>
          </li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/join">Join Us</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar