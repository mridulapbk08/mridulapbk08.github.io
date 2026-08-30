import React from "react";
import ProjectDetailPage from "./ProjectDetailPage";

const CloudProjectPage = () => {
  return (
    <ProjectDetailPage
      eyebrow="CLOUD ENGINEERING"
      title="Cloud Native Web App"
      description="A scalable Flask application deployed on Google Cloud with REST APIs, serverless email verification, automated CI/CD pipelines, and infrastructure managed through Terraform."
      tech={[
        "Python",
        "Flask",
        "GCP",
        "Terraform",
        "CI/CD",
        "Pub/Sub",
      ]}
      sections={[
        {
          title: "Flask-Based Application",
          content:
            "Developed a Flask-based application deployed on GCP, featuring multiple RESTful endpoints to manage user operations. These endpoints allowed for creating users, retrieving user details, and sending email verifications. The email verification process was implemented using Pub/Sub and Cloud Functions for a serverless, scalable workflow.",
        },
        {
          title: "CI/CD Pipelines",
          content:
            "To streamline the development lifecycle, implemented CI/CD pipelines that automated critical processes, including building custom machine images, integrating unit tests, and deploying the application to the cloud. These pipelines, integrated with version control, ensured consistent and reliable application builds while reducing errors during deployment. This automation significantly improved the efficiency of updates and allowed for rapid iteration.",
        },
        {
          title: "Terraform",
          content:
            "The entire cloud infrastructure was provisioned and managed using Terraform, ensuring reproducibility and scalability. This included defining resources for Compute Engine instances, Cloud SQL databases, Pub/Sub topics, and serverless Cloud Functions. Utilizing Terraform's Infrastructure as Code (IaC) capabilities, the setup was standardized across environments, enhancing collaboration, simplifying infrastructure modifications, and ensuring high reliability.",
        },
      ]}
      githubUrl="https://github.com/YOUR-REAL-REPO-LINK"
    />
  );
};

export default CloudProjectPage;