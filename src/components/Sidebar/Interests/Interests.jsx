import React from 'react';
import Icon from '@mdi/react';
import { mdiController, mdiChessKnight, mdiFencing, mdiDivingScuba } from '@mdi/js';
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
    handleChange1,
    handleChange2,
    handleChange3,
    handleChange4,
  } = useInterests()
  return (
    <div className="interest__list">
      <h2 className="h2">{t("INTEREST_TITLE")}</h2>
      <List >
        <ListItemButton onClick={handleChange1}>
          <ListItemIcon>
            <Icon path={mdiController} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_1")} />
          {openInterest1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openInterest1}>
          <p>Test</p>
        </Collapse>
        <ListItemButton onClick={handleChange2}>
          <ListItemIcon>
            <Icon path={mdiChessKnight} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_2")} />
          {openInterest2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openInterest2}>
          <p>Test</p>
        </Collapse>
        <ListItemButton onClick={handleChange3}>
          <ListItemIcon>
            <Icon path={mdiFencing} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_3")} />
          {openInterest3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openInterest3}>
          <p>Test</p>
        </Collapse>
        <ListItemButton onClick={handleChange4}>
          <ListItemIcon>
            <Icon path={mdiDivingScuba} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("INTEREST_4")} />
          {openInterest4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openInterest4}>
          <p>Test</p>
        </Collapse>
      </List>
    </div >
  );
};

export default Interests;