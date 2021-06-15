import React from "react"
import "./FormationsExperiences.css"
import DataFormations from "../datas/Formations"
import DataExperiences from "../datas/Experiences"
import Formations from "./Formations"
import Experiences from "./Experiences"

function FormationsExperiences() {
  return (
    <>
      <Formations datas={DataFormations} />
      <Experiences datas={DataExperiences} />
    </>
  )
}

export default FormationsExperiences
