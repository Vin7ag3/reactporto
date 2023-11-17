import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

// footer with social media links
const Footer = () => {
  return (
      <div className="footer">
        <div>
          <a
            href='https://github.com/Vin7ag3'
            className='fticon'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://www.linkedin.com/in/vincepeo'
            className='fticon'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='https://stackoverflow.com/users/22928987/vince-peo'
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


