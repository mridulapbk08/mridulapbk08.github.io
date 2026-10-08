import React from "react";

import ProjectDetailPage from "./ProjectDetailPage";

const VeraSEProjectPage = () => {
  const sections = [
    {
      title: "Research Problem",
      content:
        "LLM-generated software patches can satisfy visible tests while still introducing hidden regressions, modifying unrelated behavior, or producing structurally unsafe changes. VERA-SE studies how autonomous repair systems can verify generated patches before accepting them.",
    },
    {
      title: "Verification Framework",
      content:
        "Candidate patches are evaluated using visible tests, hidden behavioral tests, syntax validation, structural preservation checks, and risk-aware patch selection rather than relying on visible-test success alone.",
    },
    {
      title: "Controlled Benchmark",
      content:
        "The controlled evaluation included six repair tasks and 240 candidate instances. The benchmark was designed to expose cases in which passing visible tests does not necessarily imply a correct software repair.",
    },
    {
      title: "Key Findings",
      content: [
        "The visible-tests-only baseline produced a high false-acceptance rate, while verification substantially reduced unsafe patch acceptance in the controlled benchmark.",
        "VERA-SE achieved zero false acceptance on the controlled benchmark with one false rejection among 153 oracle-correct candidates.",
        "A real-world defect pilot exposed a transfer gap, showing that verification techniques effective in controlled settings require further work before they generalize reliably.",
      ],
    },
  ];

  const tech = [
    "Python",
    "Large Language Models",
    "Automated Program Repair",
    "Software Testing",
    "Behavioral Verification",
    "Structural Validation",
    "Hidden Tests",
    "Risk-Aware Selection",
  ];

  return (
    <ProjectDetailPage
      eyebrow="AI FOR SOFTWARE ENGINEERING · RESEARCH"
      title="VERA-SE"
      description="Verification-Guided Autonomous Software Repair with Risk-Aware Patch Selection. A research framework for evaluating AI-generated repairs using behavioral and structural verification before patch acceptance."
      sections={sections}
      tech={tech}
      paperUrl="https://doi.org/10.5281/zenodo.23222282"
      githubUrl="https://github.com/mridulapbk08/vera-se"
    />
  );
};

export default VeraSEProjectPage;