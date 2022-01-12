import React from "react";
import Navigation from "./Navigation";

const styles = {
  headerH1: {
    marginTop: "1.5em",
    color: "#24305e",
    marginLeft: "1em",
    marginBottom: "1em",
    fontFamily: "Playfair Display, serif",

  },
  span:{
    color:'#f87e49'
  }
};
const Header = () => {
  return (
    <div>
      <h1 style={styles.headerH1}>
        Hi my name is Kelly.
        <br /> I am a <span style={styles.span}> Junior Full-Stack Developer</span>
      </h1>
      <Navigation />
    </div>
  );
};

export default Header;
