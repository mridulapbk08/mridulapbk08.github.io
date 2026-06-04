import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import "./App.css";

// Import images
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

// Import pages
import AboutPage from "./pages/AboutPage.js";
import SelfHealingProjectPage from "./pages/SelfHealingProjectPage.js";
import CloudProjectPage from "./pages/CloudProjectPage.js";
import CarRentalPage from "./pages/CarRentalProjectPage.js";
import DaycarePage from "./pages/DayCareProjectPage.js";
import SocialDistancePage from "./pages/SocialDistanceProjectPage.js";
import ProShopPage from "./pages/ProShopProjectPage.js";
import ConnectEnginePage from "./pages/ConnectEngineProjectPage.js";
import ContactPage from "./pages/ContactPage.js";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const container = document.querySelector(".container-2");

    if (container) {
      if (!menuOpen) {
        container.classList.add("sections-moved");
      } else {
        container.classList.remove("sections-moved");
      }
    }
  };

  return (
    <Router>
      <div className="container">
        <header className="header" data-aos="fade-down">
          <div className="logo">Mridula Prabhakar</div>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <div className="container-2">
                <section id="home" className="hero" data-aos="fade-up">
                  <div className="hero-content">
                    <img
                      src={MridulaImage}
                      alt="Mridula Prabhakar"
                      className="profile-pic"
                      data-aos="zoom-in"
                    />

                    <div className="intro">
                      <h1 data-aos="fade-up">Hi, I'm Mridula Prabhakar</h1>

                      <h2
                        className="hero-headline"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        Software Development Engineer
                      </h2>

                      <p
                        className="hero-subtitle"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        I design intuitive, user-centered digital products by
                        blending UX design principles with strong engineering
                        foundations. My work focuses on creating meaningful,
                        accessible, and scalable experiences across enterprise
                        systems, automation platforms, and consumer web apps.
                      </p>

                      <div
                        className="hero-cta"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <a href="#projects" className="btn-primary">
                          View My Work
                        </a>
                        <Link to="/contact" className="btn-secondary">
                          Contact Me
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="about" className="about" data-aos="fade-right">
                  <h2>About</h2>
                  <p>
                    I’m a UX-focused Software Engineer currently pursuing my
                    Master of Science in Software Engineering Systems at
                    Northeastern University in Boston. I enjoy working at the
                    intersection of design and technology—translating complex
                    requirements into intuitive, user-centered digital
                    experiences.
                    <br />
                    <br />
                    My work emphasizes research-driven decisions, clear visual
                    communication, and designing for real-world constraints.
                    Throughout roles at Accenture, Mindlance, and academic
                    projects, I’ve collaborated with cross-functional teams to
                    build scalable, thoughtful solutions that improve workflows
                    and user satisfaction.
                  </p>

                  <Link to="/about" className="about-link">
                    Read full about page →
                  </Link>
                </section>

                <section id="experience" className="experience">
                  <h2 data-aos="fade-left">Experience</h2>

                  <div className="experience-content">
                    <div className="experience-item" data-aos="fade-up">
                      <div className="experience-left">
                        <p className="experience-dates">Sep 2024 - Dec 2024</p>
                        <p className="experience-role">
                          Software Development Engineer Intern
                        </p>
                      </div>

                      <div className="divider"></div>

                      <div className="experience-right">
                        <div className="experience-header">
                          <img
                            src={mindlanceLogo}
                            alt="Mindlance Logo"
                            className="experience-logo"
                          />
                          <h3>Mindlance Inc., New Jersey, USA</h3>
                        </div>
                        <p>
                          I played a key role in the development of an automated
                          job application web app designed to improve efficiency
                          and user experience. My work involved creating a
                          reliable backend using Golang, enabling faster data
                          processing and efficient task management.
                        </p>
                      </div>
                    </div>

                    <div className="experience-item" data-aos="fade-up">
                      <div className="experience-left">
                        <p className="experience-dates">Oct 2021 - Sept 2023</p>
                        <p className="experience-role">
                          Application Development Analyst
                        </p>
                      </div>

                      <div className="divider"></div>

                      <div className="experience-right">
                        <div className="experience-header">
                          <img
                            src={accentureLogo}
                            alt="Accenture Logo"
                            className="experience-logo"
                          />
                          <h3>Accenture, Gurugram, India</h3>
                        </div>
                        <p>
                          Contributed to the creation and enhancement of digital
                          platforms using Java, Spring Boot, MVC frameworks, and
                          other technologies. My responsibilities included
                          building responsive interfaces, implementing secure
                          authentication systems, and engineering APIs.
                        </p>
                      </div>
                    </div>

                    <div className="experience-item" data-aos="fade-up">
                      <div className="experience-left">
                        <p className="experience-dates">June 2020 - July 2020</p>
                        <p className="experience-role">
                          Software Development Intern
                        </p>
                      </div>

                      <div className="divider"></div>

                      <div className="experience-right">
                        <div className="experience-header">
                          <img
                            src={CsSoftSolutionLogo}
                            alt="CS SOFT Solutions Logo"
                            className="experience-logo"
                          />
                          <h3>CS SOFT Solutions, Mohali, Punjab</h3>
                        </div>
                        <p>
                          Introduced dynamic features to enhance the
                          functionality of the Diving Specials application and
                          collaborated with the development team to optimize
                          user-facing modules.
                        </p>
                      </div>
                    </div>

                    <div className="experience-item" data-aos="fade-up">
                      <div className="experience-left">
                        <p className="experience-dates">June 2019 - Aug 2019</p>
                        <p className="experience-role">
                          Software Development Intern
                        </p>
                      </div>

                      <div className="divider"></div>

                      <div className="experience-right">
                        <div className="experience-header">
                          <img
                            src={mahindraLogo}
                            alt="Tech Mahindra Logo"
                            className="experience-logo"
                          />
                          <h3>Tech Mahindra, New Delhi, India</h3>
                        </div>
                        <p>
                          Implemented an ERP application to automate workflow
                          processes for CPWD, focusing on task scheduling,
                          centralized data management, and operational
                          efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  id="education"
                  className="education"
                  data-aos="fade-left"
                >
                  <h2>Education</h2>

                  <div className="education-content">
                    <div className="education-item" data-aos="zoom-in">
                      <div className="education-left">
                        <p className="education-dates">Sept 2023 - Dec 2025</p>
                        <p className="education-degree">Master's Degree</p>
                      </div>

                      <div className="divider"></div>

                      <div className="education-right">
                        <h3>Northeastern University, Boston, MA</h3>
                        <p>
                          Currently pursuing a Master of Science in Software
                          Engineering Systems. My studies emphasize web design,
                          cloud computing, database management, user experience
                          engineering, and object-oriented design.
                        </p>
                      </div>
                    </div>

                    <div className="education-item" data-aos="zoom-in">
                      <div className="education-left">
                        <p className="education-dates">Sept 2017 - Aug 2021</p>
                        <p className="education-degree">Bachelor's Degree</p>
                      </div>

                      <div className="divider"></div>

                      <div className="education-right">
                        <h3>
                          Guru Gobind Singh Indraprastha University, New Delhi,
                          India
                        </h3>
                        <p>
                          Graduated with a Bachelor of Technology in Computer
                          Science, with coursework in Java, data structures,
                          algorithms, databases, operating systems, and software
                          development.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="projects" className="projects" data-aos="fade-up">
                  <h2>Recent Projects</h2>

                  <div className="projects-content">
                    <div className="project-item" data-aos="zoom-in">
                      <img
                        src={SelfHealingImage}
                        alt="Self-Healing Agent Infrastructure"
                        className="project-image"
                      />
                      <div className="project-description">
                        <h3 className="project-title">
                          Self-Healing Agent Infrastructure
                        </h3>

                        <p className="project-role">
                          <strong>Role:</strong> Backend & Distributed Systems
                          Engineer
                        </p>

                        <p className="project-meta">
                          <strong>Timeline:</strong> Jan 2026 – May 2026
                        </p>

                        <p className="project-meta">
                          <strong>Team:</strong> 1
                        </p>

                        <p className="project-metric">
                          <strong>Impact:</strong> Processed 620+ workflow
                          executions, achieving 84.5% workflow success rates
                          and automatically recovering 239 failed tasks.
                        </p>

                        <p className="project-tech">
                          <strong>Tech Stack:</strong> Golang, Redis,
                          PostgreSQL, Docker, Next.js, Recharts
                        </p>

                        <p className="project-problem">
                          <strong>Problem:</strong> Distributed workflows needed
                          automatic recovery from task failures and worker
                          crashes without manual intervention.
                        </p>

                        <Link
                          to="/projects/self-healing-agent-infrastructure"
                          className="project-link"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>

                    <div className="project-item" data-aos="zoom-in">
                      <img
                        src={CloudImage}
                        alt="Cloud Native Web App"
                        className="project-image"
                      />
                      <div className="project-description">
                        <h3 className="project-title">Cloud Native Web App</h3>
                        <p className="project-role">
                          <strong>Role:</strong> Cloud & Backend Engineer
                        </p>
                        <p className="project-meta">
                          <strong>Timeline:</strong> Jan 2024 – Apr 2024
                        </p>
                        <p className="project-meta">
                          <strong>Team:</strong> 1
                        </p>
                        <p className="project-metric">
                          <strong>Impact:</strong> Automated deployments and
                          standardized infrastructure, significantly reducing
                          manual setup and release effort.
                        </p>
                        <p className="project-tech">
                          <strong>Tech Stack:</strong> Python Flask, Google
                          Cloud Platform, Terraform, CI/CD pipelines
                        </p>
                        <p className="project-problem">
                          <strong>Problem:</strong> Teams needed a scalable,
                          cloud-native backend that could be deployed reliably
                          without manual infrastructure changes.
                        </p>
                        <Link
                          to="/projects/cloud-native-web-app"
                          className="project-link"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>

                    <div className="project-item" data-aos="zoom-in">
                      <img
                        src={CarRentalImage}
                        alt="Car Rental System"
                        className="project-image"
                      />
                      <div className="project-description">
                        <h3 className="project-title">Car Rental System</h3>
                        <p className="project-role">
                          <strong>Role:</strong> Full-Stack Developer
                        </p>
                        <p className="project-meta">
                          <strong>Timeline:</strong> Jan 2024 – Apr 2024
                        </p>
                        <p className="project-meta">
                          <strong>Team:</strong> 3
                        </p>
                        <p className="project-metric">
                          <strong>Impact:</strong> Centralized vehicle,
                          customer, and booking data, reducing manual tracking.
                        </p>
                        <p className="project-tech">
                          <strong>Tech Stack:</strong> Java, Spring Boot, SQL,
                          REST APIs
                        </p>
                        <p className="project-problem">
                          <strong>Problem:</strong> Rental businesses needed a
                          single system to manage inventory, customers, and
                          transactions.
                        </p>
                        <Link
                          to="/projects/car-rental-system"
                          className="project-link"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>

                    <div className="project-item" data-aos="zoom-in">
                      <img
                        src={DaycareImage}
                        alt="Day Care System"
                        className="project-image"
                      />
                      <div className="project-description">
                        <h3 className="project-title">Day Care System</h3>
                        <p className="project-role">
                          <strong>Role:</strong> Backend Developer & Data
                          Modeler
                        </p>
                        <p className="project-meta">
                          <strong>Timeline:</strong> Oct 2023 - Dec 2023
                        </p>
                        <p className="project-meta">
                          <strong>Team:</strong> 3
                        </p>
                        <p className="project-metric">
                          <strong>Impact:</strong> Digitized student profiles
                          and immunization records to improve compliance
                          tracking.
                        </p>
                        <p className="project-tech">
                          <strong>Tech Stack:</strong> Java, Spring, REST
                          services, SQL database
                        </p>
                        <p className="project-problem">
                          <strong>Problem:</strong> Daycare centers relied on
                          spreadsheets and paperwork to manage student data.
                        </p>
                        <Link
                          to="/projects/day-care-system"
                          className="project-link"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>

                    <div className="project-item" data-aos="zoom-in">
                      <img
                        src={FaceMaskTrackerImage}
                        alt="Social Distance Tracker"
                        className="project-image"
                      />
                      <div className="project-description">
                        <h3 className="project-title">
                          Social Distance Tracker
                        </h3>
                        <p className="project-role">
                          <strong>Role:</strong> Computer Vision Developer
                        </p>
                        <p className="project-meta">
                          <strong>Timeline:</strong> Jan 2021 - Mar 2021
                        </p>
                        <p className="project-meta">
                          <strong>Team:</strong> 2
                        </p>
                        <p className="project-metric">
                          <strong>Impact:</strong> Provided real-time visual
                          feedback on mask and distancing violations.
                        </p>
                        <p className="project-tech">
                          <strong>Tech Stack:</strong> Python, OpenCV, machine
                          learning utilities
                        </p>
                        <p className="project-problem">
                          <strong>Problem:</strong> Organizations needed a way
                          to monitor compliance without manually reviewing
                          footage.
                        </p>
                        <Link
                          to="/projects/social-distance-tracker"
                          className="project-link"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>

                    <div className="project-item" data-aos="zoom-in">
                      <img
                        src={ProShopImage}
                        alt="Pro Shop"
                        className="project-image"
                      />
                      <div className="project-description">
                        <h3 className="project-title">Pro Shop</h3>
                        <p className="project-role">
                          <strong>Role:</strong> Full-Stack Developer
                        </p>
                        <p className="project-meta">
                          <strong>Timeline:</strong> Jun 2021 - Aug 2021
                        </p>
                        <p className="project-meta">
                          <strong>Team:</strong> 4
                        </p>
                        <p className="project-metric">
                          <strong>Impact:</strong> Designed an end-to-end
                          shopping flow with secure checkout and review
                          analysis.
                        </p>
                        <p className="project-tech">
                          <strong>Tech Stack:</strong> React, Node.js, Express,
                          MongoDB, Stripe, Python
                        </p>
                        <p className="project-problem">
                          <strong>Problem:</strong> Sports stores needed a
                          modern e-commerce experience with secure payments.
                        </p>
                        <Link to="/projects/pro-shop" className="project-link">
                          Learn More
                        </Link>
                      </div>
                    </div>

                    <div className="project-item" data-aos="zoom-in">
                      <img
                        src={SocialMediaImage}
                        alt="Connect Engine"
                        className="project-image"
                      />
                      <div className="project-description">
                        <h3 className="project-title">Connect Engine</h3>
                        <p className="project-role">
                          <strong>Role:</strong> Backend & Dashboard Developer
                        </p>
                        <p className="project-meta">
                          <strong>Timeline:</strong> Sep 2023 – Dec 2023
                        </p>
                        <p className="project-meta">
                          <strong>Team:</strong> 4
                        </p>
                        <p className="project-metric">
                          <strong>Impact:</strong> Unified engagement analytics
                          from multiple platforms into a single dashboard.
                        </p>
                        <p className="project-tech">
                          <strong>Tech Stack:</strong> React, Node.js, REST
                          APIs, MongoDB, analytics libraries
                        </p>
                        <p className="project-problem">
                          <strong>Problem:</strong> Social media teams needed a
                          single view of performance metrics.
                        </p>
                        <Link
                          to="/projects/connect-engine"
                          className="project-link"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="certification"
                  id="certification"
                  data-aos="fade-up"
                >
                  <h2>Certifications</h2>
                  <div className="certification-container">
                    <div className="certification-item" data-aos="zoom-in">
                      <img
                        src={Certification1Image}
                        alt="Certification 1"
                        className="certification-image-gcp"
                      />
                      <p>
                        <a
                          href="https://www.credential.net/8751610d-f100-42a8-830b-83320b268a78#acc.BoUTfKzS"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Cloud Practitioner Certification
                        </a>
                      </p>
                    </div>

                    <div
                      className="certification-item"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <img
                        src={Certification2Image}
                        alt="Certification 2"
                        className="certification-image-azure-fundamentals"
                      />
                      <p>
                        <a
                          href="https://www.credly.com/badges/3ca5d54b-a780-4af8-85f7-b3c988613943/linked_in_profile"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Azure Fundamentals Certification
                        </a>
                      </p>
                    </div>

                    <div
                      className="certification-item"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <img
                        src={Certification3Image}
                        alt="Certification 3"
                        className="certification-image-azure-administrator"
                      />
                      <p>
                        <a
                          href="https://www.credly.com/badges/05ffb555-e0fb-430d-9512-de62f6563ffd/public_url"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Azure Administrator Certification
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

                <section className="recognition" id="recognition" data-aos="fade-up">
                  <h2>Recognition</h2>

                  <div className="recognition-container">
                    <div className="recognition-card card-excellence" data-aos="zoom-in">
                      <h3>Excellence Award</h3>
                      <p>
                        During a high-stakes system transition, I supported
                        onboarding, testing, and deployment of critical
                        applications to a new platform, earning recognition for
                        high-quality delivery under pressure.
                      </p>
                    </div>

                    <div
                      className="recognition-card card-rotaract"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <h3>Rotaract and IEEE</h3>
                      <p>
                        Served as Director of International Services for the
                        Rotaract Club and IEEE Event Head, organizing hackathons,
                        technical events, and community initiatives.
                      </p>
                    </div>

                    <div
                      className="recognition-card card-badminton"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <h3>Gold Medalist Badminton</h3>
                      <p>
                        Led the Women’s Badminton Team during undergraduate
                        studies and won inter-college tournaments, building
                        discipline, teamwork, and leadership.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            }
          />

          <Route path="/about" element={<AboutPage />} />

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
          <Route path="/projects/day-care-system" element={<DaycarePage />} />
          <Route
            path="/projects/social-distance-tracker"
            element={<SocialDistancePage />}
          />
          <Route path="/projects/pro-shop" element={<ProShopPage />} />
          <Route
            path="/projects/connect-engine"
            element={<ConnectEnginePage />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;