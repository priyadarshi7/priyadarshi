import React, { useEffect, useRef } from 'react';
import './AboutMe.css'; // Custom CSS for styling
import * as THREE from 'three'; // Import Three.js
import VANTA from 'vanta/dist/vanta.clouds.min'; // Import Vanta.js Waves effect

const AboutMe = () => {
  const vantaRef = useRef(null); // Reference to the container for Vanta.js

  useEffect(() => {
    // Initialize Vanta.js Waves effect
    const vantaEffect = VANTA({
      el: vantaRef.current,
      THREE: THREE, // Pass Three.js library
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      skyColor: 0x0,
      sunColor: 0xdb14f9,
      sunGlareColor: 0xb330ff
    });

    // Cleanup Vanta.js on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section className="about-me-section" ref={vantaRef} id="aboutme">
      <div className="about-me-container">
        <h1 className="about-me-title">About Me</h1>
        <div className="about-me-content">
          <p className="about-me-text">
            Hi, I'm <span className="highlight">Priyadarshi</span>, a passionate and driven{' '}
            <span className="highlight">Full Stack Developer</span> currently building a startup. I thrive on turning ideas into reality through code and innovation.
          </p>
          <p className="about-me-text">
            My journey in technology has led me to deeply explore{' '}
            <span className="highlight">Blockchain technology</span> and its transformative applications. I am fascinated by its potential to create decentralized, secure, and transparent solutions that can revolutionize industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;