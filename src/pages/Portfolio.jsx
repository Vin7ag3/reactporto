import React from "react";
import { Container, Col } from "react-bootstrap";
import Project from "../components/Project";

// portfolio page from project components
export const Portfolio = () => {
  return (
    <Container>
        <Col lg="8">
          <h1 className="display-4 mb-4 title"> Portolio </h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      <Project />
    </Container>
  );
};

// export portfolio
export default Portfolio;
