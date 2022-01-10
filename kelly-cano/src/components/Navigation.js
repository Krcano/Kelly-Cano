import React from "react";
// import Resume from ''
const styles = {
  navbarA: {
    // paddingLeft: "1em",
    marginTop: "3em",
    marginRight: "5em",
    fontSize: "1.5em",
  },
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    // alignItems: "flex-start",
    fontFamily: "Playfair Display, serif",
    listStyleType: "none",
  },
};
const Navigation = () => {
  return (
    <div>
      <ul style={styles.navbar}>
        <li>
          <a href="#aboutMe" style={styles.navbarA}>
            About Me
          </a>
        </li>
        <li>
          <a style={styles.navbarA} href="#projects">
            Projects
          </a>
        </li>
        {/* trying to bring in my resume */}
        {/* <li>
          <a style={styles.navbarA} href="">
              Resume</a>
        </li> */}
        <li>
          <a style={styles.navbarA} href="/#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
