
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

import MridulaImage from "./assets/images/Mridula_Prabhakar.jpg";
import TrustCampusImage from "./assets/images/software.avif";
import VeraSEImage from "./assets/images/programming.jpg";
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

import AboutPage from "./pages/AboutPage.js";
import TrustCampusProjectPage from "./pages/TrustCampusProjectPage.js";
import VeraSEProjectPage from "./pages/VeraSEProjectPage.js";
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
    title: "Trustworthy AI & RAG",
    description:
      "Evidence-aware retrieval, answerability, selective prediction, abstention, and reliable evaluation of language-model systems.",
    variant: "dark",
  },
  {
    number: "02",
    title: "Software Reliability & Repair",
    description:
      "Verification-guided software repair, autonomous debugging, behavioral validation, and risk-aware decisions in AI-assisted systems.",
    variant: "light",
  },
  {
    number: "03",
    title: "Distributed Systems",
    description:
      "Fault tolerance, workflow orchestration, self-healing infrastructure, adaptive recovery, and reliable execution across distributed services.",
    variant: "accent",
  },
  {
    number: "04",
    title: "Cloud & Backend Systems",
    description:
      "Scalable backend services, cloud-native applications, APIs, infrastructure automation, and production software architecture.",
    variant: "light",
  },
];

const projects = [
  {
    category: "Trustworthy AI · RAG · Research",
    title: "TRUST-Campus",
    image: TrustCampusImage,
    description:
      "An evidence-aware RAG research system evaluated against three baselines on 50 frozen university-policy questions. Achieved 82% answer/abstain decision accuracy and 42% coverage, with a documented false-acceptance trade-off.",
    tech: [
      "Python",
      "RAG",
      "LLMs",
      "Evidence Sufficiency",
      "Selective Answering",
      "Streamlit",
    ],
    link: "/projects/trust-campus",
    featured: true,
  },
  {
    category: "AI for Software Engineering · Research",
    title: "VERA-SE",
    image: VeraSEImage,
    description:
      "A verification-guided autonomous software repair framework that evaluates LLM-generated patches using behavioral tests, structural checks, and risk-aware acceptance decisions.",
    tech: [
      "Python",
      "LLMs",
      "Program Repair",
      "Verification",
      "Software Testing",
    ],
    link: "/projects/vera-se",
    featured: true,
  },
  {
    category: "Distributed Systems · Research",
    title: "Self-Healing Agent Infrastructure",
    image: SelfHealingImage,
    description:
      "An experimental Go-based workflow orchestration system comparing automated recovery policies across 2,000 workflow executions. Fixed Retry achieved the highest mean success rate of 84.4%, highlighting trade-offs in adaptive recovery.",
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
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
    ],
    link: "/projects/connect-engine",
  },
  {
    category: "Database Systems",
    title: "Car Rental System",
    image: CarRentalImage,
    description:
      "A database-driven rental management system using optimized SQL design, views, stored procedures, indexes, triggers, encryption, CRUD interfaces, and Power BI visualization.",
    tech: [
      "SQL",
      "JavaScript",
      "Power BI",
      "Database Design",
    ],
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
      "A full-stack e-commerce application featuring product management, simulated PayPal transactions, reviews, and sentiment analysis to surface customer feedback.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "PayPal",
      "NLP",
    ],
    link: "/projects/pro-shop",
  },
];

