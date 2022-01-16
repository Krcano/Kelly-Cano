import React from "react";
import Navigation from "./Navigation";

const Header = ({ currentPage, handlePages }) => {
  return (
    <div className="headerContainer">
      <h1 className="headerH1">
        Hi my name is Kelly.
        <br /> I am a <span className="span">Full-Stack Developer</span>
      </h1>
      <Navigation currentPage={currentPage} handlePages={handlePages} />
    </div>
  );
};

export default Header;
