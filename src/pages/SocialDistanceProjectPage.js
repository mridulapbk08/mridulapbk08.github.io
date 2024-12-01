import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import "./SocialDistanceProjectPage.css"; // Ensure CSS styles for consistent design

const SocialDistanceProjectPage = () => {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth animations
      once: true, // Ensure animations run only once
    });
  }, []);

  return (
    <div className="project-page" data-aos="fade-in">
      <header className="project-header" data-aos="fade-down">
        <h1>Social Distance and Face Mask Detection</h1>
      </header>
      <div className="project-content">
        <h2 data-aos="fade-up">Social Distance and Face Mask Tracker</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          The Social Distance and Face Mask Tracker is a real-time monitoring
          system aimed at enhancing public safety during the COVID-19 pandemic.
          Using deep learning algorithms and geometric techniques, it detects
          face mask usage and social distancing violations through video streams
          from public cameras.
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          The system identifies individuals, calculates distances, and flags
          non-compliance in real time, showcasing the practical application of AI
          and machine learning to support public health efforts effectively.
        </p>
      </div>
      {/* Add the GitHub link below the project content */}
      <div className="github-link" data-aos="fade-left">
        <a
          href="https://github.com/mridulapbk/Social-Distance-and-Face-Mask-Tracker-main"
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
          Visit the GitHub Repository
        </a>
      </div>
      
    </div>
  );
};

export default SocialDistanceProjectPage;
