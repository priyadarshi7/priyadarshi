import React from 'react';
import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';

const LangMarquee = () => {
    const techStack = [
        { name: 'C', logo: 'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white' },
        { name: 'C++', logo: 'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white' },
        { name: 'JavaScript', logo: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' },
        { name: 'TypeScript', logo: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' },
        { name: 'Java', logo: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white' },
      ];
    

  return (
    <div className="tech-stack-marquee">
      <h2>Lang:</h2>
      <Marquee
        fade={true}
        direction="left"
        pauseOnHover={true}
        className="marquee-container"
        innerClassName="marquee-inner"
      >
        {techStack.map((tech, index) => (
          <div key={index} className="tech-item">
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            {/* <span className="tech-name">{tech.name}</span> */}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LangMarquee;