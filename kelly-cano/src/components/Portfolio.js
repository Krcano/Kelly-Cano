import React from "react";
import { projects } from "../projectData";

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="titleContainer">
        <h1 className="Title">Portfolio</h1>
      </div>
      <div className="projectContainer">
        {projects.map((project) => (
          <div>
            <div key={project.title} className="projectImgs">
              <img alt="gallery" src={project.image} className="imageTag" />

              <div className="imageOverlay">
                <a href={project.deployedLink}>
                  <h1 className="imageTitle">{project.title}</h1>
                </a>
                <p className="imageDescr">{project.description}</p>
                <a href={project.github} target="blank">
                  <img
                    src="./GitHub-Mark/PNG/white-github-40px.png"
                    alt="github icon"
                    className="icons"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
