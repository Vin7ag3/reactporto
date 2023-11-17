import React from 'react';
import { Link } from 'react-router-dom';

// navigation links
const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='nav-bar'>
        <Link to='/' className='active'>
          About
        </Link>
        <Link to='/reactporto/portfolio' className='active'>
          Portfolio
        </Link>
        <Link to='/reactporto/contact' className='active'>
          Contact
        </Link>
        <Link to='/reactporto/resume' className='active'>
          Resume
        </Link>
      </div>
    </div>
  );
};

// export nav
export default Navigation;
