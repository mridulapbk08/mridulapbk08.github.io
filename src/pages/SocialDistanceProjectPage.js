import React from "react";

import ProjectDetailPage from "./ProjectDetailPage";

const SocialDistanceProjectPage = () => {
  return (
    <ProjectDetailPage
      eyebrow="COMPUTER VISION"
      title="Social Distance & Face Mask Detection"
      description="A real-time computer-vision monitoring system designed to detect face-mask usage and social-distancing violations from video streams."
      tech={[
        "Python",
        "OpenCV",
        "Deep Learning",
        "Computer Vision",
      ]}
      sections={[
        {
          title: "Real-Time Video Analysis",
          content:
            "Developed a monitoring system that processes video streams from public cameras to identify individuals and evaluate safety compliance in real time.",
        },
        {
          title: "Face Mask Detection",
          content:
            "Applied deep-learning techniques to identify whether detected individuals were correctly wearing face masks, demonstrating practical computer-vision classification.",
        },
        {
          title: "Social Distance Monitoring",
          content:
            "Used geometric techniques to calculate distances between detected individuals and flag social-distancing violations within video frames.",
        },
      ]}
      githubUrl="https://github.com/mridulapbk/Social-Distance-and-Face-Mask-Tracker-main"
    />
  );
};

export default SocialDistanceProjectPage;