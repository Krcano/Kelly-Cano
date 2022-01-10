import React from "react";
const styles = {
  prof: {
    height: "15em",
    borderRadius: " 100%",
  },
  aboutMeP: {
    texAlign: "center",
    fontSize: "1.5em"
  },
  aboutContainer: {
    fontFamily: "Playfair Display, serif",
    color: "#24305e",
    padding: " 4em",
  },
};
const About = () => {
  return (
    <div id="aboutMe" style={styles.aboutContainer}>
      <h2>About Me</h2>
      <img src="./prof.jpg" alt="Profile" style={styles.prof} />
      <p style={styles.aboutMeP}>
        I attended Gorman Learning Center and graduated with a 4.0 GPA as well
        as Honors. Throughout my middle and high school years, I took part in
        various volunteer activities such as assisting in the care of horses at
        Bella Vista Ranch, reading to the residents of the Highland Care Center
        of Redlands, and aiding in the renovation/construction of the local
        Kingdom Hall of Jehovah's Witnesses.These experiences were very
        rewarding and they helped me to see the importance of a self-sacrificing
        spirit and supported the validity to the statement that "there is more
        happiness in giving than receiving". (Acts 20:35) I love working as part
        of a team and collaborating with others to solve problems that arise.
      </p>
    </div>
  );
};

export default About;