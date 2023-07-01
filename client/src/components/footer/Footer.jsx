import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import { BsPinMapFill, BsMailbox2, BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="copyright">
          <h2>DigitalBlaze</h2>
          <p>copyright ©2023 DiitalBlaze. All rights reserved</p>
        </div>
        <div className="footer-links">
          <Link to="#">about us</Link>
          <Link to="#">contact</Link>
          <Link to="#">FAQ</Link>
          <Link to="#">terms & conditions</Link>
        </div>
        <div className="contacts">
          <div className="contact-group">
            <BsMailbox2 className="contact-icon" />
            <p>ourrachhatim0@gmail.com</p>
          </div>
          <div className="contact-group">
            <BsPinMapFill className="contact-icon" />
            <p>Beni Mellal, Morocco</p>
          </div>
          <div className="contact-group">
            <BsFillTelephoneFill className="contact-icon" />
            <p>+212620621924</p>
          </div>
        </div>
      </div>
      <div className="footer-socials">
        <FaInstagram className="socials-icons" />
        <FaFacebookSquare className="socials-icons" />
        <FaTwitter className="socials-icons" />
        <FaLinkedin className="socials-icons" />
      </div>
    </div>
  );
};

export default Footer;
