import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import ResizeObserver from 'resize-observer-polyfill';

const SimpleGlobe = () => {
  const globeEl = useRef(); // Reference to the globe instance
  const [globeSize, setGlobeSize] = useState({ width: 800, height: 600 }); // State for globe dimensions
  const containerRef = useRef(); // Reference to the container div

  // Example data for points (single point at India)
  const [pointsData, setPointsData] = useState([]);

  useEffect(() => {
    // Single point at India with a bigger red pointer
    const examplePoints = [
      {
        lat: 20.5937, // Latitude of India
        lng: 78.9629, // Longitude of India
        label: 'India', // Label for the point
        size: 1.5, // Larger size for the pointer
        color: 'red', // Red color for the pointer
      },
    ];
    setPointsData(examplePoints);
  }, []);

  // Handle responsive resizing
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setGlobeSize({ width, height });
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '80vh',
        position: 'relative',
        backgroundColor: '#000',
      }}
    >
      <Globe
        ref={globeEl}
        width={globeSize.width}
        height={globeSize.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg" // Earth texture
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" // Topology texture
        pointsData={pointsData}
        pointLabel="label"
        pointLat="lat"
        pointLng="lng"
        pointColor={(point) => point.color || 'orange'} // Use custom color for the point
        pointRadius={(point) => point.size || 0.2} // Use custom size for the point
        pointAltitude={0.01} // Altitude of the point
        onPointClick={(point) => {
          console.log('Point clicked:', point);
        }}
        onGlobeClick={(event) => {
          console.log('Globe clicked:', event);
        }}
        backgroundColor="rgba(0, 0, 0, 0)" // Transparent background
        pointOfView={{ lat: 21.164993, lng: 81.775307, altitude: 2}}
      />
    </div>
  );
};

export default SimpleGlobe;