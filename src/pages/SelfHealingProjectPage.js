import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SelfHealingProjectPage.css";

const SelfHealingProjectPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="project-page-cloud-container" data-aos="fade-up">
      <header className="project-header" data-aos="fade-down">
        <h1>Self-Healing Agent Infrastructure</h1>
      </header>

      <section className="project-cloud-details">
        <div className="details-section-cloud" data-aos="fade-right">
          <h2>Distributed Workflow Orchestration</h2>
          <p>
            Built a distributed workflow orchestration platform using Golang,
            Redis, PostgreSQL, Docker, and Next.js. The system processes
            workflows through Redis-backed durable queues and concurrent worker
            pools, enabling scalable and fault-tolerant execution.
          </p>
        </div>

        <div className="details-section-cloud" data-aos="fade-up">
          <h2>Self-Healing Recovery</h2>
          <p>
            Implemented automated retries, fault injection, worker crash
            simulation, and failure recovery mechanisms. Failed workflows are
            automatically detected and retried, reducing manual intervention
            and improving platform reliability.
          </p>
        </div>

        <div className="details-section-cloud" data-aos="fade-left">
          <h2>Benchmarking & Monitoring</h2>
          <p>
            Evaluated the platform using 620+ workflow executions, achieving
            an 84.5% workflow success rate while automatically recovering
            239 failed tasks. Built dashboards for throughput, recovery
            latency, worker utilization, and task distribution monitoring.
          </p>
        </div>
      </section>

      <div className="github-link" data-aos="zoom-in">
        <a
          href="https://github.com/mridulapbk/self-healing-agent-infra"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default SelfHealingProjectPage;