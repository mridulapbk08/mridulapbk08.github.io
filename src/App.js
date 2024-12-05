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

// Import pages
import CloudProjectPage from "./pages/CloudProjectPage.js";
import CarRentalPage from "./pages/CarRentalProjectPage.js";
import DaycarePage from "./pages/DayCareProjectPage.js";
import SocialDistancePage from "./pages/SocialDistanceProjectPage.js";
import ProShopPage from "./pages/ProShopProjectPage.js";
import ConnectEnginePage from "./pages/ConnectEngineProjectPage.js";
import ContactPage from "./pages/ContactPage.js";

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
              <li><Link to="/">Home</Link></li>
              {/* <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li> */}
              <li><Link to="/contact">Contact</Link></li>
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
                      <p data-aos="fade-up" data-aos-delay="200">
                        Welcome to my digital realm!
                      </p>
                    </div>
                  </div>
                </section>

                {/* About Section */}
                <section id="about" className="about" data-aos="fade-right">
                  <h2>About</h2>
                  <p>
                    Currently pursuing a Master of Science in Software Engineering Systems at
                    Northeastern University in Boston, I am a passionate Software Engineer
                    dedicated to advancing the field through innovative solutions and
                    cutting-edge technologies.
                  </p>
                </section>

                {/* Experience Section */}
                <section id="experience" className="experience">
                  <h2 data-aos="fade-left">Experience</h2>
                  <div className="experience-content">
                    {/* Mindlance */}
                    <div className="experience-item" data-aos="fade-up">
                      <div className="experience-left">
                        <p className="experience-dates">Oct 2023 - Present</p>
                        <p className="experience-role">Software Development Engineer Intern</p>
                      </div>
                      <div className="divider"></div>
                      <div className="experience-right">
                        <h3>Mindlance Inc., New Jersey, USA</h3>
                        <p>
                        I played a key role in the development of an automated job application web app designed to improve efficiency and user experience. My work involved creating a reliable backend using Golang, enabling faster data processing and efficient task management. I implemented features like scheduling and retry mechanisms to streamline application submissions and reduce delays. Additionally, I developed systems for handling tasks asynchronously with real-time tracking and error management, ensuring the application was fast, scalable, and easy to use.
                        </p>
                      </div>
                    </div>

                    {/* Accenture */}
                    <div className="experience-item" data-aos="fade-up">
                      <div className="experience-left">
                        <p className="experience-dates">Oct 2021 - Sept 2023</p>
                        <p className="experience-role">Application Development Analyst</p>
                      </div>
                      <div className="divider"></div>
                      <div className="experience-right">
                        <h3>Accenture, Gurugram, India</h3>
                        <p>
                        Contributed to the creation and enhancement of digital platforms using
                Java, Spring Boot, MVC frameworks, and other technologies. My
                responsibilities included building responsive interfaces, implementing secure
                authentication systems, and engineering APIs to streamline payment
                processing. I collaborated closely with clients through regular meetings
                to gather requirements and feedback, ensuring user-centric design principles
                were integrated throughout the development process. Additionally, I
                documented system functionality comprehensively, reducing onboarding time
                for new team members and improving overall project efficiency.
                        </p>
                      </div>
                    </div>

                    {/* CS SOFT Solutions */}
                    <div className="experience-item" data-aos="fade-up">
                      <div className="experience-left">
                        <p className="experience-dates">June 2020 - July 2020</p>
                        <p className="experience-role">Software Development Intern</p>
                      </div>
                      <div className="divider"></div>
                      <div className="experience-right">
                        <h3>CS SOFT Solutions, Mohali, Punjab</h3>
                        <p>
                        Introduced dynamic features to enhance the functionality of the Diving
                Specials application, a platform for booking diving packages worldwide.
                I collaborated with the development team to optimize the V-log section and
                supported the implementation of core functionalities under the guidance of
                the main developer. This experience allowed me to refine my technical
                skills, gain hands-on experience in developing user-centric applications,
                and contribute to building a more interactive and efficient platform.
                </p>
                      </div>
                    </div>

                    {/* Tech Mahindra */}
                    <div className="experience-item" data-aos="fade-up">
                      <div className="experience-left">
                        <p className="experience-dates">June 2019 - Aug 2019</p>
                        <p className="experience-role">Software Development Intern</p>
                      </div>
                      <div className="divider"></div>
                      <div className="experience-right">
                        <h3>Tech Mahindra, New Delhi, India</h3>
                        <p>
                        Implemented a comprehensive ERP application to automate the workflow
                processes of CPWD, New Delhi, focusing on streamlining operations and
                minimizing manual intervention. The application utilized advanced Data
                Analytics for actionable insights, while Machine Learning and AI tools
                optimized resource allocation and enhanced efficiency. Key features included
                automated task scheduling, real-time process monitoring, and centralized
                data management, enabling seamless collaboration across departments.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Education Section */}
                <section id="education" className="education" data-aos="fade-left">
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
                        Currently pursuing a Master of Science in Software Engineering Systems  with an expected graduation in Aug 2025. My studies emphasize key areas like Web Design, Cloud Computing, Database Management, User Experience Engineering, Application Development, as well as Program Structures and Object-oriented Design
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
                        <h3>Guru Gobind Singh Indraprastha University, New Delhi, India</h3>
                        <p>
                        Graduated with a Bachelor of Technology in Computer Science, where I focused on coursework in Java Programming, Data Mining, Operating Systems, Android App Development, Database Management, Operating Systems, Algorithm Design, and Data Structures.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="projects" data-aos="fade-up">
                  <h2>Recent Projects</h2>
                  <div className="projects-content">
                    <div className="project-item" data-aos="zoom-in">
                      <img src={CloudImage} alt="Cloud Native Web App" className="project-image" />
                      <div className="project-description">
                        <h3>Cloud Native Web App</h3>
                        <p>
                          Built a scalable Flask application on GCP with CI/CD automation and Terraform-managed infrastructure.
                        </p>
                        <Link to="/projects/cloud-native-web-app" className="project-link">Learn More</Link>
                      </div>
                    </div>

                    <div className="project-item" data-aos="zoom-in">
                      <img src={CarRentalImage} alt="Car Rental System" className="project-image" />
                      <div className="project-description">
                        <h3>Car Rental System</h3>
                        <p>
                          Designed a system for managing vehicle inventory, customer data, and transactions.
                        </p>
                        <Link to="/projects/car-rental-system" className="project-link">Learn More</Link>
                      </div>
                    </div>

                    <div className="project-item" data-aos="zoom-in">
                      <img src={DaycareImage} alt="Day Care System" className="project-image" />
                      <div className="project-description">
                        <h3>Day Care System</h3>
                        <p>
                          Created an app to manage student data and immunization records.
                        </p>
                        <Link to="/projects/day-care-system" className="project-link">Learn More</Link>
                      </div>
                    </div>

                    <div className="project-item" data-aos="zoom-in">
                      <img src={FaceMaskTrackerImage} alt="Social Distance Tracker" className="project-image" />
                      <div className="project-description">
                        <h3>Social Distance Tracker</h3>
                        <p>
                          A computer vision-based tracker for real-time compliance detection using OpenCV.
                        </p>
                        <Link to="/projects/social-distance-tracker" className="project-link">Learn More</Link>
                      </div>
                    </div>

                    <div className="project-item" data-aos="zoom-in">
                      <img src={ProShopImage} alt="Pro Shop" className="project-image" />
                      <div className="project-description">
                        <h3>Pro Shop</h3>
                        <p>
                          Built an e-commerce platform with secure payment integration and AI-driven sentiment analysis.
                        </p>
                        <Link to="/projects/pro-shop" className="project-link">Learn More</Link>
                      </div>
                    </div>

                    <div className="project-item" data-aos="zoom-in">
                      <img src={SocialMediaImage} alt="Connect Engine" className="project-image" />
                      <div className="project-description">
                        <h3>Connect Engine</h3>
                        <p>
                          Developed a comprehensive platform to manage social media engagement and analytics.
                        </p>
                        <Link to="/projects/connect-engine" className="project-link">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </section>
                 {/* Recognition Section */}
                 <section className="recognition" id="recognition" data-aos="fade-up">
  <h2>Recognition</h2>
  <div className="recognition-container">
    {/* Card 1 */}
    <div className="recognition-card card-excellence" data-aos="zoom-in">
      <h3>Excellence Award</h3>
      <p>
        In September 2021, during a high-stakes system transition, I took charge
        to ensure seamless onboarding, thorough testing, and successful deployment
        of critical applications to a new platform. My in-depth understanding of
        the architecture and strategic execution played a pivotal role in achieving
        a flawless migration. This effort earned recognition for delivering
        high-quality outcomes under pressure.
      </p>
    </div>
    {/* Card 2 */}
    <div className="recognition-card card-rotaract" data-aos="zoom-in" data-aos-delay="200">
      <h3>Rotaract and IEEE</h3>
      <p>
        Served as the Director of International Services for the Rotaract Club of
        Ignited Youth for three years, focusing on fostering global partnerships
        and organizing impactful events. As an IEEE Event Head, I successfully
        managed hackathons, Technorax, and RoboFest.
      </p>
    </div>
    {/* Card 3 */}
    <div className="recognition-card card-badminton" data-aos="zoom-in" data-aos-delay="400">
      <h3>Gold Medalist Badminton</h3>
      <p>
        Achieved the distinction of being a gold medalist and led the Women’s
        Badminton Team during undergraduate studies. Won prestigious
        inter-college tournaments like IIT and BITS Pilani, fostering teamwork
        and discipline.
      </p>
    </div>
  </div>
</section>



              </div>
            }
          />

          {/* Project Pages */}
          <Route path="/projects/cloud-native-web-app" element={<CloudProjectPage />} />
          <Route path="/projects/car-rental-system" element={<CarRentalPage />} />
          <Route path="/projects/day-care-system" element={<DaycarePage />} />
          <Route path="/projects/social-distance-tracker" element={<SocialDistancePage />} />
          <Route path="/projects/pro-shop" element={<ProShopPage />} />
          <Route path="/projects/connect-engine" element={<ConnectEnginePage />} />

          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
};

export default App;
