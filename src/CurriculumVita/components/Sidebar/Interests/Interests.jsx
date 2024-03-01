import { mdiController, mdiChessKnight, mdiFencing, mdiDivingScuba, mdiCamera } from '@mdi/js';
import Icon from '@mdi/react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

import ChessMe from '../../../datas/ChessProfile';
import { useTranslation } from '../../../lib/intl';


import useInterests from './useInterests';

import "./Interests.css"

const Interests = () => {
  const { t } = useTranslation()
  const {
    openInterest1,
    openInterest2,
    openInterest3,
    openInterest4,
    openInterest5,
    handleChange1,
    handleChange2,
    handleChange3,
    handleChange4,
    handleChange5,
  } = useInterests()
  const blitzElo = ChessMe.ChessStats.data.chess_blitz.last.rating
  const rapidElo = ChessMe.ChessStats.data.chess_rapid.last.rating

  return (
    <div className="interests">
      <h2 className="h2">{t("INTEREST_TITLE")}</h2>
      <List disablePadding className='interest__list'>
        <ListItem disableGutters onClick={handleChange1}>
          <ListItemIcon>
            <Icon path={mdiDivingScuba} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_1")} />
          {openInterest1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openInterest1}>
          <p>{t("INTEREST_1_TEXT")}</p>
        </Collapse>
        <ListItem disableGutters onClick={handleChange2}>
          <ListItemIcon>
            <Icon path={mdiFencing} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_2")} />
          {openInterest2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openInterest2}>
          <p>{t("INTEREST_2_TEXT")}</p>
        </Collapse>
        <ListItem disableGutters onClick={handleChange3}>
          <ListItemIcon>
            <Icon path={mdiChessKnight} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_3")} />
          {openInterest3 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openInterest3}>
          <p>{t("INTEREST_3_TEXT", { blitzElo: blitzElo, rapidElo: rapidElo })}</p>
        </Collapse>
        <ListItem disableGutters onClick={handleChange4}>
          <ListItemIcon>
            <Icon path={mdiCamera} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_4")} />
          {openInterest4 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openInterest4}>
          <p>{t("INTEREST_4_TEXT")}</p>
        </Collapse>
        <ListItem disableGutters onClick={handleChange5}>
          <ListItemIcon>
            <Icon path={mdiController} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_5")} />
          {openInterest5 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openInterest5}>
          <p>{t("INTEREST_5_TEXT")}</p>
        </Collapse>
      </List>
      <br></br>
    </div >
  );
};

export default Interests;