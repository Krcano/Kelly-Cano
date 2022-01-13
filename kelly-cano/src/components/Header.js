import React from "react";
import Navigation from "./Navigation";


const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="headerH1">
        Hi my name is Kelly.
        <br /> I am a <span className="span"> Junior Full-Stack Developer</span>
      </h1>
      <Navigation />
    </div>
  );
};

export default Header;
