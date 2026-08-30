import React from "react";
import ProjectDetailPage from "./ProjectDetailPage";

const ProShopProjectPage = () => {
  return (
    <ProjectDetailPage
      eyebrow="WEB ENGINEERING · APPLIED AI"
      title="Pro Shop"
      description="A full-stack e-commerce application combining product and order management with simulated PayPal transactions and sentiment analysis for customer reviews."
      tech={[
        "React",
        "Node.js",
        "MongoDB",
        "PayPal",
        "Sentiment Analysis",
      ]}
      sections={[
        {
          title: "E-Commerce Platform",
          content:
            "ProShop provides a platform for browsing and purchasing sports products with an intuitive user interface and backend functionality for managing inventory and orders.",
        },
        {
          title: "Payment Workflow",
          content:
            "The application integrates a simulated PayPal payment gateway to demonstrate secure checkout and transaction workflows.",
        },
        {
          title: "Sentiment Analysis",
          content:
            "Sentiment Analysis is applied to product reviews to highlight positive and negative customer feedback based on keywords, helping users make more informed purchasing decisions.",
        },
      ]}
      githubUrl="https://github.com/mridulapbk/ProShop-E-Commerce-main"
    />
  );
};

export default ProShopProjectPage;