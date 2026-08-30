import React from "react";
import ProjectDetailPage from "./ProjectDetailPage";

const DayCareProjectPage = () => {
  return (
    <ProjectDetailPage
      eyebrow="INFORMATION SYSTEMS"
      title="Day Care System"
      description="A Java-based student information system for collecting and managing student records, immunization information, performance data, and CSV-based workflows."
      tech={[
        "Java",
        "Swing",
        "SQL",
        "CSV",
      ]}
      sections={[
        {
          title: "Student Data Collection",
          content:
            "The application streamlines student data collection by capturing essential details and maintaining structured student information using Java, Swing, and SQL.",
        },
        {
          title: "Immunization & Performance Tracking",
          content:
            "The system utilizes immunization records for tracking and performance evaluation while providing organized workflows for managing student-related information.",
        },
        {
          title: "CSV Integration",
          content:
            "CSV file integration improves data import and export capabilities, making it easier to manage records and support administrative data-handling processes.",
        },
      ]}
      githubUrl="https://github.com/mridulapbk08/OOD_Project"
    />
  );
};

export default DayCareProjectPage;