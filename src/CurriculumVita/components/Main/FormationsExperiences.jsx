import React from "react";

import "./FormationsExperiences.css";
import experiencesData from "../../datas/Experiences";
import formationsData from "../../datas/Formations";
import { useIntlLangContext } from "../../lib/intl";

import Experiences from "./Experiences";
import Formations from "./Formations";

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
