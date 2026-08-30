import React from "react";
import ProjectDetailPage from "./ProjectDetailPage";

const ConnectEngineProjectPage = () => {
  return (
    <ProjectDetailPage
      eyebrow="FULL-STACK DEVELOPMENT"
      title="Connect Engine"
      description="A MERN-stack social-media platform designed for young adults and professionals with secure authentication, personalized feeds, responsive interfaces, and administrative capabilities."
      tech={[
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ]}
      sections={[
        {
          title: "Social Media Platform",
          content:
            "Connect Engine is a social media platform designed for young adults and professionals, built with the MERN stack to enhance user engagement and professional networking. It features real-time posting and personalized content feeds.",
        },
        {
          title: "Authentication & Backend",
          content:
            "Implemented secure JSON Web Token authentication together with scalable backend API management for user accounts, posts, feeds, and application operations.",
        },
        {
          title: "Responsive UI & Administration",
          content:
            "The platform includes a responsive front-end and a comprehensive administration module for content moderation and analytics, ensuring a well-maintained and efficient ecosystem.",
        },
      ]}
      githubUrl="https://github.com/mridulapbk08/ConnectEngine-SocialMediaApplication"
    />
  );
};

export default ConnectEngineProjectPage;