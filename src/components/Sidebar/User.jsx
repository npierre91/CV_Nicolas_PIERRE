
import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SailingIcon from '@mui/icons-material/Sailing';
import React from 'react';

import './User.css';
import {useTranslation} from '../../lib/intl';

const User = () => {
  const {t} = useTranslation();
  return (
    <div className="user">
      <img alt="" className="user__avatar" src="./media/avatar.png" />
      <h1 className="user__name">{t('USER_FULLNAME')}</h1>
      <p className="user__profession">{t('USER_PROFESSION')}</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon />
          {t('USER_ADDRESS')}
        </p>
        <p className="user__info">
          <PhoneIcon />
          <a href="te:+33651897248">{t('USER_PHONE')}</a>
        </p>
        <p className="user__info">
          <MailIcon />
          <a href="mailto:npierre9@yahoo.fr">{t('USER_EMAIL')}</a>
        </p>
        <p className="user__info">
          <EventIcon />
          {t('USER_BIRTHDATE')}
        </p>
        <p className="user__info">
          <LocationOnIcon />
          {t('USER_BIRTHPLACE')}
        </p>
        <p className="user__info">
          <DirectionsCarIcon />
          {t('USER_DRIVING_LICENSE')}
        </p>
        <p className="user__info">
          <SailingIcon />
          {t('USER_BOAT_LICENSE')}
        </p>
      </div>
    </div>
  );
};

export default User;
