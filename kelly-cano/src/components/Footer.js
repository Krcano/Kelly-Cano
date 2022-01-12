import React from "react";
// import githubIcon from './GitHub-Mark/PNG/GitHub-Mark-32px.png'
// import Contact from './Contact'
const styles = {
  linksContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    // marginRight: "3em",
  },
  links: {
    paddingLeft: "1em",
    marginTop: "3em",
    marginRight: "1em",
  },
};
const Footer = () => {
  return (
    <div style={styles.linksContainer}>
      <a style={styles.links} href="https://github.com/Krcano" target='blank'>
        <img src="./GitHub-Mark/PNG/GitHub-Mark-32px.png" alt="Github icon" />
      </a>
      <a style={styles.links} href="https://www.linkedin.com/in/kelly-r-cano/" target='blank'>
        <img src="./linkedin-logo-2430 (1).png" alt="LinkedIn icon" />
        </a>
    </div>
  );
};

export default Footer;
