import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Footer from "./Footer";

// Images
import MridulaImage from "./assets/images/Mridula_Prabhakar.jpg";

import SelfHealingImage from "./assets/images/self-healing-dashboard.png";
import CloudImage from "./assets/images/cloud.webp";
import CarRentalImage from "./assets/images/cars.webp";
import DaycareImage from "./assets/images/daycare-software-system.jpg";
import FaceMaskTrackerImage from "./assets/images/face_mask_tracker.png";
import ProShopImage from "./assets/images/proshop.webp";
import SocialMediaImage from "./assets/images/social-media.webp";

import Certification1Image from "./assets/images/GCPCerti.jpeg";
import Certification2Image from "./assets/images/AzureFundamentals_Certification.png";
import Certification3Image from "./assets/images/AzureAdministrator_Certification.png";

import mindlanceLogo from "./assets/images/mindlance.png";
import accentureLogo from "./assets/images/accenture.png";
import CsSoftSolutionLogo from "./assets/images/solutions.png";
import mahindraLogo from "./assets/images/mahindra.png";

// Pages
import AboutPage from "./pages/AboutPage.js";
import SelfHealingProjectPage from "./pages/SelfHealingProjectPage.js";
import CloudProjectPage from "./pages/CloudProjectPage.js";
import CarRentalPage from "./pages/CarRentalProjectPage.js";
import DaycarePage from "./pages/DayCareProjectPage.js";
import SocialDistancePage from "./pages/SocialDistanceProjectPage.js";
import ProShopPage from "./pages/ProShopProjectPage.js";
import ConnectEnginePage from "./pages/ConnectEngineProjectPage.js";
import ContactPage from "./pages/ContactPage.js";
import CertificationPage from "./pages/CertificationPage.js";

const interests = [
  {
    number: "01",
    title: "Distributed Systems",
    description:
      "Fault tolerance, workflow orchestration, reliable execution, scheduling, and recovery across distributed services.",
    variant: "dark",
  },
  {
    number: "02",
    title: "Cloud Computing",
    description:
      "Scalable services, cloud-native applications, infrastructure automation, deployment pipelines, and production reliability.",
    variant: "light",
  },
  {
    number: "03",
    title: "Backend & Architecture",
    description:
      "APIs, databases, service design, workflow automation, and scalable production software systems.",
    variant: "accent",
  },
  {
    number: "04",
    title: "Applied AI & Vision",
    description:
      "Practical machine-learning and computer-vision applications designed around real-world software problems.",
    variant: "light",
  },
];

const projects = [
  {
    category: "Distributed Systems · Research",
    title: "Self-Healing Agent Infrastructure",
    image: SelfHealingImage,
    description:
      "A fault-tolerant workflow orchestration platform that detects failures, applies automated recovery strategies, and evaluates system reliability through large-scale workflow execution experiments.",
    tech: [
      "Golang",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Distributed Systems",
    ],
    link: "/projects/self-healing-agent-infrastructure",
    featured: true,
  },
  {
    category: "Cloud Engineering",
    title: "Cloud-Native Web Application",
    image: CloudImage,
    description:
      "A scalable Flask application deployed on Google Cloud with REST APIs, automated CI/CD pipelines, serverless email verification, and infrastructure managed using Terraform.",
    tech: ["Python", "Flask", "GCP", "Terraform", "CI/CD"],
    link: "/projects/cloud-native-web-app",
  },
  {
    category: "Computer Vision",
    title: "Social Distance & Face Mask Tracker",
    image: FaceMaskTrackerImage,
    description:
      "A real-time computer vision system that detects face-mask usage and social-distancing violations from video streams using deep-learning and geometric techniques.",
    tech: ["Python", "OpenCV", "Deep Learning"],
    link: "/projects/social-distance-tracker",
  },
  {
    category: "Full-Stack Development",
    title: "Connect Engine",
    image: SocialMediaImage,
    description:
      "A MERN-stack social media platform with secure authentication, personalized content feeds, real-time posting, administration tools, and responsive user experiences.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    link: "/projects/connect-engine",
  },
  {
    category: "Database Systems",
    title: "Car Rental System",
    image: CarRentalImage,
    description:
      "A database-driven rental management system using optimized SQL design, views, stored procedures, indexes, triggers, encryption, CRUD interfaces, and Power BI visualization.",
    tech: ["SQL", "JavaScript", "Power BI", "Database Design"],
    link: "/projects/car-rental-system",
  },
  {
    category: "Information Systems",
    title: "Day Care Management System",
    image: DaycareImage,
    description:
      "A Java-based student information system for managing records, immunization data, performance tracking, and CSV-based data operations through a desktop interface.",
    tech: ["Java", "Swing", "SQL", "CSV"],
    link: "/projects/day-care-system",
  },
  {
    category: "Web Engineering · AI",
    title: "Pro Shop",
    image: ProShopImage,
    description:
      "A full-stack e-commerce application featuring product management, simulated PayPal transactions, reviews, and sentiment analysis to surface positive and negative customer feedback.",
    tech: ["React", "Node.js", "MongoDB", "PayPal", "NLP"],
    link: "/projects/pro-shop",
  },
];

