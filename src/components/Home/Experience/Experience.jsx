import React from "react";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import "./Experience.css"; // Import custom CSS

const MarqueeExperience = () => {
  // Example experience data with logos
  const experiences = [
    {
      company: "TSoC",
      title: "The Society Of Coders, IIIT NR",
      description: "Prepared and Oragnised Competetive Programming Questions",
      logo: "/ExperienceLogo/TSoC.png", // Placeholder logo URL
    },
    {
      company: "E-Cell",
      title: "E-Cell, IIIT NR",
      description: "Developed the official website of IIIT, NR.",
      logo: "/ExperienceLogo/ecell.png", // Placeholder logo URL
    },
    {
      company: "MUN",
      title: "MUN-IIIT,NR",
      description: "Built the official website of IIIT, NR.",
      logo: "/ExperienceLogo/mun.png", // Placeholder logo URL
    },
    {
      company: "Technovate",
      title: "Technovate, IIIT-NR",
      description: "Developed Website for the technical fest of IIIT, NR",
      logo: "/ExperienceLogo/technovate.png", // Placeholder logo URL
    },
    {
        company: "Cryptic Hunt",
        title: "Cryptic Hunt",
        description: "Developed website for cryptic hubt event of IIIT, NR involving challenging cryptic puzzles.",
        logo: "/ExperienceLogo/technovate.png", // Placeholder logo URL
      },

      {
        company: "Web Dev Club Head",
        title: "Web Dev Club, IIIT-NR",
        description: "Lead of the Web Dev Club of IIIT, Naya Raipur leading to develop multiple websites in team.",
        logo: "/ExperienceLogo/web.png", // Placeholder logo URL
      },
  ];

  return (
    <div className="marquee-container">
      <h1 className="marquee-title">My Experience</h1>
      <Marquee
        fade={true}
        direction="left"
        pauseOnHover={true}
        className="marquee-wrapper" // Custom class for marquee container
        innerClassName="marquee-inner" // Custom class for marquee inner content
      >
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="company-logo-container">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="company-logo"
              />
            </div>
            <h2 className="company-name">{exp.company}</h2>
            <h3 className="job-title">{exp.title}</h3>
            <p className="job-description">{exp.description}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeExperience;