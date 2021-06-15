import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg" className="user__avatar" alt="John Doe" />
      <h1 className="user__name">John Doe</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 22 rue du codeur 75001 Paris
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+33606060606">0606060606</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:johndoe@gmail.com">johndoe@gmail.com</a>
        </p>
        <p className="user__info">
          <EventIcon /> Date de naissance: 22 Mai 2000
        </p>
        <p className="user__info">
          <LocationOnIcon /> Lieu de naissance: Paris
        </p>
      </div>
    </div>
  )
}

export default User
