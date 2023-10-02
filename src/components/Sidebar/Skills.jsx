import React from "react";
import "./Skills.css";
import Skill from "./Skill";
import Interests from "./Interests/Interests";
import { useTranslation } from "../../lib/intl";


const Skills = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="skills">
        <h2 className="h2">{t("SKILL_TITLE")}</h2>
        <Skill title="HTML/CSS" rating="3" />
        <Skill title="JS/TYPESCRIPT" rating="3" />
        <Skill title="REACT" rating="4" />
        <Skill title="GRAPHQL" rating="4" />
        <Skill title="NODE" rating="3" />
        <Skill title="PYTHON" rating="4" />
      </div>
      <div className="skills">
        <h2 className="h2">{t("LANGUAGE_TITLE")}</h2>
        <Skill title={t("LANGUAGE_FRENCH")} rating="5" />
        <Skill title={t("LANGUAGE_ENGLISH")} rating="4" />
        <Skill title={t("LANGUAGE_GERMAN")} rating="2" />
        {t("LANGUAGE_TOEIC_TEXT")}{t("LANGUAGE_TOEIC_SCORE")}
      </div>
      <Interests />
    </>
  );
};

export default Skills;
