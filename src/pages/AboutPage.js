import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-page-section">
        <h1>About Me</h1>

        <p>
          I’m Mridula Prabhakar, a UX-focused Software Engineer passionate about
          designing intuitive digital experiences and building scalable,
          user-centered applications. Currently pursuing my Master of Science in
          Software Engineering Systems at Northeastern University in Boston, I
          work at the intersection of design, technology, and problem-solving.
        </p>

        <p>
          With hands-on experience across Mindlance Inc., Accenture, and
          multiple academic and personal projects, I’ve contributed to building
          cloud-native systems, automation platforms, AI-powered dashboards, and
          user-friendly web applications. My background in both engineering and
          design helps me approach challenges with a holistic product mindset—
          ensuring that every solution is technically feasible, visually clear,
          and centered around user needs.
        </p>

        <p>
          I specialize in creating experiences that simplify complex workflows,
          communicate information clearly, and deliver lasting impact. Whether
          it's crafting user flows, optimizing interfaces, or building responsive
          frontends, I enjoy connecting the dots between user goals and product
          functionality.
        </p>

        <h2>What I Do</h2>
        <ul className="about-list">
          <li>UX design for web applications and dashboards</li>
          <li>Frontend development using React, JavaScript, and modern UI practices</li>
          <li>Automation & backend development using Golang, Node.js, and REST APIs</li>
          <li>Cloud deployments, CI/CD, and scalable architectures</li>
        </ul>

        <h2>My Approach</h2>
        <p>
          I value thoughtful design, meaningful collaboration, and continuous
          learning. My process typically involves understanding user pain points,
          asking the right questions, simplifying complexity, and designing
          solutions that balance usability with engineering precision. I enjoy
          working with teams and stakeholders to transform ideas into real,
          impactful products.
        </p>

        <h2>Outside of Work</h2>
        <p>
          Beyond the screen, I’ve been a gold medalist badminton player, served
          as an IEEE event lead, and contributed as the Director of International
          Services for the Rotaract Club of Ignited Youth. I enjoy exploring new
          places, mentoring students, and staying active in the design and
          engineering community.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;