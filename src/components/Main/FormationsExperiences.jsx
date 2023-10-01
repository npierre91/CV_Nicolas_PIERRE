import React from "react";
import "./FormationsExperiences.css";
import formationsData from "../../datas/Formations";
import experiencesData from "../../datas/Experiences";
import Formations from "./Formations";
import Experiences from "./Experiences";
import { useIntlLangContext } from "../../lib/intl";

const FormationsExperiences = () => {
  const { currentLanguage } = useIntlLangContext()
  return (
    <>
      <Experiences datas={experiencesData[currentLanguage]} />
      <Formations datas={formationsData[currentLanguage]} />
    </>
  );
};

export default FormationsExperiences;
