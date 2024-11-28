import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import CloudProjectPage from "./pages/CloudProjectPage";
import CarRentalPage from "./pages/CarRentalProjectPage";
import DaycarePage from "./pages/DayCareProjectPage";
import SocialDistancePage from "./pages/SocialDistanceProjectPage";
import ProShopPage from "./pages/ProShopProjectPage";
import ConnectEnginePage from "./pages/ConnectEngineProjectPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll(".floating-image");
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          img.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo">Mridula Prabhakar</div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section id="home" className="hero">
                  <div className="hero-content">
                    <img
                      src={MridulaImage}
                      alt="Mridula Prabhakar"
                      className="profile-pic"
                    />
                    <div className="intro">
                      <h1>Hi, I'm Mridula Prabhakar</h1>
                      <p>Welcome to my digital realm!</p>
                    </div>
                  </div>
                  <p className="scroll-down">Scroll Down</p>
                </section>

                {/* About Section */}
                <section id="about" className="about">
                  <h2>About</h2>
                  <p>
                    Currently pursuing Master of Science in Software Engineering Systems at
                    Northeastern University in Boston, I am a passionate Software Engineer
                    dedicated to advancing the field through innovative solutions and
                    cutting-edge technologies.
                  </p>
                </section>
{/* Experience Section */}
<section id="experience" className="experience">
  <h2>Experience</h2>
  <div className="experience-content">
    {/* Accenture */}
    <div className="experience-item">
      <div className="experience-left">
        <p className="experience-dates">Oct 2021 - Sept 2023</p>
        <p className="experience-role">Application Development Analyst</p>
      </div>
      <div className="divider"></div>
      <div className="experience-right">
        <h3>Accenture, Gurugram, India</h3>
        <p>
          Contributed to the creation and enhancement of digital platforms using Java, Spring Boot, and MVC frameworks. My responsibilities included building responsive interfaces, implementing secure authentication systems, and engineering APIs to streamline payment processing. Collaborated with clients to gather requirements, ensuring user-centric design principles were integrated into the development process.
        </p>
      </div>
    </div>

    {/* CS SOFT Solutions */}
    <div className="experience-item">
      <div className="experience-left">
        <p className="experience-dates">June 2020 - July 2020</p>
        <p className="experience-role">Software Development Intern</p>
      </div>
      <div className="divider"></div>
      <div className="experience-right">
        <h3>CS SOFT Solutions (I) Pvt. Ltd, Mohali, Punjab</h3>
        <p>
          Introduced dynamic features to enhance the functionality of the Diving Specials application, a platform for booking diving packages worldwide. Optimized the V-log section and implemented core functionalities under the guidance of the main developer.
        </p>
      </div>
    </div>

    {/* Tech Mahindra */}
    <div className="experience-item">
      <div className="experience-left">
        <p className="experience-dates">June 2019 - August 2019</p>
        <p className="experience-role">Software Development Intern</p>
      </div>
      <div className="divider"></div>
      <div className="experience-right">
        <h3>Tech Mahindra, New Delhi, India</h3>
        <p>
          Developed a comprehensive ERP application to automate workflow processes for CPWD, New Delhi. Leveraged advanced data analytics, machine learning, and AI tools to enhance efficiency and optimize resource allocation. Key features included automated task scheduling, real-time monitoring, and centralized data management.
        </p>
      </div>
    </div>
  </div>
</section>
                 {/* Education Section */}
      <section id="education" className="education">
        <h2>Education</h2>
        <div className="education-content">
          <div className="education-item">
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
          <div className="education-item">
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
                <section id="projects" className="projects">
                  <h2>Recent Projects</h2>
                  <div className="projects-content">
                    <div className="project-item">
                      <img src={CloudImage} alt="Cloud Native Web App" className="project-image" />
                      <div className="project-description">
                        <h3>Cloud Native Web App</h3>
                        <p>
                          Developed a scalable Flask application on GCP with CI/CD automation and
                          Terraform-managed infrastructure for efficient user management and serverless email verification.
                        </p>
                        <Link to="/projects/cloud-native-web-app" className="project-link">Learn More</Link>
                      </div>
                    </div>

                    <div className="project-item">
                      <img src={CarRentalImage} alt="Car Rental System" className="project-image" />
                      <div className="project-description">
                        <h3>Car Rental System</h3>
                        <p>
                          Implemented a system to manage vehicle inventory, customer data, and
                          transactions, enhancing database performance and streamlining bookings.
                        </p>
                        <Link to="/projects/car-rental-system" className="project-link">Learn More</Link>
                      </div>
                    </div>

                    <div className="project-item">
                      <img src={DaycareImage} alt="Day Care System" className="project-image" />
                      <div className="project-description">
                        <h3>Day Care System</h3>
                        <p>
                          Designed an app to improve student data collection and tracking immunization records
                          for performance evaluations.
                        </p>
                        <Link to="/projects/day-care-system" className="project-link">Learn More</Link>
                      </div>
                    </div>

                    <div className="project-item">
                      <img src={FaceMaskTrackerImage} alt="Social Distance Tracker" className="project-image" />
                      <div className="project-description">
                        <h3>Social Distance and Face Mask Tracker</h3>
                        <p>
                          A computer vision-based system for real-time social distancing and
                          face mask compliance detection using deep learning and OpenCV.
                        </p>
                        <Link to="/projects/social-distance-tracker" className="project-link">Learn More</Link>
                      </div>
                    </div>

                    <div className="project-item">
                      <img src={ProShopImage} alt="Pro Shop" className="project-image" />
                      <div className="project-description">
                        <h3>Pro Shop</h3>
                        <p>
                          Devised an e-commerce website to provide seamless shopping experiences
                          with secure payment integration and AI-driven sentiment analysis for
                          informed purchasing decisions.
                        </p>
                        <Link to="/projects/pro-shop" className="project-link">Learn More</Link>
                      </div>
                    </div>

                    <div className="project-item">
                      <img src={SocialMediaImage} alt="Connect Engine" className="project-image" />
                      <div className="project-description">
                        <h3>Connect Engine</h3>
                        <p>
                          Built a comprehensive car rental system to efficiently manage vehicle
                          inventory, customer data, and rental transactions, enhancing database
                          performance and streamlining bookings.
                        </p>
                        <Link to="/projects/connect-engine" className="project-link">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </section>
              </>
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
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
