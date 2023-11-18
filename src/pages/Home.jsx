import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import { TypeAnimation } from 'react-type-animation';
import { banner, about } from "../Content";

// landing page with typeanimation
export const Home = () => {
  return (
 <Container fluid>
    <div className="landing">
      <div
        className="h_bg-image order-1 order-lg-2"
        style={{ backgroundImage: `url(${banner.img})` }}
      ></div>
      <div className="text order-2 order-lg-1">
            <h2 className="mb-1x" style={{ fontSize: "42px" }}>{banner.title}</h2>
            <TypeAnimation
              sequence={[
                'Design',
                1200,
                '+ ',
                900,
                'Code ',
                1200,
              ]}
              wrapper='div'
              repeat={Infinity}
              style={{ fontSize: "25px" }}
            />
             <p className="aboutme">{about.me}</p>
      </div>
    </div>
</Container>
  );
};

// export home
export default Home;
