import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <div className="footer-logo">
            MP<span>.</span>
          </div>

          <p>
            Software engineer and researcher interested in distributed
            systems, cloud computing, backend engineering, and reliable
            software systems.
          </p>

          <span className="footer-location">
            Boston, Massachusetts
          </span>
        </div>

        <div className="footer-links-column">
          <p className="footer-title">
            Contact
          </p>

          <a href="mailto:prabhakar.m@northeastern.edu">
            <FontAwesomeIcon icon={faEnvelope} />

            <span>
              Email
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/mridula-prabhakar-b28b24208/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />

            <span>
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/mridulapbk?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />

            <span>
              GitHub
            </span>
          </a>
        </div>

        <div className="footer-links-column">
          <p className="footer-title">
            Resume
          </p>

          <a
            href="https://drive.google.com/drive/u/0/folders/1sv9Zdnla2z7ygnnqWq-Dox7FNtsKktBR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileDownload} />

            <span>
              View Resume
            </span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} Mridula Prabhakar
          </span>

          <span>
            Built with React
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;