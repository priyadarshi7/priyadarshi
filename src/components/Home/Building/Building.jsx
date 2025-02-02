import React from "react";
import "./Building.css"; // Import custom CSS

const Building = () => {
  // Example experience data with logos
  const experiences = [
    {
      company: "Rootvestors",
      title: "Rootvestors",
      description: "Developing Backend and Frontend for the startup, Rootvestors",
      logo: "/BuildingLogo/rootvestors.png", // Placeholder logo URL
    },
    {
      company: "Alumni Cell",
      title: "Alumni Cell, IIIT NR",
      description: "Developing the backend, frontend and security for the official Alumni Cell of IIIT-NR",
      logo: "/BuildingLogo/alumni.png", // Placeholder logo URL
    },
    {
        company: "Personal Projects",
        title: "Many Personal Projects",
        description: "Exploring Tech, developing skills and building stuff out of my comfort zone.",
        logo: "/BuildingLogo/ps.png", // Placeholder logo URL
      },
  ];

  return (
    <div className="experience-container">
      <h1 className="experience-title">Currently Building</h1>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="company-logo-container">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="company-logo"
              />
            </div>
            <h2 className="company-name"  style={{fontFamily:"fantasy"}}>{exp.company}</h2>
            <h3 className="job-title" style={{fontFamily:"fantasy"}}>{exp.title}</h3>
            <p className="job-description" style={{fontFamily:"fantasy"}}>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Building;