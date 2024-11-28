import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons"; // Import new icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <div className="footer-icon-text">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
            <a
              href="mailto:prabhakar.m@northeastern.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              prabhakar.m@northeastern.edu
            </a>
          </div>
          <p>Phone: 857-746-1898</p>
        </div>
        <div className="footer-section">
          <h4>Location</h4>
          <p>239 Heath Street, Boston, MA 02130</p>
        </div>
        <div className="footer-section">
          <h4>Follow</h4>
          <div className="social-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Download Resume</h4>
          <div className="footer-icon-text">
            <FontAwesomeIcon icon={faFileDownload} size="1x" />
            <a
              href="/path/to/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume 
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
