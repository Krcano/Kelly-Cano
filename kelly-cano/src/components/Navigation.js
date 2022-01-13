import React from "react";
// import Resume from ''

const Navigation = () => {
  return (
      <ul className="navbar">
        <li>
          <a href="#aboutMe" className="navbarA">
            About Me
          </a>
        </li>
        <li>
          <a className="navbarA" href="#projects">
            Projects
          </a>
        </li>
        {/* trying to bring in my resume */}
        {/* <li>
          <a style=className="styles.navbarA" href="./developer-resume.pdf">
              Resume</a>
        </li> */}
        <li>
          <a className="navbarA" href="/#contact">
            Contact
          </a>
        </li>
      </ul>
  );
};

export default Navigation;
