import React from 'react';
import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';
import './Tech.css'; // Custom CSS for styling
import LangMarquee from './Languages/Lang';
import DevMarquee from './Dev/Dev';
import TechStackPopup from './popup/TechPopUp';

const TechStackMarquee = () => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);

    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  

  return (
    <div className="tech-stack-marquee">
       <LangMarquee/>
       <DevMarquee/>
       <button className="view-button" onClick={openPopup}>
        View Tech Stack
      </button>
      {isPopupOpen && <TechStackPopup onClose={closePopup} />}
    </div>
  );
};

export default TechStackMarquee;