const experiences = [
  {
    year: "2026 — Present",
    company: "Mindlance Inc.",
    role: "Software Development Engineer",
    logo: mindlanceLogo,
    description:
      "Developing enterprise applications and backend services across SaaS modules, working with APIs, relational databases, software validation, reliability improvements, and production debugging.",
    tech: [
      "Golang",
      "REST APIs",
      "PostgreSQL",
      "React",
    ],
  },
  {
    year: "2024",
    company: "Mindlance Inc.",
    role: "Software Development Engineer Intern",
    logo: mindlanceLogo,
    description:
      "Developed Golang backend services for an automated job-application platform, including APIs, asynchronous processing, workflow automation, scheduling, and reliability improvements.",
    tech: [
      "Golang",
      "Backend",
      "REST APIs",
      "Automation",
    ],
  },
  {
    year: "2021 — 2023",
    company: "Accenture",
    role: "Application Development Analyst",
    logo: accentureLogo,
    description:
      "Built and enhanced enterprise applications using Java, Spring Boot, authentication systems, REST APIs, MVC frameworks, and responsive interfaces.",
    tech: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Enterprise Systems",
    ],
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

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid-background" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="site-container hero-layout">
          <div className="hero-copy" data-aos="fade-up">
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
              <span>Prabhakar.</span>
            </h1>

            <p className="hero-main-copy">
              Researching trustworthy and autonomous software
              systems across AI reliability, software verification,
              distributed computing, and intelligent infrastructure.
            </p>

            <p className="hero-support-copy">
              My independent research spans three evaluated systems:
              TRUST-Campus for evidence-aware question answering,
              VERA-SE for verification-guided software repair,
              and self-healing workflow orchestration. I connect
              these interests with experience building production
              software.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <span>↗</span>
              </a>

              <Link to="/contact" className="button button-secondary">
                Contact me
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <strong>3</strong>
                <span>Research projects</span>
              </div>

              <div>
                <strong>220+</strong>
                <span>Students supported</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Cloud certifications</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" data-aos="fade-left">
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img
                src={MridulaImage}
                alt="Mridula Prabhakar"
              />
            </div>

            <div className="floating-chip chip-one">
              Trustworthy AI
            </div>

            <div className="floating-chip chip-two">
              Software Reliability
            </div>

            <div className="floating-chip chip-three">
              Distributed Systems
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-strip">
        <div className="site-container expertise-strip-inner">
          <span>Trustworthy AI</span>
          <span>Software Reliability</span>
          <span>Distributed Systems</span>
          <span>Cloud Computing</span>
          <span>Backend Engineering</span>
        </div>
      </section>

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
                Exploring reliable
                <span> AI and software systems.</span>
              </h2>
            </div>

            <p className="section-description">
              My research interests center on trustworthy AI,
              software reliability, autonomous program repair,
              distributed systems, and intelligent software that
              must make dependable decisions under uncertainty.
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
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
                Research-driven systems
                <span> built for reliability.</span>
              </h2>
            </div>

            <p className="section-description">
              Selected research and engineering work spanning
              trustworthy AI, software reliability, autonomous
              repair, distributed systems, cloud infrastructure,
              and production software engineering.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card ${
                  project.featured ? "project-card-featured" : ""
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

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

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
                    View project <span>↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
                <span> production environments.</span>
              </h2>
            </div>

            <p className="section-description">
              Professional experience developing enterprise
              applications, backend services, distributed workflows,
              and software infrastructure.
            </p>
          </div>

          <div className="experience-grid">
            {experiences.map((experience, index) => (
              <article
                className="experience-card"
                key={`${experience.company}-${experience.year}`}
                data-aos="fade-up"
                data-aos-delay={index * 40}
              >
                <div className="experience-card-top">
                  <span className="experience-year">
                    {experience.year}
                  </span>

                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                  />
                </div>

                <h3>{experience.company}</h3>
                <h4>{experience.role}</h4>
                <p>{experience.description}</p>

                <div className="tag-list light-tags">
                  {experience.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="education"
        className="section section-light education-section"
      >
        <div className="site-container">
          <div className="simple-heading">
            <p className="eyebrow">
              EDUCATION
            </p>

            <h2>
              Academic
              <span> foundations.</span>
            </h2>
          </div>

          <div className="education-grid">
            <article className="education-card" data-aos="fade-up">
              <span className="education-year">
                2023 — 2025
              </span>

              <h3>Northeastern University</h3>
              <h4>
                Master of Science in Computer Software Engineering
              </h4>

              <p className="school-location">
                Boston, Massachusetts
              </p>

              <div className="education-divider" />

              <p className="education-copy">
                Graduate study in software engineering, software
                architecture, object-oriented design, databases,
                and scalable application development.
              </p>

              <div className="tag-list light-tags">
                <span>Software Engineering</span>
                <span>System Design</span>
                <span>Databases</span>
                <span>Software Architecture</span>
              </div>
            </article>

            <article className="education-card" data-aos="fade-up">
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
                <span>Algorithms</span>
                <span>Data Structures</span>
                <span>Operating Systems</span>
                <span>Java</span>
              </div>
            </article>
          </div>
        </div>
      </section>

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
              <span> platform expertise.</span>
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

                <p>{certification.provider}</p>
                <h3>{certification.title}</h3>

                <span>
                  View certification ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section recognition-section">
        <div className="site-container">
          <div className="simple-heading dark-heading">
            <p className="eyebrow eyebrow-light">
              ACADEMIC LEADERSHIP & RECOGNITION
            </p>

            <h2>
              Teaching, mentorship &
              <span> community leadership.</span>
            </h2>
          </div>

          <div className="recognition-grid">
            <article
              className="recognition-card"
              data-aos="fade-up"
            >
              <span>01</span>
              <h3>Graduate Teaching & Mentorship</h3>

              <p>
                Served as a Graduate Lead Teaching Assistant
                and Teaching Assistant at Northeastern University,
                supporting and mentoring more than 220 students
                across graduate-level coursework.
              </p>
            </article>

            <article
              className="recognition-card"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <span>02</span>
              <h3>Teaching Assistant Peer Mentor</h3>

              <p>
                Selected as a TA Peer Mentor, supporting
                approximately 200 teaching assistants through
                onboarding, guidance, peer support, and academic
                community development.
              </p>
            </article>

            <article
              className="recognition-card"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <span>03</span>
              <h3>Professional & Technical Leadership</h3>

              <p>
                Recognized for engineering contributions and
                involved in technical, student leadership, and
                community initiatives.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-grid" />

        <div className="site-container final-cta-content">
          <p className="eyebrow eyebrow-light">
            RESEARCH · ENGINEERING · COLLABORATION
          </p>

          <h2>
            Let's build and study
            <span> reliable intelligent systems.</span>
          </h2>

          <p>
            I'm interested in PhD opportunities and research
            collaborations across trustworthy AI, software
            reliability, autonomous software systems, distributed
            systems, and intelligent infrastructure.
          </p>

          <Link
            to="/contact"
            className="button button-primary"
          >
            Get in touch <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

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
              <Link to="/about">About</Link>

              <Link
                to="/contact"
                className="nav-contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route
            path="/projects/trust-campus"
            element={<TrustCampusProjectPage />}
          />

          <Route
            path="/projects/vera-se"
            element={<VeraSEProjectPage />}
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
