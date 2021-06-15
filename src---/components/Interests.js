import React from "react"
import SportsTennisIcon from "@material-ui/icons/SportsTennis"
import CodeIcon from "@material-ui/icons/Code"
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk"
import SportsEsportsIcon from "@material-ui/icons/SportsEsports"
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary"

function Interests() {
  return (
    <div className="skills">
      <h2 className="h2">Centres d'intérêts</h2>
      <ul>
        <li>Informatique</li>
        <li>Musique</li>
        <li>Tennis</li>
        <li>Randonnée</li>
      </ul>
      <div className="interests">
        <SportsTennisIcon style={{ fontSize: 40 }} />
        <SportsEsportsIcon style={{ fontSize: 40 }} />
        <CodeIcon style={{ fontSize: 40 }} />
        <DirectionsWalkIcon style={{ fontSize: 40 }} />
        <LocalLibraryIcon style={{ fontSize: 40 }} />
      </div>
    </div>
  )
}

export default Interests
