import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"; 
import "./Navbar.css";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  return (
    <nav className="navbar">
      {/* Logo & Brand Name */}
      <div className="logo-container">
        <img src={logo} alt="Noor Fragrance" className="logo" />
        <span className="brand-name">Noor Fragrance</span>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navbar Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
        
        {/* Dropdown Menu for Top Brands */}
        <li className="dropdown">
          <span onClick={() => setDropdownOpen(!dropdownOpen)}>Top Brands ▼</span>
          <ul className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            <li><Link to="/top-brands/ajmal" onClick={() => setMenuOpen(false)}>Ajmal</Link></li>
            <li><Link to="/top-brands/noor" onClick={() => setMenuOpen(false)}>Noor</Link></li>
            <li><Link to="/top-brands/al-haramain" onClick={() => setMenuOpen(false)}>Al Haramain</Link></li>
          </ul>
        </li>

        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>

        {/* Login Icon */}
        <li className="login-icon">
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <FaUser className="user-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
