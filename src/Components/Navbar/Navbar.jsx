import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img src={logo} className="logo" />
      </Link>
      <ul className={mobileMenu ? `` : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-313} duration={500}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-270} duration={500}>
            Our mission
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-253} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link className="btn" to="contact" smooth={true} offset={-260} duration={500}>
            CONTACT US
          </Link>
        </li>
      </ul>
      <img src={menu_icon} className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
