import React from "react";

import "./Skills.css";
import { useTranslation } from "../../lib/intl";

import Interests from "./Interests/Interests";
import Skill from "./Skill";


const Skills = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="skills">
        <h2 className="h2">{t("SKILL_TITLE")}</h2>
        <Skill rating="4" title={t("SKILL_ANALYSIS")} />
        <Skill rating="3" title="HTML/CSS" />
        <Skill rating="4" title="JS/TYPESCRIPT/REACT" />
        <Skill rating="4" title="GRAPHQL" />
        <Skill rating="4" title="PYTHON" />
        <Skill rating="2" title="C# .NET" />
      </div>
      <div className="skills">
        <h2 className="h2">{t("LANGUAGE_TITLE")}</h2>
        <Skill rating="5" title={t("LANGUAGE_FRENCH")} />
        <Skill rating="4" title={t("LANGUAGE_ENGLISH")} />
        <Skill rating="2" title={t("LANGUAGE_GERMAN")} />
        {t("LANGUAGE_TOEIC_TEXT")}{t("LANGUAGE_TOEIC_SCORE")}
      </div>
      <Interests />
    </>
  );
};

export default Skills;
