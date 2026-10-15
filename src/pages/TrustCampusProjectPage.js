
import React from "react";
import ProjectDetailPage from "./ProjectDetailPage";
import "./TrustCampusResearch.css";

const SCREENSHOTS =
  "https://raw.githubusercontent.com/mridulapbk08/trust-campus/main/screenshots/";

const screenshots = [
  {
    src: `${SCREENSHOTS}dashboard.png`,
    alt: "TRUST-Campus research dashboard",
    caption: "Research interface and university-policy question input",
  },
  {
    src: `${SCREENSHOTS}answer-decision.png`,
    alt: "Evidence-supported answer from TRUST-Campus",
    caption: "Supported question: answer and retrieved evidence",
  },
  {
    src: `${SCREENSHOTS}abstain-decision.png`,
    alt: "TRUST-Campus abstention decision",
    caption: "Individual eligibility question: insufficient evidence",
  },
  {
    src: `${SCREENSHOTS}evaluation-overview.png`,
    alt: "TRUST-Campus research evaluation",
    caption: "Frozen evaluation and comparison with Reranked RAG",
  },
];

const TrustCampusProjectPage = () => {
  const sections = [
    {
      title: "Research Question",
      content:
        "Can a retrieval-augmented generation system distinguish evidence that is merely relevant from evidence sufficient to justify answering a specific university-policy question?",
    },
    {
      title: "System Design",
      content:
        "TRUST-Campus combines retrieval and reranking with a task-specific semantic evidence-sufficiency decision layer. The V4 pipeline decides whether retrieved passages justify generating a grounded answer or whether the system should abstain.",
    },
    {
      title: "Evaluation",
      content:
        "Four RAG systems were compared on a frozen, project-constructed 50-question evaluation: 20 answerable and 30 unanswerable questions across seven categories, including paraphrase, composition, negation, missing context, unsupported requests, future questions, and false premises.",
    },
    {
      title: "Findings and Limitations",
      content: [
        "Evidence-Aware V4 achieved 82% decision accuracy and 42% answer coverage, compared with 74% and 18% for the reranked baseline.",
        "False rejection decreased from 60% to 20%, although V4's false-acceptance rate was 16.7%, compared with 3.3% for Reranked RAG.",
        "The evaluation was conducted on an internal 50-question benchmark. Context-dependent questions remain a key limitation, and the results do not establish general reliability across institutions.",
      ],
    },
  ];

  const tech = [
    "Python",
    "RAG",
    "Large Language Models",
    "Dense Retrieval",
    "BM25",
    "Hybrid Retrieval",
    "Cross-Encoder Reranking",
    "Evidence Sufficiency",
    "Selective Answering",
    "Streamlit",
  ];

  return (
    <>
      <ProjectDetailPage
        eyebrow="INDEPENDENT RESEARCH · TRUSTWORTHY AI"
        title="TRUST-Campus"
        description="Evidence-Aware Retrieval-Augmented Generation for Reliable University Information Access. A research system that distinguishes evidence relevance from sufficiency, supports answer-or-abstain decisions, and evaluates the trade-off between answer coverage and unsupported conclusions."
        sections={sections}
        tech={tech}
        paperUrl="https://github.com/mridulapbk08/trust-campus/blob/main/paper/TRUST_Campus_Research_Paper.pdf"
        githubUrl="https://github.com/mridulapbk08/trust-campus"
      />

      <section
        className="trust-research-showcase"
        aria-label="TRUST-Campus research demonstration"
      >
        <div className="trust-research-container">
          <div className="trust-research-heading">
            <p className="trust-research-kicker">
              WORKING RESEARCH DEMONSTRATION
            </p>

            <h2>Explore the research interface</h2>

            <p>
              The Streamlit interface connects to the existing
              Evidence-Aware RAG V4 pipeline, displaying live
              answer-or-abstain decisions alongside retrieved
              evidence. It also provides access to recorded
              results from the frozen evaluation.
            </p>
          </div>

          <div className="trust-research-metrics">
            <div>
              <strong>50</strong>
              <span>Frozen questions</span>
            </div>

            <div>
              <strong>82%</strong>
              <span>Decision accuracy</span>
            </div>

            <div>
              <strong>42%</strong>
              <span>Answer coverage</span>
            </div>

            <div>
              <strong>16.7%</strong>
              <span>False acceptance</span>
            </div>
          </div>

          <div className="trust-research-gallery">
            {screenshots.map((item) => (
              <figure
                className="trust-research-figure"
                key={item.src}
              >
                <a
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View full image: ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                  />
                </a>

                <figcaption>
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="trust-research-caveat">
            <strong>Research limitation:</strong>{" "}
            The reranked baseline achieved a lower
            false-acceptance rate of 3.3%. Higher overall
            decision accuracy does not establish that
            Evidence-Aware V4 is safer on every metric.
          </p>

          <a
            className="trust-research-github"
            href="https://github.com/mridulapbk08/trust-campus#interactive-research-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore source code and research documentation ↗
          </a>

          <p className="trust-research-disclaimer">
            Independent research demonstration. Not official
            university guidance. The application runs locally
            and is not currently hosted as a public live service.
          </p>
        </div>
      </section>
    </>
  );
};

export default TrustCampusProjectPage;