const experiences = [
  {
    year: "2024",
    company: "Mindlance Inc.",
    role: "Software Development Engineer Intern",
    logo: mindlanceLogo,
    description:
      "Developed backend services in Golang for an automated job-application platform, including APIs, asynchronous processing, workflow automation, scheduling, and reliability improvements.",
    tech: ["Golang", "Backend", "REST APIs", "Automation"],
  },
  {
    year: "2021 — 2023",
    company: "Accenture",
    role: "Application Development Analyst",
    logo: accentureLogo,
    description:
      "Built and enhanced enterprise applications using Java, Spring Boot, authentication systems, REST APIs, MVC frameworks, and responsive interfaces.",
    tech: ["Java", "Spring Boot", "REST APIs", "Enterprise Systems"],
  },
  {
    year: "2020",
    company: "CS Soft Solutions",
    role: "Software Development Intern",
    logo: CsSoftSolutionLogo,
    description:
      "Added dynamic functionality to the Diving Specials application and collaborated with the development team on user-facing software modules.",
    tech: [],
  },
  {
    year: "2019",
    company: "Tech Mahindra",
    role: "Software Development Intern",
    logo: mahindraLogo,
    description:
      "Worked on an ERP application for CPWD focused on workflow automation, task scheduling, and centralized information management.",
    tech: [],
  },
];

