import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import "./ConnectEngineProjectPage.css";

const ConnectEngineProjectPage = () => {
  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <div className="project-page-connect-container" data-aos="fade-up">
      <header className="project-header" data-aos="fade-down">
        <h1>Connect Engine</h1>
      </header>
      <div className="project-details-connect">
        <div className="details-section-connect" data-aos="fade-right">
          <h2>Project Overview</h2>
          <p>
            ConnectEngine is a social media platform designed for young adults and
            professionals, built with the MERN stack to enhance user engagement and
            professional networking. It features real-time posting, personalized content
            feeds, and secure JsonWebToken authentication for seamless and safe user
            experiences.
          </p>
          <p>
            The platform includes a responsive front-end, scalable backend API
            management, and a comprehensive admin module for content moderation and
            analytics, ensuring a well-maintained and efficient ecosystem.
          </p>
        </div>
      </div>
      <div className="github-link" data-aos="zoom-in">
        <a
          href="https://github.com/mridulapbk08/ConnectEngine-SocialMediaApplication"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            style={{
              width: "24px",
              height: "24px",
              verticalAlign: "middle",
              marginRight: "8px",
            }}
          />
          Visit our GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default ConnectEngineProjectPage;
