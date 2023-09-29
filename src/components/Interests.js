import React from 'react';
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
import { useTranslation } from '../lib/intl';

const Interests = () => {
  const { t } = useTranslation()
  return (
    <div className="skills">
      <h2 className="h2">{t("INTEREST_TITLE")}</h2>
      <ul>
        <li>{t("INTEREST_1")}</li>
        <li>{t("INTEREST_2")}</li>
        <li>{t("INTEREST_3")}</li>
        <li>{t("INTEREST_4")}</li>
      </ul>
      <div className="interests">
        <SportsEsportsIcon style={{ fontSize: 40 }} />
        <ScubaDivingIcon style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};

export default Interests;