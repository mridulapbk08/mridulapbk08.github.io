import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import Certification1Image from "../assets/images/GCPCerti.jpeg";
import Certification2Image from "../assets/images/AzureFundamentals_Certification.png";
import Certification3Image from "../assets/images/AzureAdministrator_Certification.png";

import "./CertificationPage.css";

const certificationData = {
  "google-cloud-associate-engineer": {
    provider: "Google Cloud",
    title: "Associate Cloud Engineer",
    image: Certification1Image,
    verificationUrl:
      "https://www.credential.net/8751610d-f100-42a8-830b-83320b268a78#acc.BoUTfKzS",
    description:
      "Google Cloud certification covering deployment, management, monitoring, and operation of cloud solutions on Google Cloud.",
  },

  "azure-fundamentals": {
    provider: "Microsoft Azure",
    title: "Azure Fundamentals",
    image: Certification2Image,
    verificationUrl:
      "https://www.credly.com/badges/3ca5d54b-a780-4af8-85f7-b3c988613943/linked_in_profile",
    description:
      "Microsoft certification covering foundational cloud concepts, Azure services, security, governance, pricing, and cloud management.",
  },

  "azure-administrator": {
    provider: "Microsoft Azure",
    title: "Azure Administrator",
    image: Certification3Image,
    verificationUrl:
      "https://www.credly.com/badges/05ffb555-e0fb-430d-9512-de62f6563ffd/public_url",
    description:
      "Microsoft Azure certification focused on managing identities, governance, storage, compute resources, networking, and cloud infrastructure.",
  },
};

const CertificationPage = () => {
  const { slug } = useParams();

  const certification = certificationData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!certification) {
    return (
      <main className="certificate-not-found">
        <h1>Certification not found</h1>

        <Link to="/#certifications">
          Back to certifications
        </Link>
      </main>
    );
  }

  return (
    <main className="certificate-page">
      <section className="certificate-hero">
        <div className="certificate-grid-background" />

        <div className="certificate-container">
          <Link
            to="/#certifications"
            className="certificate-back"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back to certifications</span>
          </Link>

          <div className="certificate-heading">
            <p className="certificate-provider">
              {certification.provider}
            </p>

            <h1>{certification.title}</h1>

            <p className="certificate-description">
              {certification.description}
            </p>
          </div>
        </div>
      </section>

      <section className="certificate-content">
        <div className="certificate-container">
          <div className="certificate-layout">
            <div className="certificate-image-card">
              <img
                src={certification.image}
                alt={`${certification.title} certificate`}
              />
            </div>

            <aside className="certificate-info-card">
              <p className="certificate-small-title">
                CERTIFICATION DETAILS
              </p>

              <h2>{certification.title}</h2>

              <div className="certificate-info-block">
                <span>Provider</span>
                <strong>{certification.provider}</strong>
              </div>

              <div className="certificate-divider" />

              <p className="certificate-info-copy">
                This certification is displayed directly inside
                the portfolio so visitors can view it without
                leaving the site.
              </p>

              {certification.verificationUrl && (
                <a
                  href={certification.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-verify-button"
                >
                  <span>Verify credential</span>

                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                  />
                </a>
              )}
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CertificationPage;