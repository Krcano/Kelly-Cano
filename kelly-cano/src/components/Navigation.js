import React from "react";
// import Resume from './developer-resume.pdf'

const Navigation = ({currentPage, handlePages}) => {
  return (
      <ul className="navbar">
        <li>
          <a href="#aboutMe" className="navbarA" onClick={()=>handlePages('aboutMe')}>
            About Me
          </a>
        </li>
        <li>
          <a className="navbarA" href="#projects" onClick={()=>handlePages('portfolio')}>
            Portfolio
          </a>
        </li>
        {/* trying to bring in my resume */}
        <li>
          <a className="navbarA" target='blank' href="https://docs.google.com/document/d/1fyFPhvaP-1Lo1lQ4bbuSqSZTdiliBTZT1yPz8wfJ2K4/edit?usp=sharing">
              Resume</a>
        </li>
        <li>
          <a className="navbarA" href="/#contact" onClick={()=>handlePages('contact')}>
            Contact
          </a>
        </li>
      </ul>
  );
};

export default Navigation;
