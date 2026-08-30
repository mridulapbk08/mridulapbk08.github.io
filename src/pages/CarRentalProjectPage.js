import React from "react";
import ProjectDetailPage from "./ProjectDetailPage";

const CarRentalProjectPage = () => {
  return (
    <ProjectDetailPage
      eyebrow="DATABASE SYSTEMS"
      title="Car Rental System"
      description="A database-driven car rental management system designed around optimized SQL architecture, secure data handling, workflow automation, and operational visualization."
      tech={[
        "SQL",
        "JavaScript",
        "Power BI",
        "Database Design",
        "Stored Procedures",
      ]}
      sections={[
        {
          title: "Database Design & Optimization",
          content:
            "The Car Rental System is designed to streamline car rental operations with a structured database comprising 11 tables, 5 views for quick data retrieval, 4 non-clustered indexes for optimized queries, and 6 stored procedures for easy maintenance.",
        },
        {
          title: "Security & Data Integrity",
          content:
            "The system dynamically calculates total rental amounts using a user-defined function and maintains data accuracy using DML triggers. Sensitive information such as driver's license numbers is protected using column-level encryption.",
        },
        {
          title: "User Experience & Visualization",
          content:
            "The system includes a Power BI dashboard for data visualization and operational insights. A JavaScript-based GUI enables seamless CRUD operations, with changes reflected directly in the SQL database.",
        },
      ]}
      githubUrl="https://github.com/mridulapbk08/Car-Rental-System"
    />
  );
};

export default CarRentalProjectPage;