const certifications = [
  {
    slug: "google-cloud-associate-engineer",
    provider: "Google Cloud",
    title: "Associate Cloud Engineer",
    image: Certification1Image,
  },
  {
    slug: "azure-fundamentals",
    provider: "Microsoft Azure",
    title: "Azure Fundamentals",
    image: Certification2Image,
  },
  {
    slug: "azure-administrator",
    provider: "Microsoft Azure",
    title: "Azure Administrator",
    image: Certification3Image,
  },
];

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 30,
    });
  }, []);

  return (
    <Router>
      <div className="site">
        <header className="navbar">
          <div className="site-container navbar-inner">
            <Link to="/" className="site-logo">
              MP<span>.</span>
            </Link>

            <nav className="desktop-nav">
              <a href="/#interests">Interests</a>
              <a href="/#projects">Projects</a>
              <a href="/#experience">Experience</a>
              <a href="/#education">Education</a>

              <Link to="/about">
                About
              </Link>

              <Link to="/contact" className="nav-contact">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <main>
                {/* HERO */}
                <section className="hero">
                  <div className="hero-grid-background" />
                  <div className="hero-orb hero-orb-one" />
                  <div className="hero-orb hero-orb-two" />

                  <div className="site-container hero-layout">
                    <div
                      className="hero-copy"
                      data-aos="fade-up"
                    >
                      <div className="availability-badge">
                        <span />
                        Open to PhD research opportunities
                      </div>

                      <p className="eyebrow eyebrow-light">
                        SOFTWARE ENGINEER · RESEARCHER
                      </p>

                      <h1>
                        Mridula
                        <br />
                        <span>
                          Prabhakar.
                        </span>
                      </h1>

                      <p className="hero-main-copy">
                        Building reliable software systems across distributed
                        computing, cloud infrastructure, backend engineering,
                        and intelligent applications.
                      </p>

                      <p className="hero-support-copy">
                        I combine research-oriented problem solving with
                        practical engineering experience across academic
                        projects and production software environments.
                      </p>

                      <div className="hero-actions">
                        <a
                          href="#projects"
                          className="button button-primary"
                        >
                          Explore my work
                          <span>↗</span>
                        </a>

                        <Link
                          to="/contact"
                          className="button button-secondary"
                        >
                          Contact me
                        </Link>
                      </div>

                      <div className="hero-stats">
                        <div>
                          <strong>
                            7
                          </strong>

                          <span>
                            Technical projects
                          </span>
                        </div>

                        <div>
                          <strong>
                            4
                          </strong>

                          <span>
                            Engineering roles
                          </span>
                        </div>

                        <div>
                          <strong>
                            3
                          </strong>

                          <span>
                            Cloud certifications
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hero-visual"
                      data-aos="fade-left"
                    >
                      <div className="portrait-glow" />

                      <div className="portrait-frame">
                        <img
                          src={MridulaImage}
                          alt="Mridula Prabhakar"
                        />
                      </div>

                      <div className="floating-chip chip-one">
                        Distributed Systems
                      </div>

                      <div className="floating-chip chip-two">
                        Cloud Computing
                      </div>

                      <div className="floating-chip chip-three">
                        Backend Engineering
                      </div>
                    </div>
                  </div>
                </section>

                {/* EXPERTISE STRIP */}
                <section className="expertise-strip">
                  <div className="site-container expertise-strip-inner">
                    <span>
                      Distributed Systems
                    </span>

                    <span>
                      Cloud Computing
                    </span>

                    <span>
                      Software Architecture
                    </span>

                    <span>
                      Computer Vision
                    </span>

                    <span>
                      Backend Engineering
                    </span>
                  </div>
                </section>

                {/* INTERESTS */}
                <section
                  id="interests"
                  className="section section-light"
                >
                  <div className="site-container">
                    <div className="section-heading">
                      <div>
                        <p className="eyebrow">
                          RESEARCH & TECHNICAL INTERESTS
                        </p>

                        <h2>
                          Exploring problems across
                          <span>
                            {" "}software and systems.
                          </span>
                        </h2>
                      </div>

                      <p className="section-description">
                        My interests span reliable distributed software,
                        scalable cloud platforms, backend architecture,
                        intelligent applications, and software systems that
                        operate under real-world constraints.
                      </p>
                    </div>

                    <div className="interests-grid">
                      {interests.map((interest) => (
                        <article
                          className={`interest-card interest-${interest.variant}`}
                          key={interest.number}
                          data-aos="fade-up"
                        >
                          <span className="card-number">
                            {interest.number}
                          </span>

                          <div>
                            <h3>
                              {interest.title}
                            </h3>

                            <p>
                              {interest.description}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>

                {/* PROJECTS */}
                <section
                  id="projects"
                  className="section section-dark projects-section"
                >
                  <div className="site-container">
                    <div className="section-heading section-heading-dark">
                      <div>
                        <p className="eyebrow eyebrow-light">
                          SELECTED PROJECTS
                        </p>

                        <h2>
                          Engineering and research
                          <span>
                            {" "}across multiple domains.
                          </span>
                        </h2>
                      </div>

                      <p className="section-description">
                        Selected work spanning distributed systems,
                        cloud infrastructure, database engineering,
                        computer vision, full-stack systems, and applied AI.
                      </p>
                    </div>

                    <div className="projects-grid">
                      {projects.map((project, index) => (
                        <article
                          className={`project-card ${
                            project.featured
                              ? "project-card-featured"
                              : ""
                          }`}
                          key={project.title}
                          data-aos="fade-up"
                        >
                          <div className="project-image">
                            <img
                              src={project.image}
                              alt={project.title}
                            />

                            <div className="project-overlay" />

                            <span className="project-number">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="project-category">
                              {project.category}
                            </span>
                          </div>

                          <div className="portfolio-project-content">
                            {project.featured && (
                              <span className="featured-project-label">
                                Featured Research Project
                              </span>
                            )}

                            <h3>
                              {project.title}
                            </h3>

                            <p>
                              {project.description}
                            </p>

                            <div className="tag-list dark-tags">
                              {project.tech.map((technology) => (
                                <span key={technology}>
                                  {technology}
                                </span>
                              ))}
                            </div>

                            <Link
                              to={project.link}
                              className="project-link"
                            >
                              View project
                              <span>↗</span>
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>

                {/* EXPERIENCE */}
                <section
                  id="experience"
                  className="section section-light"
                >
                  <div className="site-container">
                    <div className="section-heading">
                      <div>
                        <p className="eyebrow">
                          PROFESSIONAL EXPERIENCE
                        </p>

                        <h2>
                          Engineering in
                          <span>
                            {" "}production environments.
                          </span>
                        </h2>
                      </div>

                      <p className="section-description">
                        Professional work across backend development,
                        enterprise systems, workflow automation, APIs,
                        platform migration, and production software delivery.
                      </p>
                    </div>

                    <div className="experience-list">
                      {experiences.map((experience) => (
                        <article
                          className="experience-row"
                          key={`${experience.company}-${experience.year}`}
                          data-aos="fade-up"
                        >
                          <div className="experience-year">
                            {experience.year}
                          </div>

                          <div className="experience-timeline">
                            <span />
                          </div>

                          <div className="experience-card">
                            <div className="experience-heading">
                              <div className="company-logo">
                                <img
                                  src={experience.logo}
                                  alt={`${experience.company} logo`}
                                />
                              </div>

                              <div>
                                <p>
                                  {experience.company}
                                </p>

                                <h3>
                                  {experience.role}
                                </h3>
                              </div>
                            </div>

                            <p className="experience-description">
                              {experience.description}
                            </p>

                            {experience.tech.length > 0 && (
                              <div className="tag-list light-tags">
                                {experience.tech.map((technology) => (
                                  <span key={technology}>
                                    {technology}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>

                {/* EDUCATION */}
                <section
                  id="education"
                  className="section education-section"
                >
                  <div className="site-container">
                    <div className="simple-heading">
                      <p className="eyebrow">
                        EDUCATION
                      </p>

                      <h2>
                        Academic
                        <span>
                          {" "}foundation.
                        </span>
                      </h2>
                    </div>

                    <div className="education-grid">
                      <article
                        className="education-card education-featured"
                        data-aos="fade-up"
                      >
                        <span className="education-year">
                          2023 — 2025
                        </span>

                        <h3>
                          Northeastern University
                        </h3>

                        <h4>
                          Master of Science in Software Engineering Systems
                        </h4>

                        <p className="school-location">
                          Boston, Massachusetts
                        </p>

                        <div className="education-divider" />

                        <p className="education-copy">
                          Graduate study spanning cloud computing, software
                          architecture, databases, object-oriented design, and
                          modern software engineering systems.
                        </p>

                        <div className="tag-list education-dark-tags">
                          <span>
                            Cloud Computing
                          </span>

                          <span>
                            Architecture
                          </span>

                          <span>
                            Databases
                          </span>

                          <span>
                            Systems
                          </span>
                        </div>
                      </article>

                      <article
                        className="education-card"
                        data-aos="fade-up"
                      >
                        <span className="education-year">
                          2017 — 2021
                        </span>

                        <h3>
                          Guru Gobind Singh Indraprastha University
                        </h3>

                        <h4>
                          Bachelor of Technology in Computer Science
                        </h4>

                        <p className="school-location">
                          New Delhi, India
                        </p>

                        <div className="education-divider" />

                        <p className="education-copy">
                          Studied algorithms, data structures, databases,
                          operating systems, Java, and software development.
                        </p>

                        <div className="tag-list light-tags">
                          <span>
                            Algorithms
                          </span>

                          <span>
                            Data Structures
                          </span>

                          <span>
                            Operating Systems
                          </span>

                          <span>
                            Java
                          </span>
                        </div>
                      </article>
                    </div>
                  </div>
                </section>

                {/* CERTIFICATIONS */}
                <section
                  id="certifications"
                  className="section section-light"
                >
                  <div className="site-container">
                    <div className="simple-heading">
                      <p className="eyebrow">
                        CERTIFICATIONS
                      </p>

                      <h2>
                        Cloud &
                        <span>
                          {" "}platform expertise.
                        </span>
                      </h2>
                    </div>

                    <div className="certifications-grid">
                      {certifications.map((certification) => (
                        <Link
                          to={`/certifications/${certification.slug}`}
                          className="certification-card"
                          key={certification.title}
                        >
                          <div className="certification-image">
                            <img
                              src={certification.image}
                              alt={certification.title}
                            />
                          </div>

                          <p>
                            {certification.provider}
                          </p>

                          <h3>
                            {certification.title}
                          </h3>

                          <span>
                            View certification ↗
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>

                {/* RECOGNITION */}
                <section className="section recognition-section">
                  <div className="site-container">
                    <div className="simple-heading dark-heading">
                      <p className="eyebrow eyebrow-light">
                        LEADERSHIP & RECOGNITION
                      </p>

                      <h2>
                        Beyond
                        <span>
                          {" "}engineering.
                        </span>
                      </h2>
                    </div>

                    <div className="recognition-grid">
                      <article className="recognition-card">
                        <span>
                          01
                        </span>

                        <h3>
                          Excellence Award
                        </h3>

                        <p>
                          Recognized for high-quality delivery during a
                          high-stakes application migration and platform
                          transition.
                        </p>
                      </article>

                      <article className="recognition-card">
                        <span>
                          02
                        </span>

                        <h3>
                          IEEE & Rotaract Leadership
                        </h3>

                        <p>
                          Organized technical events, hackathons, and
                          community initiatives through student leadership
                          roles.
                        </p>
                      </article>

                      <article className="recognition-card">
                        <span>
                          03
                        </span>

                        <h3>
                          Badminton Gold Medalist
                        </h3>

                        <p>
                          Led the women's badminton team and competed in
                          inter-college tournaments during undergraduate
                          study.
                        </p>
                      </article>
                    </div>
                  </div>
                </section>

                {/* FINAL CTA */}
                <section className="final-cta">
                  <div className="final-grid" />

                  <div className="site-container final-cta-content">
                    <p className="eyebrow eyebrow-light">
                      RESEARCH · ENGINEERING · COLLABORATION
                    </p>

                    <h2>
                      Let's build and study
                      <span>
                        {" "}better software systems.
                      </span>
                    </h2>

                    <p>
                      I'm interested in PhD opportunities and research
                      collaborations across software engineering, distributed
                      systems, cloud computing, and reliable intelligent
                      systems.
                    </p>

                    <Link
                      to="/contact"
                      className="button button-primary"
                    >
                      Get in touch
                      <span>↗</span>
                    </Link>
                  </div>
                </section>
              </main>
            }
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/projects/self-healing-agent-infrastructure"
            element={<SelfHealingProjectPage />}
          />

          <Route
            path="/projects/cloud-native-web-app"
            element={<CloudProjectPage />}
          />

          <Route
            path="/projects/car-rental-system"
            element={<CarRentalPage />}
          />

          <Route
            path="/projects/day-care-system"
            element={<DaycarePage />}
          />

          <Route
            path="/projects/social-distance-tracker"
            element={<SocialDistancePage />}
          />

          <Route
            path="/projects/pro-shop"
            element={<ProShopPage />}
          />

          <Route
            path="/projects/connect-engine"
            element={<ConnectEnginePage />}
          />

          <Route
            path="/certifications/:slug"
            element={<CertificationPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;