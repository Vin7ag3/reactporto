import React from "react";
import "./Project.css";
import { Container } from "react-bootstrap";
import { portfolio } from "../Content";

// mapping over portfolio array in content.js to render 
export const Project = () => {
  return (
    <Container>
      <div className="mb-5 porto">
        {portfolio.map((data, i) => {
          return (
            <div key={i} className="works">
              <img src={data.img} alt="projects" />
              <div className="content">
                <p>{data.description}</p>
                <a href={data.link}>GitHub Repo</a>
                <a href={data.deploy}>View Project</a>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

// export project
export default Project;
