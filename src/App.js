import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import Footer from "./Footer"; // Import Footer component

// Import images
import MridulaImage from "./assets/images/Mridula_Prabhakar.jpg";
import CloudImage from "./assets/images/cloud.webp";
import CarRentalImage from "./assets/images/cars.webp";
import DaycareImage from "./assets/images/daycare-software-system.jpg";
import FaceMaskTrackerImage from "./assets/images/face_mask_tracker.png";
import ProShopImage from "./assets/images/proshop.webp";
import SocialMediaImage from "./assets/images/social-media.webp";
import Certification1Image from "./assets/images/GCPCerti.jpeg";
import Certification2Image from "./assets/images/AzureFundamentals_Certification.png";
import Certification3Image from "./assets/images/AzureAdministrator_Certification.png";
import AboutPage from "./pages/AboutPage.js";

// Import pages
import CloudProjectPage from "./pages/CloudProjectPage.js";
import CarRentalPage from "./pages/CarRentalProjectPage.js";
import DaycarePage from "./pages/DayCareProjectPage.js";
import SocialDistancePage from "./pages/SocialDistanceProjectPage.js";
import ProShopPage from "./pages/ProShopProjectPage.js";
import ConnectEnginePage from "./pages/ConnectEngineProjectPage.js";
import ContactPage from "./pages/ContactPage.js";
import mindlanceLogo from "./assets/images/mindlance.png";
import accentureLogo from "./assets/images/accenture.png";
import CsSoftSolutionLogo from "./assets/images/solutions.png";
import mahindraLogo from "./assets/images/mahindra.png";
import "./App.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    // Initialize AOS library for scroll animations
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Run animation only once
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Get the container element
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
        {/* Header */}
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
              {/* <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li> */}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {/* <li><a href="#recognition">Recognition</a></li> */}
            </ul>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <div className="container-2">
                {/* Hero Section */}
                {/* Hero Section */}
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

                      {/* Professional Headline */}
                      <h2
                        className="hero-headline"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        Software Development Engineer
                      </h2>

                      {/* Value Proposition */}
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

                      {/* CTA Buttons */}
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

                {/* About Section */}
                {/* About Section (Preview) */}
                <section id="about" className="about" data-aos="fade-right">
                  <h2>About</h2>
                  <p>
                    I’m a UX-focused Software Engineer currently pursuing my
                    Master of Science in Software Engineering Systems at
                    Northeastern University in Boston. I enjoy working at the
                    intersection of design and technology—translating complex
                    requirements into intuitive, user-centered digital
                    experiences. With experience spanning enterprise systems,
                    automation platforms, cloud applications, and e-commerce
                    tools, I bring a balanced perspective of usability,
                    technical feasibility, and product thinking.
                    <br />
                    <br />
                    My work emphasizes research-driven decisions, clear visual
                    communication, and designing for real-world constraints.
                    Throughout roles at Accenture, Mindlance, and academic
                    projects, I’ve collaborated with cross-functional teams to
                    build scalable, thoughtful solutions that improve workflows
                    and user satisfaction. I’m passionate about creating
                    meaningful digital products that are not only functional,
                    but delightful and accessible.
                  </p>

                  <Link to="/about" className="about-link">
                    Read full about page →
                  </Link>
                </section>

                {/* Experience Section */}
                <section id="experience" className="experience">
                  <h2 data-aos="fade-left">Experience</h2>
                  <div className="experience-content">
                    {/* Mindlance */}
                    <div className="experience-item" data-aos="fade-up">
                      <div className="experience-left">
                        <p className="experience-dates">Oct 2023 - Present</p>
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
                          processing and efficient task management. I
                          implemented features like scheduling and retry
                          mechanisms to streamline application submissions and
                          reduce delays. Additionally, I developed systems for
                          handling tasks asynchronously with real-time tracking
                          and error management, ensuring the application was
                          fast, scalable, and easy to use.
                        </p>
                      </div>
                    </div>

                    {/* Accenture */}
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
                          authentication systems, and engineering APIs to
                          streamline payment processing. I collaborated closely
                          with clients through regular meetings to gather
                          requirements and feedback, ensuring user-centric
                          design principles were integrated throughout the
                          development process. Additionally, I documented system
                          functionality comprehensively, reducing onboarding
                          time for new team members and improving overall
                          project efficiency.
                        </p>
                      </div>
                    </div>

                    {/* CS SOFT Solutions */}
                    <div className="experience-item" data-aos="fade-up">
                      <div className="experience-left">
                        <p className="experience-dates">
                          June 2020 - July 2020
                        </p>
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
                          functionality of the Diving Specials application, a
                          platform for booking diving packages worldwide. I
                          collaborated with the development team to optimize the
                          V-log section and supported the implementation of core
                          functionalities under the guidance of the main
                          developer. This experience allowed me to refine my
                          technical skills, gain hands-on experience in
                          developing user-centric applications, and contribute
                          to building a more interactive and efficient platform.
                        </p>
                      </div>
                    </div>

                    {/* Tech Mahindra */}
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
                          Implemented a comprehensive ERP application to
                          automate the workflow processes of CPWD, New Delhi,
                          focusing on streamlining operations and minimizing
                          manual intervention. The application utilized advanced
                          Data Analytics for actionable insights, while Machine
                          Learning and AI tools optimized resource allocation
                          and enhanced efficiency. Key features included
                          automated task scheduling, real-time process
                          monitoring, and centralized data management, enabling
                          seamless collaboration across departments.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Education Section */}
                <section
                  id="education"
                  className="education"
                  data-aos="fade-left"
                >
                  <h2>Education</h2>
                  <div className="education-content">
                    <div className="education-item" data-aos="zoom-in">
                      <div className="education-left">
                        <p className="education-dates">Sept 2023 - Aug 2025</p>
                        <p className="education-degree">Master's Degree</p>
                      </div>
                      <div className="divider"></div>
                      <div className="education-right">
                        <h3>Northeastern University, Boston, MA</h3>
                        <p>
                          Currently pursuing a Master of Science in Software
                          Engineering Systems  with an expected graduation in
                          Aug 2025. My studies emphasize key areas like Web
                          Design, Cloud Computing, Database Management, User
                          Experience Engineering, Application Development, as
                          well as Program Structures and Object-oriented Design
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
                          Science, where I focused on coursework in Java
                          Programming, Data Mining, Operating Systems, Android
                          App Development, Database Management, Operating
                          Systems, Algorithm Design, and Data Structures.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Projects Section */}
                {/* Projects Section */}
                <section id="projects" className="projects" data-aos="fade-up">
                  <h2>Recent Projects</h2>
                  <div className="projects-content">
                    {/* Cloud Native Web App */}
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
                          <strong>Tech Stack:</strong> Python (Flask), Google
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

                    {/* Car Rental System */}
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
                          customer, and booking data, reducing manual
                          record-keeping and inconsistent tracking.
                        </p>
                        <p className="project-tech">
                          <strong>Tech Stack:</strong> Web app with REST APIs
                          and relational database (Java, Spring Boot, SQL)
                        </p>
                        <p className="project-problem">
                          <strong>Problem:</strong> Small rental businesses
                          lacked a dedicated system to manage inventory,
                          customer information, and transactions in one place.
                        </p>
                        <Link
                          to="/projects/car-rental-system"
                          className="project-link"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>

                    {/* Day Care System */}
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
                          and immunization records to make tracking and
                          compliance checks faster and more reliable.
                        </p>
                        <p className="project-tech">
                          <strong>Tech Stack:</strong> Java/Spring, REST
                          services, SQL database
                        </p>
                        <p className="project-problem">
                          <strong>Problem:</strong> Daycare centers relied on
                          spreadsheets and paperwork to manage student details
                          and vaccination history, which was error-prone and
                          difficult to update.
                        </p>
                        <Link
                          to="/projects/day-care-system"
                          className="project-link"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>

                    {/* Social Distance Tracker */}
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
                          <strong>Timeline:</strong> Jan 2021 - March 2021
                        </p>
                        <p className="project-meta">
                          <strong>Team:</strong> 2
                        </p>
                        <p className="project-metric">
                          <strong>Impact:</strong> Provided real-time visual
                          feedback on mask and distance violations using live
                          camera footage.
                        </p>
                        <p className="project-tech">
                          <strong>Tech Stack:</strong> Python, OpenCV, machine
                          learning utilities
                        </p>
                        <p className="project-problem">
                          <strong>Problem:</strong> Organizations needed a way
                          to monitor mask usage and distancing without manually
                          reviewing CCTV footage.
                        </p>
                        <Link
                          to="/projects/social-distance-tracker"
                          className="project-link"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>

                    {/* Pro Shop */}
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
                          <strong>Timeline:</strong> June 2021 - Aug 2021
                        </p>
                        <p className="project-meta">
                          <strong>Team:</strong> 4
                        </p>
                        <p className="project-metric">
                          <strong>Impact:</strong> Designed an end-to-end
                          shopping flow with secure checkout and sentiment
                          analysis to better understand user reviews.
                        </p>
                        <p className="project-tech">
                          <strong>Tech Stack:</strong> React, Node.js/Express,
                          MongoDB, Stripe, Python (sentiment analysis)
                        </p>
                        <p className="project-problem">
                          <strong>Problem:</strong> Sports stores needed a
                          modern e-commerce experience with secure payments and
                          insights into customer feedback.
                        </p>
                        <Link to="/projects/pro-shop" className="project-link">
                          Learn More
                        </Link>
                      </div>
                    </div>

                    {/* Connect Engine */}
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
                          from multiple platforms into a single dashboard to
                          support quicker reporting.
                        </p>
                        <p className="project-tech">
                          <strong>Tech Stack:</strong> React, Node.js, REST
                          APIs, MongoDB, charting/analytics libraries
                        </p>
                        <p className="project-problem">
                          <strong>Problem:</strong> Social media teams had to
                          manually gather metrics from different platforms,
                          making it hard to see overall performance at a glance.
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
                    {/* Certification 1 */}
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
                    {/* Certification 2 */}
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
                    {/* Certification 3 */}
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

                {/* Skills & Expertise Section */}
                <section className="skills" id="skills" data-aos="fade-up">
                  <h2>Skills & Expertise</h2>

                  <div className="skills-container">
                    {/* Core Competencies */}
                    <div className="skills-card" data-aos="zoom-in">
                      <h3>Core Competencies</h3>
                      <ul>
                        <li>
                          <strong>UX Research & Usability Testing:</strong>{" "}
                          Interviews, journey maps, task flows, and heuristic
                          evaluation to uncover actionable insights.
                        </li>
                        <li>
                          <strong>Interaction & Visual Design:</strong>{" "}
                          Wireframes, high-fidelity UI, responsive layouts, and
                          accessibility-focused design.
                        </li>
                        <li>
                          <strong>Frontend Development:</strong> React-based UI
                          development, component design, and responsive
                          interfaces.
                        </li>
                        <li>
                          <strong>Product Thinking & Problem Solving:</strong>{" "}
                          Translating complex requirements into intuitive user
                          flows and well-structured experiences.
                        </li>
                      </ul>
                    </div>

                    {/* Tools & Technologies */}
                    <div
                      className="skills-card"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <h3>Tools & Technologies</h3>

                      <div className="tool-group">
                        <h4>Design Tools</h4>
                        <p>Figma ●●●●○</p>
                        <p>Miro ●●●●○</p>
                        <p>Balsamiq ●●●○○</p>
                        <p>Canva ●●●●○</p>
                      </div>

                      <div className="tool-group">
                        <h4>Frontend & Development</h4>
                        <p>ReactJS ●●●●○</p>
                        <p>JavaScript ●●●●○</p>
                        <p>HTML/CSS ●●●●○</p>
                        <p>Node.js ●●●○○</p>
                        <p>Golang ●●●○○</p>
                      </div>

                      <div className="tool-group">
                        <h4>Backend / Data</h4>
                        <p>SQL (PostgreSQL, MongoDB) ●●●●○</p>
                        <p>REST APIs ●●●●○</p>
                        <p>Selenium / Playwright ●●●○○</p>
                      </div>
                    </div>

                    {/* Industry Experience */}
                    <div
                      className="skills-card"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <h3>Industry Experience</h3>
                      <ul>
                        <li>
                          <strong>E-commerce & Retail:</strong> Designed product
                          flows, dashboards, and shopping experiences focused on
                          clarity and conversion.
                        </li>
                        <li>
                          <strong>Automation & Enterprise Tools:</strong> Built
                          internal dashboards and automation workflows during
                          Mindlance internship.
                        </li>
                        <li>
                          <strong>FinTech / Banking:</strong> Developed scalable
                          services and secure systems as part of Accenture
                          projects.
                        </li>
                        <li>
                          <strong>EdTech / Academic Platforms:</strong>{" "}
                          Supported teaching workflows, student tooling, and TA
                          responsibilities at Northeastern.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Recognition Section */}
                <section
                  className="recognition"
                  id="recognition"
                  data-aos="fade-up"
                >
                  <h2>Recognition</h2>
                  <div className="recognition-container">
                    {/* Card 1 */}
                    <div
                      className="recognition-card card-excellence"
                      data-aos="zoom-in"
                    >
                      <h3>Excellence Award</h3>
                      <p>
                        In September 2021, during a high-stakes system
                        transition, I took charge to ensure seamless onboarding,
                        thorough testing, and successful deployment of critical
                        applications to a new platform. My in-depth
                        understanding of the architecture and strategic
                        execution played a pivotal role in achieving a flawless
                        migration. This effort earned recognition for delivering
                        high-quality outcomes under pressure.
                      </p>
                    </div>
                    {/* Card 2 */}
                    <div
                      className="recognition-card card-rotaract"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <h3>Rotaract and IEEE</h3>
                      <p>
                        Served as the Director of International Services for the
                        Rotaract Club of Ignited Youth for three years, focusing
                        on fostering global partnerships and organizing
                        impactful events. As an IEEE Event Head, I successfully
                        managed hackathons, Technorax, and RoboFest.
                      </p>
                    </div>
                    {/* Card 3 */}
                    <div
                      className="recognition-card card-badminton"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <h3>Gold Medalist Badminton</h3>
                      <p>
                        Achieved the distinction of being a gold medalist and
                        led the Women’s Badminton Team during undergraduate
                        studies. Won prestigious inter-college tournaments like
                        IIT and BITS Pilani, fostering teamwork and discipline.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ✅ Testimonials Section */}
                <section
                  className="testimonials"
                  id="testimonials"
                  data-aos="fade-up"
                >
                  <h2>Testimonials</h2>
                  <div className="testimonials-container">
                    {/* Testimonial 1 */}
                    <div className="testimonial-card" data-aos="zoom-in">
                      <p className="testimonial-quote">
                        “Mridula brings a rare blend of design intuition and
                        engineering precision. During her time at Mindlance, she
                        consistently delivered thoughtful, user-centric
                        solutions and became the go-to person for complex
                        interface problems.”
                      </p>
                      <p className="testimonial-author">Rohit Sharma</p>
                      <p className="testimonial-role">
                        Senior Software Engineer, Mindlance Inc.
                      </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div
                      className="testimonial-card"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <p className="testimonial-quote">
                        “Mridula is one of the most dedicated and disciplined
                        students I’ve worked with. As a Teaching Assistant, she
                        demonstrated strong leadership, excellent communication,
                        and a deep understanding of user-centered design
                        principles.”
                      </p>
                      <p className="testimonial-author">Daniel Peters</p>
                      <p className="testimonial-role">
                        Professor, Northeastern University
                      </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div
                      className="testimonial-card"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <p className="testimonial-quote">
                        “At Accenture, Mridula consistently delivered
                        high-quality work in fast-paced projects. Her ability to
                        bridge design and development made her a dependable
                        teammate and a strong contributor to our deliveries.”
                      </p>
                      <p className="testimonial-author">Akanksha Verma</p>
                      <p className="testimonial-role">
                        Application Development Lead, Accenture
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          {/* Project Pages */}
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
          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;