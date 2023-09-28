import React from "react";
import "./User.css";
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const User = () => {
  return (
    <div className="user">
      <img src="./media/avatar.png" alt="" className="user__avatar" />
      <h1 className="user__name">Nicolas PIERRE</h1>
      <p className="user__profession">Développeur Fullstack</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon />
          9 rue d'Australie, 91300 Massy
        </p>
        <p className="user__info">
          <PhoneIcon />
          <a href="te:+33651897248">06 51 89 72 48</a>
        </p>
        <p className="user__info">
          <MailIcon />
          <a href="mailto:npierre9@yahoo.fr">npierre9@yahoo.fr</a>
        </p>
        <p className="user__info">
          <EventIcon />
          Date de naissance : 09 Août 1998
        </p>
        <p className="user__info">
          <LocationOnIcon />
          Lieu de naissance : Massy
        </p>
      </div>
    </div>
  );
};

export default User;
