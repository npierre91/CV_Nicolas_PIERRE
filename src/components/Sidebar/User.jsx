import React from "react";
import "./User.css";
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useTranslation } from "../../lib/intl";

const User = () => {
  const { t } = useTranslation()
  return (
    <div className="user">
      <img src="./media/avatar.png" alt="" className="user__avatar" />
      <h1 className="user__name">{t("USER_FULLNAME")}</h1>
      <p className="user__profession">{t("USER_PROFESSION")}</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon />
          {t("USER_ADDRESS")}
        </p>
        <p className="user__info">
          <PhoneIcon />
          <a href="te:+33651897248">{t("USER_PHONE")}</a>
        </p>
        <p className="user__info">
          <MailIcon />
          <a href="mailto:npierre9@yahoo.fr">{t("USER_EMAIL")}</a>
        </p>
        <p className="user__info">
          <EventIcon />
          {t("USER_BIRTHDATE")}
        </p>
        <p className="user__info">
          <LocationOnIcon />
          {t("USER_BIRTHPLACE")}
        </p>
        <p className="user__info">
          <DirectionsCarIcon />
          {t("USER_DRIVING_LICENSE")}
        </p>
      </div>
    </div>
  );
};

export default User;
