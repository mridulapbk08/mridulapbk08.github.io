import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import "./CloudProjectPage.css";

const CloudProjectPage = () => {
  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <div className="project-page-cloud-container" data-aos="fade-up">
      <header className="project-header" data-aos="fade-down">
        <h1>Cloud Native Web App</h1>
      </header>
      <section className="project-cloud-details">
        <div className="details-section-cloud" data-aos="fade-right">
          <h2>Flask-Based Application</h2>
          <p>
            Developed a Flask-based application deployed on GCP, featuring
            multiple RESTful endpoints to manage user operations. These
            endpoints allowed for creating users, retrieving user details, and
            sending email verifications. The email verification process was
            implemented using Pub/Sub and Cloud Functions for a serverless,
            scalable workflow.
          </p>
        </div>
        <div className="details-section-cloud" data-aos="fade-left">
          <h2>CI/CD Pipelines</h2>
          <p>
            To streamline the development lifecycle, implemented CI/CD
            pipelines that automated critical processes, including building
            custom machine images, integrating unit tests, and deploying the
            application to the cloud. These pipelines, integrated with version
            control, ensured consistent and reliable application builds while
            reducing errors during deployment. This automation significantly
            improved the efficiency of updates and allowed for rapid iteration.
          </p>
        </div>
        <div className="details-section-cloud" data-aos="fade-right">
          <h2>Terraform</h2>
          <p>
            The entire cloud infrastructure was provisioned and managed using
            Terraform, ensuring reproducibility and scalability. This included
            defining resources for Compute Engine instances, Cloud SQL
            databases, Pub/Sub topics, and serverless Cloud Functions.
            Utilizing Terraform's Infrastructure as Code (IaC) capabilities,
            the setup was standardized across environments, enhancing
            collaboration, simplifying infrastructure modifications, and
            ensuring high reliability.
          </p>
        </div>
      </section>
      {/* Add the GitHub link below the cards */}
      <div className="github-link" data-aos="zoom-in">
        <a
          href="https://github.com/your-repository-link"
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
          Visit GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default CloudProjectPage;
