import React from "react";
import { FaDownload } from "react-icons/fa";
import Resume from '../assets/img/resume.pdf';

// resume download 
const Download = () => {
  return (
    <div>
      <a
        href={Resume}
        download='Vince-Peo-Resume.pdf'
      >
       <FaDownload /> Download Resume
      </a>
    </div>
  );
};

// export resume download
export default Download;
