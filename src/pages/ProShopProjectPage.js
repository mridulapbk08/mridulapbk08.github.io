import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./ProShopProjectPage.css"; // Ensure consistent styles

const ProShopProjectPage = () => {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth animations
      once: true, // Ensure animations run only once
    });
  }, []);

  return (
    <div className="project-page-shop" data-aos="fade-in">
      <header className="project-header" data-aos="fade-down">
        <h1>Pro Shop</h1>
      </header>
      <div className="project-content">
        <h2 data-aos="fade-up">Project Overview</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          ProShop is a website that offers a seamless platform for browsing and purchasing
          sports products, integrated with a dummy payment gateway (PayPal) for secure transaction
          simulation. It features an intuitive interface for users and efficient backend operations
          for managing inventory and orders.
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          To enhance customer decision-making, ProShop incorporates Sentiment Analysis to analyze
          product reviews, highlighting positive and negative feedback based on keywords. This
          functionality provides users with valuable insights to make informed purchasing choices,
          combining e-commerce efficiency with AI-driven features for an engaging shopping
          experience.
        </p>
      </div>
      {/* Add the GitHub link below the project content */}
      <div className="github-link" data-aos="fade-left">
        <a
          href="https://github.com/mridulapbk/ProShop-E-Commerce-main"
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

export default ProShopProjectPage;
