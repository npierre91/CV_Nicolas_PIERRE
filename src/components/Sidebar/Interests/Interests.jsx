import React from 'react';
import Icon from '@mdi/react';
import { mdiController, mdiChessKnight, mdiFencing, mdiDivingScuba, mdiCamera } from '@mdi/js';
import { useTranslation } from '../../../lib/intl';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import useInterests from './useInterests';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

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
  return (
    <div className="interest__list">
      <h2 className="h2">{t("INTEREST_TITLE")}</h2>
      <List >
        <ListItemButton disableGutters onClick={handleChange1}>
          <ListItemIcon>
            <Icon path={mdiController} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_1")} />
          {openInterest1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openInterest1}>
          <p>{t("INTEREST_1_TEXT")}</p>
        </Collapse>
        <ListItemButton disableGutters onClick={handleChange2}>
          <ListItemIcon>
            <Icon path={mdiChessKnight} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_2")} />
          {openInterest2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openInterest2}>
          <p>{t("INTEREST_2_TEXT")}</p>
        </Collapse>
        <ListItemButton disableGutters onClick={handleChange3}>
          <ListItemIcon>
            <Icon path={mdiFencing} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_3")} />
          {openInterest3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openInterest3}>
          <p>{t("INTEREST_3_TEXT")}</p>
        </Collapse>
        <ListItemButton disableGutters onClick={handleChange4}>
          <ListItemIcon>
            <Icon path={mdiDivingScuba} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_4")} />
          {openInterest4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openInterest4}>
          <p>{t("INTEREST_4_TEXT")}</p>
        </Collapse>
        <ListItemButton disableGutters onClick={handleChange5}>
          <ListItemIcon>
            <Icon path={mdiCamera} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_5")} />
          {openInterest5 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openInterest5}>
          <p>{t("INTEREST_5_TEXT")}</p>
        </Collapse>
      </List>
      <br></br>
    </div >
  );
};

export default Interests;