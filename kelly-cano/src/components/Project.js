import React from "react";
import { projects } from "../projectData";

const Project = () => {
 

  return (
    <section className="section" id="projects">
      <div className="textContainer">
        <h1 className="containerTitle">My Projects</h1>
      </div>
      <div className="projectContainer">
        {projects.map((project) => (
          <a href={project.link} className="projectA">
            <div key={project.image} className="projectImgs">
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default Project;
