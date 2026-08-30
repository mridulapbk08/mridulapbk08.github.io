import React from "react";
import ProjectDetailPage from "./ProjectDetailPage";

const SelfHealingProjectPage = () => {
  return (
    <ProjectDetailPage
      eyebrow="DISTRIBUTED SYSTEMS · RESEARCH"
      title="Self-Healing Agent Infrastructure"
      description="A fault-tolerant workflow orchestration platform designed to detect failures, automatically apply recovery strategies, and improve reliability across distributed task execution."
      tech={[
        "Golang",
        "Redis",
        "PostgreSQL",
        "Docker",
        "Next.js",
        "Distributed Systems",
      ]}
      sections={[
        {
          title: "Distributed Workflow Orchestration",
          content:
            "Built a distributed workflow orchestration platform using Golang, Redis, PostgreSQL, Docker, and Next.js. The system processes workflows through Redis-backed durable queues and concurrent worker pools.",
        },
        {
          title: "Self-Healing Recovery",
          content:
            "Implemented automated retries, fault injection, worker crash simulation, and failure-recovery mechanisms. Failed workflows are automatically detected and retried to reduce manual intervention.",
        },
        {
          title: "Benchmarking & Monitoring",
          content:
            "Evaluated the platform using 620+ workflow executions, achieving an 84.5% workflow success rate while automatically recovering 239 failed tasks. Built dashboards for throughput, recovery latency, worker utilization, and task distribution.",
        },
      ]}
      githubUrl="https://github.com/mridulapbk/self-healing-agent-infra"
    />
  );
};

export default SelfHealingProjectPage;