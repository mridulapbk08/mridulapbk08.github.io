import React from "react";
import "./CarRentalProjectPage.css"; // Add a common CSS for project pages if not already present

const CarRentalProjectPage = () => {
  return (
    <div className="project-page">
      <header className="project-header">
        <h1>Car Rental System</h1>
      </header>
      <section className="project-content">
        <div className="project-section">
          <h2>Database Design and Optimization</h2>
          <p>
            The Car Rental System is designed to streamline car rental operations with a
            structured database comprising 11 tables, 5 views for quick data retrieval,
            4 non-clustered indexes for optimized queries, and 6 stored procedures for
            easy maintenance. It dynamically calculates total rental amounts using a
            user-defined function (UDF) and ensures data accuracy with DML triggers.
            Sensitive information, such as driver’s license numbers, is protected using
            column-level encryption.
          </p>
        </div>
        <div className="project-section">
          <h2>User Experience and Visualization</h2>
          <p>
            The system also includes a PowerBI dashboard for data visualization,
            offering clear insights into operations. A JavaScript-based GUI enables
            seamless CRUD operations, with changes reflected directly in the SQL
            database. This project enhances workflow automation, data security, and
            overall operational efficiency.
          </p>
        </div>
      </section>
      {/* Add the GitHub link below the project content */}
      <div className="github-link">
        <a
          href="https://github.com/mridulapbk08/Car-Rental-System"
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

export default CarRentalProjectPage;