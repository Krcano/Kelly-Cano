import { useState } from "react";
import ParticleBackground from "./ParticleBackground";
const Navigation = ({ handlePages }) => {
  const [currentTab, setCurrentTab] = useState('')

  return (
    <ul className="navbar">
      <ParticleBackground/>
      <li>
        <a
          href="#aboutMe"
          className={currentTab === 'aboutMe' ? 'active'  :"navbarA"}
          onClick={() =>{ handlePages("aboutMe") 
        setCurrentTab('aboutMe')}}
        >
          About Me
        </a>
      </li>
      <li>
        <a
          className={currentTab === 'portfolio' ? 'active' :"navbarA"}
          href="#portfolio"
          onClick={() => {handlePages("portfolio") 
        setCurrentTab('portfolio')}}
        >
          Portfolio
        </a>
      </li>

      <li>
        <a
          className={currentTab === 'contact' ? 'active'  :"navbarA"}
          href="#contact"
          onClick={() =>{ handlePages("contact") 
          setCurrentTab('contact')}}
        >
          Contact
        </a>
      </li>

      <li>
        <a
          className="navbarA"
          target="blank"
          href="https://docs.google.com/document/d/1At0IhvxaAEX7KN1fIbFbRCZCvWpZ9htd7rxATF2TXMo/edit?usp=sharing"
        >
          Resume
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
