import { NavLink } from "react-router-dom";
import "./header.css";
import { FaBars, FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import Logo from "../../../assets/images/mauli-agro-tourism-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbarToggle = () => {
    const navbarCollapse = document.getElementById("navbarCollapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };


  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark px-2 py-3 py-lg-0 ${
          windowWidth > 999 ? (scrolled ? "sticky" : "") : ""
        }`}
        style={{ background: "white" }}
      >
        <a href="index" className="navbar-brand px-3 ms-5">
          <img
            className="img-fluid float-right"
            src={Logo}
            width="70px"
            alt="logo"
          />
        </a>
        <div className="px-3">
          <button
            className="navbar-toggler bg-dark pt-2 pb-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <FaBars className="text-white" />
          </button>
        </div>
        <div className="collapse navbar-collapse TopHeader" id="navbarCollapse" style={{justifyContent:"center"}}>
          <div className="navbar-nav py-0">
            {windowWidth > 999 ? (
              <>
                <NavLink
                  to="/"
                  onClick={() => handleNavbarToggle()}
                  className="nav-item nav-link"
                >
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                  About us
                </NavLink>
                <NavLink to="/packages" className="nav-item nav-link">
                  Packages
                </NavLink>
                <NavLink to="/activity" className="nav-item nav-link">
                  Activities
                </NavLink>
                <NavLink to="/gallery" className="nav-item nav-link">
                  Gallery
                </NavLink>
                <NavLink to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/"
                  onClick={() => handleNavbarToggle()}
                  className="nav-item nav-link"
                >
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link"   onClick={() => handleNavbarToggle()} >
                  About us
                </NavLink>
                <NavLink to="/packages" className="nav-item nav-link"   onClick={() => handleNavbarToggle()} >
                  Packages
                </NavLink>
                <NavLink to="/activity" className="nav-item nav-link"   onClick={() => handleNavbarToggle()} >
                  Activities
                </NavLink>
                <NavLink to="/gallery" className="nav-item nav-link"   onClick={() => handleNavbarToggle()} >
                  Gallery
                </NavLink>
                <NavLink
                  to="/contact"
                  className="nav-item nav-link contact-link"
                  onClick={() => handleNavbarToggle()} 
                >
                  Contact Info
                </NavLink>
                <p style={{ margin: "5px 0px 5px 30px", fontSize: "18px" }}>
                  {" "}
                  Kala Fata Road, Taluka, Parshivni, Maharashtra 441105
                </p>
              </>
            )}
          </div>

          <div className="header-cta">
            <a href="tel:+897-985-564-45">
              <FaPhoneAlt
                style={{ transform: "rotate(10deg)", padding: "10px" }}
                className="icon"
              />
            </a>
            <div className="phone-number mt-4">
              <span>Phone Number</span>
              <p>
                <a
                  href="tel:+91 9307027399"
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  +91 9307027399
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
