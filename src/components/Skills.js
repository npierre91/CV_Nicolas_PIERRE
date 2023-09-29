import React from "react";
import "./Skills.css";
import Skill from "./Skill";
import Interests from "./Interests";
import { useTranslation } from "../lib/intl";

const Skills = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="skills">
        <h2 className="h2">{t("SKILL_TITLE")}</h2>
        <Skill title="HTML/CSS" rating="3" />
        <Skill title="JS/TYPESCRIPT" rating="4" />
        <Skill title="REACT" rating="3" />
        <Skill title="GRAPHQL" rating="4" />
        <Skill title="NODE" rating="3" />
      </div>
      <div className="skills">
        <h2 className="h2">{t("LANGUAGE_TITLE")}</h2>
        <Skill title={t("LANGUAGE_FRENCH")} rating="5" />
        <Skill title={t("LANGUAGE_ENGLISH")} rating="4" />
        <Skill title={t("LANGUAGE_GERMAN")} rating="2" />
      </div>
      <Interests />
    </>
  );
};

export default Skills;
