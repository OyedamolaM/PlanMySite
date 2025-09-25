import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Plans", path: "/#plans" },
  { name: "Testimonials", path: "/#testimonials" },
  { name: "CTA", path: "/#cta" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const handleClick = (e, path) => {
    // Smooth scroll for anchor links
    if (path.includes("#")) {
      e.preventDefault();
      const id = path.split("#")[1];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Detect scroll to apply "scrolled" class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">PlanMySite</div>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link to={link.path} onClick={(e) => handleClick(e, link.path)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="mobile-nav-links">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  onClick={(e) => handleClick(e, link.path)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
