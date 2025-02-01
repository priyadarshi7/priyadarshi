import React from 'react';
import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';

const DevMarquee = () => {
    const techStack = [
        { name: 'HTML5', logo: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' },
        { name: 'CSS3', logo: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' },
        { name: 'Vercel', logo: 'https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white' },
        { name: 'EJS', logo: 'https://img.shields.io/badge/ejs-%23B4CA65.svg?style=for-the-badge&logo=ejs&logoColor=black' },
        { name: 'MUI', logo: 'https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white' },
        { name: 'JWT', logo: 'https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens' },
        { name: 'NPM', logo: 'https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white' },
        { name: 'Next.js', logo: 'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' },
        { name: 'Node.js', logo: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' },
        { name: 'React', logo: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' },
        { name: 'Socket.io', logo: 'https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101' },
        { name: 'TailwindCSS', logo: 'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' },
        { name: 'Nginx', logo: 'https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white' },
        { name: 'MongoDB', logo: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' },
        { name: 'Git', logo: 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white' },
        { name: 'GitHub', logo: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' },
        { name: 'Solidity', logo: 'https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white' },
        { name: 'Ethereum', logo: 'https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white' },
      ];
    

  return (
    <div className="tech-stack-marquee">
      <h2>Dev:</h2>
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

export default DevMarquee;