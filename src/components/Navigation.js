import { useState } from "react";
import { Link } from "react-router-dom";
// import ParticleBackground from "./ParticleBackground";
const Navigation = () => {
  const [currentTab, setCurrentTab] = useState("");

  return (
    <ul className="navbar">
      {/* <ParticleBackground /> */}
      <li>
        <Link
          to="/"
          // href="#aboutMe"
          className={currentTab === "/" ? "active" : "navbarA"}
          onClick={() => {
            setCurrentTab("/");
          }}
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          to="/portfolio"
          className={currentTab === "portfolio" ? "active" : "navbarA"}
          // href="#portfolio"
          onClick={() => {
            setCurrentTab("portfolio");
          }}
        >
          Portfolio
        </Link>
      </li>

      <li>
        <Link
          to="/contact"
          className={currentTab === "contact" ? "active" : "navbarA"}
          // href="#contact"
          onClick={() => {
            setCurrentTab("contact");
          }}
        >
          Contact
        </Link>
      </li>

      <li>
        <a
          className="navbarA"
          target="blank"
          href="https://docs.google.com/document/d/1fyFPhvaP-1Lo1lQ4bbuSqSZTdiliBTZT1yPz8wfJ2K4/edit?usp=sharing"
        >
          Resume
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
