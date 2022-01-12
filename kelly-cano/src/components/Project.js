import React from "react";
import { projects } from "../projectData";
import { useState } from "react";
const styles = {
  // for section title
  textContainer: {},
  //  holds everying in that have to do with the project set up
  projectContainer: {},
  section: {},
  projectA: {},
  projectImgs: {
    display: "flex",
    position: "relative",
    width: "30%",
    // flexDirection:'row'
  },
  imageOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6",
    color: "white",
    display: "flex",
    fontFamily: "Playfair Display, serif",
    flexDirection: "columm",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  imageTag: {
    // display: "block",
    // adjusts the picture width to the overlay
    width: "100%",
  },

  imageDescr: {
    //   lessens the space between title and descr
    marginTop: "-3em",
  },
  imageTitle: {
    color: "white",
    textDecorationColor: "white",
  },
};
const Project = () => {
  //   let [hover, setHover] = useState('false');
  // let hoverEffect={
  //    opacity:'0'
  // }
  // if(hover){
  //     hoverEffect.opacity='1'
  // }else{
  //     hoverEffect.opacity='0'
  // }
  // --------------------------
//  This state is used to create the hover effect for the Projects section
  const [isShown, setIsShown] = useState(false);

  return (
    <section style={styles.section} id="projects">
      <div style={styles.textContainer}>
        \<h1 style={styles.h1}>My Projects</h1>
        <h3>The following are projects I have worked on thus far:</h3>
      </div>
      <div style={styles.projectContainer}>
        {projects.map((project) => (
          <a href={project.link} key={project.image} style={styles.projectA}>
            <div
              style={styles.projectImgs}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <img alt="gallery" src={project.image} style={styles.imageTag} />
              {isShown && (
                <div style={styles.imageOverlay}>
                  <a href={project.deployedLink}>
                    <h1 style={styles.imageTitle}>{project.title}</h1>
                  </a>
                  <p style={styles.imageDescr}>{project.description}</p>
                  <a href={project.github} target="blank">
                    <img
                      src="./GitHub-Mark/PNG/white-github-40px.png"
                      alt="github icon"
                    />
                  </a>
                </div>
              )}
              {/* The following code was created prior to the hover effect */}
              {/* <div
                style={styles.imageOverlay}
                //    onMouseEnter={(e) => {
                //     setHover(true)
                //   }}
                //   onMouseLeave={(e) => {
                //     setHover=(false)
                //   }}
              >
                {/* <a href={project.deployedLink}>
                  <h1 style={styles.imageTitle}>{project.title}</h1>
                </a>
                <p style={styles.imageDescr}>{project.description}</p>
                <a href={project.github} target="blank">
                  <img
                    src="./GitHub-Mark/PNG/white-github-40px.png"
                    alt="github icon"
                  />
                </a> */}
              {/* </div>  */}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Project;
