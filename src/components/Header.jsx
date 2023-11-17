import React from 'react';
import { Col } from "react-bootstrap";
import Navigation from './Navigation';
import { logo } from "../Content";

// header with logo + nav
const Header = () => {
  return (
    <Col>
        <div className="logo">
            <img src={logo.img} />
        </div>
        <Navigation />
    </Col>
  );
};

// export header
export default Header;


