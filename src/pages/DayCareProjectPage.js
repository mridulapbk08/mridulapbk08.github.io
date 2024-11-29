import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "./DayCareProjectPage.css"; // Use a common CSS for project pages

const DayCareProjectPage = () => {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Run animation only once
    });
  }, []);

  return (
    <div className="project-page" data-aos="fade-in">
      <header className="project-header" data-aos="fade-down">
        <h1>Day Care System</h1>
      </header>
      <section className="project-content">
        <div className="project-section" data-aos="fade-up">
          <h2>Student Data Collection and Tracking System</h2>
          <p>
            This application streamlines student data collection by capturing
            essential details and utilizing immunization records for tracking and
            performance evaluation. Built with Java, Swing, and SQL, the system
            efficiently manages student information, offering robust features for
            data analysis and tracking. It also supports CSV file integration,
            enhancing data import and export capabilities.
          </p>
          <p>
            The project highlights the use of modern programming and database tools
            to create a user-friendly interface for managing student records and
            improving overall data handling processes.
          </p>
        </div>
      </section>
      {/* Add the GitHub link below the project description */}
      <div className="github-link" data-aos="fade-left">
        <a
          href="https://github.com/mridulapbk08/OOD_Project"
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

export default DayCareProjectPage;
