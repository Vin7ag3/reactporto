import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

// footer with social media links
const Footer = () => {
  return (
      <div className="footer">
        <div>
          <a
            href='https://github.com/Vin7ag3'
            onMouseOver={({target})=>target.style.color="8b0000"}
            onMouseOut={({target})=>target.style.color="d5ceca"}
            className='fticon'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://www.linkedin.com/in/vincepeo'
            onMouseOver={({target})=>target.style.color="8b0000"}
            onMouseOut={({target})=>target.style.color="d5ceca"}
            className='fticon'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='https://stackoverflow.com/users/22928987/vince-peo'
            onMouseOver={({target})=>target.style.color="8b0000"}
            onMouseOut={({target})=>target.style.color="d5ceca"}
            className='fticon'
          >
            <FaStackOverflow size={24} />
          </a>
        </div>
      </div>
  );
};

// export footer
export default Footer;


