import React from "react";
import "./Skills.css";
import Skill from "./Skill";
import Interests from "./Interests";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML/CSS" rating="3" />
        <Skill title="JS/TYPESCRIPT" rating="4" />
        <Skill title="REACT" rating="3" />
        <Skill title="GRAPHQL" rating="4" />
        <Skill title="NODE" rating="3" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Français" rating="5" />
        <Skill title="Anglais" rating="4" />
        <Skill title="Allemand" rating="2" />
      </div>
      <Interests />
    </>
  );
};

export default Skills;
