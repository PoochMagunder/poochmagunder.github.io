import React from "react";
import "../assets/css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-wrapper" bg="dark">
      <div className="links-container">
        <a
          href="https://www.instagram.com/devoneadie"
          className="instagram link"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://github.com/PoochMagunder" className="github link">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/devon-eadie-9282a6261"
          className="linkedin link"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/devon.eadie"
          className="facebook link"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
