import React from "react";
// import githubIcon from './GitHub-Mark/PNG/GitHub-Mark-32px.png'
// import Contact from './Contact'

const Footer = () => {
  return (
    <div className="linksContainer">
      <a className="links" href="https://github.com/Krcano" target="blank">
        <img src="./GitHub-Mark/PNG/white-github-40px.png" alt="Github icon" />
      </a>
      <a
        className="links"
        href="https://www.linkedin.com/in/kelly-r-cano/"
        target="blank"
      >
        <img src="./linkedin-logo-2430 (1).png" alt="LinkedIn icon" />
      </a>
      <a
        className="links"
        href="https://stackoverflow.com/users/16426701/kelly-cano"
        target="blank"
      >
        <img src="./stack-overflow-32px.png" alt="Stack Overflow icon" />
      </a>
    </div>
  );
};

export default Footer;
