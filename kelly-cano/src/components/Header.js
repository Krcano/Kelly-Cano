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
};
const Header = () => {
  return (
    <div>
      <h1 style={styles.headerH1}>
        Hi my name is Kelly,
        <br />I am a Junior Full-Stack Developer
      </h1>
      <Navigation />
    </div>
  );
};

export default Header;
