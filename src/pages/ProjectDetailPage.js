import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

import "./ProjectDetailPage.css";

const ProjectDetailPage = ({
  eyebrow = "PROJECT",
  title,
  description,
  sections = [],
  tech = [],
  githubUrl,
  paperUrl,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 20,
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="project-detail-page">

      {/* HERO */}
      <section className="project-detail-hero">
        <div className="project-detail-grid-bg" />

        <div className="project-detail-container">
          <a
            href="/#projects"
            className="project-detail-back"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="project-detail-back-icon"
            />

            <span>
              Back to projects
            </span>
          </a>

          <div
            className="project-detail-heading"
            data-aos="fade-up"
          >
            <p className="project-detail-eyebrow">
              {eyebrow}
            </p>

            <h1>
              {title}
            </h1>

            {description && (
              <p className="project-detail-intro">
                {description}
              </p>
            )}

            {tech.length > 0 && (
              <div className="project-detail-tech">
                {tech.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="project-detail-content">
        <div className="project-detail-container">

          <div
            className={`project-detail-cards ${
              sections.length === 1
                ? "project-detail-cards-single"
                : ""
            }`}
          >
            {sections.map((section, index) => (
              <article
                className="project-detail-card"
                key={section.title}
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <span className="project-detail-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>
                  {section.title}
                </h2>

                {Array.isArray(section.content) ? (
                  section.content.map(
                    (paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>
                        {paragraph}
                      </p>
                    )
                  )
                ) : (
                  <p>
                    {section.content}
                  </p>
                )}
              </article>
            ))}
          </div>

          {/* RESEARCH LINKS */}
          {(paperUrl || githubUrl) && (
            <section
              className="project-detail-repository"
              data-aos="fade-up"
            >
              <div className="project-detail-repository-copy">
                <p className="project-detail-repository-label">
                  RESEARCH ARTIFACTS
                </p>

                <h2>
                  Explore the project
                </h2>

                <p className="project-detail-repository-description">
                  Read the research preprint and explore the implementation,
                  source code, experiments, and supporting project materials.
                </p>
              </div>

              <div className="project-detail-repository-actions">

                {paperUrl && (
                  <a
                    href={paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-paper-button"
                  >
                    <span className="project-repo-button-inner">
                      <FontAwesomeIcon
                        icon={faFileLines}
                        className="project-paper-icon"
                      />

                      <span className="project-repo-button-text">
                        Read Preprint
                      </span>

                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="project-repo-arrow"
                      />
                    </span>
                  </a>
                )}

                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-repo-button"
                  >
                    <span className="project-repo-button-inner">

                      <FontAwesomeIcon
                        icon={faGithub}
                        className="project-repo-github"
                      />

                      <span className="project-repo-button-text">
                        View GitHub Repository
                      </span>

                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="project-repo-arrow"
                      />

                    </span>
                  </a>
                )}

              </div>
            </section>
          )}

        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;