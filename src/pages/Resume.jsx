import React from "react";
import "./Resume.css";
import { Container, Row, Col } from "react-bootstrap";
import { about, skills } from "../Content";
import Download from "./Download";

// resume page with resume download component
const Resume = () => {
  return (
    <Container>
        <Col>
          <h1 className="display-4 mb-4 title">Resume</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      <Row className="about">
          <h2 className="code">{about.title}</h2>
          <div>
            <p>{about.me}</p>
            <Download />
          </div>
      </Row>
          <h3>Proficiencies</h3>
            <Row>
          <Col>
            <ul>
            {skills.map((data, i) => {
              return (
                <li key={i}>
                  <h5>{data.name}</h5>
                </li>
              );
            })}
            </ul>
          </Col>
        </Row>
    </Container>
  );
};

// export resume
export default Resume;
