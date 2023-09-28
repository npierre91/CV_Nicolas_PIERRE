import React from 'react';
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';

const Interests = () => {
  return (
    <div className="skills">
      <h2 className="h2">Centres d'intérêts</h2>
      <ul>
        <li>Jeux vidéos</li>
        <li>Echecs</li>
        <li>Escrime</li>
        <li>Plongée subaquatique</li>
      </ul>
      <div className="interests">
        <SportsEsportsIcon style={{ fontSize: 40 }} />
        <ScubaDivingIcon style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};

export default Interests;