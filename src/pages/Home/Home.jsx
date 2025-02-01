// import React, { useState, useEffect, useRef } from "react";
// import DrawerAppBar from "../../components/Navbar/Navbar";
// import Hologram from "../../components/Hologram/Hologram";
// import { presets, glyphs } from 'glitched-writer'
// import "./Home.css";
// import FOGS from "vanta/dist/vanta.fog.min";
// import * as THREE from "three";
// import GlitchedWriter from 'glitched-writer';

// const Home = () => {
//   // const [vantaEffect, setVantaEffect] = useState(null);
//   // const vantaRef = useRef(null);
//   const textRef = useRef(null);

//   // Vanta.js effect setup
//   // useEffect(() => {
//   //   if (!vantaEffect) {
//   //     setVantaEffect(
//   //       FOGS({
//   //         el: vantaRef.current, // Use the ref for the container
//   //         THREE: THREE,
//   //         mouseControls: true,
//   //         touchControls: true,
//   //         gyroControls: false,
//   //         minHeight: 200.0,
//   //         minWidth: 200.0,
//   //         scale: 1.0,
//   //         scaleMobile: 1.0,
//   //         color: 0x000000, // Pure black base color
//   //         highlightColor: 0x8a2be2, // Bright violet highlight
//   //         midtoneColor: 0x4b0082, // Dark violet midtone
//   //         backgroundColor: 0x000000, // Pure black background
//   //         speed: 5.0, // Increased speed for a dynamic, futuristic feel
//   //         blurFactor: 0.9, // Add blur for a soft, glowing effect
//   //       })
//   //     );
//   //   }

//   //   return () => {
//   //     if (vantaEffect) vantaEffect.destroy();
//   //   };
//   // }, [vantaEffect]);

//   // GlitchedWriter effect setup
//   useEffect(() => {
//     const writer = new GlitchedWriter(textRef.current, {
//       interval: [10, 70],
//       letterize: true,
//       ...presets.default,
//     })
    
//     writer.write("I am Priyadarshi");

//     return () => {
//       writer.destroy();
//     };
//   }, []);

//   return (
//     <div className="home">
//       <DrawerAppBar />
//       <div className="hologram-container">
//         <Hologram />
//       </div>
//       <div className="home-text" ref={textRef}>
//         {/* The text will be written by glitched-writer */}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect, useRef } from "react";
import DrawerAppBar from "../../components/Navbar/Navbar";
import Hologram from "../../components/Hologram/Hologram";
import { presets } from 'glitched-writer';
import "./Home.css";
import FOGS from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import GlitchedWriter from 'glitched-writer';
import FuturisticCard from "../../components/Home/Contact/FuturisticCard";
import TechStackMarquee from "../../components/Home/Tech/Tech";
import AboutMe from "../../components/AboutMe/About";

const Home = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);

  // GlitchedWriter effect setup
  useEffect(() => {
    const writer = new GlitchedWriter(textRef.current, {
      interval: [10, 70],
      letterize: true,
      ...presets.default,
 // Enable endless mode
    });
    
    // Function to restart the glitch effect
    const restartGlitch = () => {
      writer.write(`I am Priyadarshi`)
    };

    // Start the initial glitch effect
    restartGlitch();

    // Set up an interval to restart the glitch effect every 2 seconds
    const intervalId = setInterval(restartGlitch, 10000);

    // Cleanup on component unmount
    return () => {
      clearInterval(intervalId); // Clear the interval
      writer.destroy(); // Destroy the writer instance
    };
  }, []);

  useEffect(() => {
    const writer = new GlitchedWriter(textRef2.current, {
      interval: [10, 70],
      letterize: true,
      ...presets.default,
 // Enable endless mode
    });
    
    // Function to restart the glitch effect
    const restartGlitch = () => {
      writer.write(`Developer`)
    };

    // Start the initial glitch effect
    restartGlitch();

    // Set up an interval to restart the glitch effect every 2 seconds
    const intervalId = setInterval(restartGlitch, 10000);

    // Cleanup on component unmount
    return () => {
      clearInterval(intervalId); // Clear the interval
      writer.destroy(); // Destroy the writer instance
    };
  }, []);

  return (
    <>
    <div className="home" >
      <DrawerAppBar />
      <div className="home-text-main">
      <div className="home-text" ref={textRef}>
        {/* The text will be written by glitched-writer */}
      </div>
      <div className="home-text" ref={textRef2}>
        {/* The text will be written by glitched-writer */}
      </div>
      </div>
      <div className="hologram-container">
        <Hologram />
      </div>
      <div className="scroll-down-indicator">
          <span className="scroll-text">Scroll Down</span>
          {/* <span className="scroll-arrow">↓</span> */}
          <div className="scroll-indicator" style={{display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center", fontFamily:"future", color:"white"}}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-down"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
</div>
        </div>
    </div>
    <AboutMe/>
    <TechStackMarquee/>
    <FuturisticCard/>
    </>
  );
};

export default Home;