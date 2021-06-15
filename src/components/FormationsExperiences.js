import React from "react";
import "./FormationsExperiences.css";
import formationsData from "../datas/Formations";
import experiencesData from "../datas/Experiences";
import Formations from "./Formations";
import Experiences from "./Experiences";

const FormationsExperiences = () => {
  return (
    <>
      <Formations datas={formationsData} />
      <Experiences datas={experiencesData} />
    </>
  );
};

export default FormationsExperiences;
