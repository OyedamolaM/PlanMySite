import React from "react";
import "./Footer.scss";
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3>Plan My Site</h3>
          <p>Building your website, one plan at a time.</p>
        </div>

        {/* Community Links */}
        <div className="footer-links">
          <h4>Community</h4>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#socials">Social Media</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#pricing">Pricing Plans</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#guides">Guides & Tutorials</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><strong>Email:</strong> aoyedamola@gmail.com</p>
          <p><strong>WhatsApp:</strong> +234 816 525 8326</p>
          <p><strong>Office:</strong> 1, Sunday Akinbo Street, Command, Ipaja, Lagos</p>
          <p><a href="#partners">Partner with Us</a></p>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Plan My Site. All rights reserved.</p>
        <p>Registration Number: PLAN MY SITE LIMITED</p>

        {/* Optional Login Bar */}
        <div className="footer-login">
          <input type="text" placeholder="Enter Classroom ID" />
          <button>Login</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
