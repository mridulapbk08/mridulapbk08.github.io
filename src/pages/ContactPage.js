import React from "react";
import "./ContactPage.css"; // Add styles here

// Import the image from the new location
import contactImage from "../assets/images/contact_me.webp";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Me</h1>
      </header>
      <div className="contact-container">
        <div className="contact-text">
          <p>
            Feel free to reach out with any queries, collaborations, or opportunities - 
            I'm eager to connect and explore new possibilities!
          </p>
          <p>
            <strong>Email:</strong> prabhakar.m@northeastern.edu
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/mridula-prabhakar-b28b24208/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/mridula-prabhakar-b28b24208/
            </a>
          </p>
        </div>
        <div className="contact-image">
          <img
            src={contactImage} // Use the imported image
            alt="Contact Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
