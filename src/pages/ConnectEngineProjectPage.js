import React from "react";
import "./ConnectEngineProjectPage.css";

const ConnectEngineProjectPage = () => {
  return (
    <div className="project-page-container">
      <header className="project-header">
        <h1>Connect Engine</h1>
      </header>
      <div className="project-details">
        <div className="details-section">
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
      <div className="github-link">
        <a
          href="https://github.com/mridulapbk08/ConnectEngine-SocialMediaApplication"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
          />
          Visit our GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default ConnectEngineProjectPage;
