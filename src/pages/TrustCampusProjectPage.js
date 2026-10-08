import React from "react";

import ProjectDetailPage from "./ProjectDetailPage";

const TrustCampusProjectPage = () => {
  const sections = [
    {
      title: "Research Problem",
      content:
        "Retrieval-augmented generation systems often treat retrieved relevance as sufficient justification for answering. TRUST-Campus investigates a stricter question: whether the retrieved evidence actually contains enough support to justify a reliable response.",
    },
    {
      title: "System Design",
      content:
        "The framework combines dense retrieval, BM25 lexical retrieval, hybrid retrieval, cross-encoder reranking, semantic evidence-sufficiency assessment, and selective answer-or-abstain decision logic.",
    },
    {
      title: "Evaluation",
      content:
        "The system was evaluated on a frozen 50-question benchmark spanning paraphrase, compositional, negation, personal-context, unsupported, future, and false-premise queries. Dense, hybrid, reranked, and evidence-aware RAG configurations were compared.",
    },
    {
      title: "Key Findings",
      content: [
        "Evidence-Aware V4 achieved the strongest overall answer/abstain decision accuracy among the evaluated systems.",
        "The framework substantially reduced false rejection compared with the retrieval baselines while exposing a trade-off between answer coverage and false acceptance.",
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
    "Selective Prediction",
  ];

  return (
    <ProjectDetailPage
      eyebrow="TRUSTWORTHY AI · RAG · RESEARCH"
      title="TRUST-Campus"
      description="Evidence-Aware RAG for Reliable University Information Access. A research framework that evaluates whether retrieved evidence is sufficient to support an answer and abstains when the available evidence is inadequate."
      sections={sections}
      tech={tech}
      paperUrl="https://doi.org/10.5281/zenodo.23221797"
      githubUrl="https://github.com/mridulapbk08/trust-campus"
    />
  );
};

export default TrustCampusProjectPage;