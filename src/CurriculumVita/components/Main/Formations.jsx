import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, ListItemButton } from '@mui/material';
import PropTypes from 'prop-types'
import React from 'react';

import { useTranslation } from '../../lib/intl';

import "./FormationsExperiences.css"

const Formations = ({ datas }) => {
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false)
  const handleChange = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="cursus mb3">
      <h2 className="h2">{t("FORMATION_TITLE")}</h2>
      {datas.map((item, key) => (
        <div key={key} className="grid__row">
          <div className="grid__item">
            <p className="grid__date">{item.date}</p>
          </div>
          <div className="grid__item">
            {key === 0 ? <ListItemButton disableGutters onClick={handleChange}>
              {open ? <ExpandLess /> : <ExpandMore />}
              <h3 className="grid__title">{item.title}</h3>
            </ListItemButton> : <h3 className="grid__title">{item.title}</h3>}
            <p className="grid__location">{item.location}</p>
            <Collapse in={open}>
              {item.options ? <h4>{t("FORMATION_OPTIONS_TITLE")}</h4> : null}
              <p className='grid__text'>{item.options ? item.options.map((option, k) => (
                <li key={k}>{option}</li>
              )) : null}</p>
              {item.projects ? <h4>{t("FORMATION_PROJECTS_TITLE")}</h4> : null}
              <p className='grid__text'>{item.projects ? item.projects.map((project, k) => (
                <li key={k}>{project}</li>
              )) : null}</p>
            </Collapse>
          </div>
        </div>
      ))}
    </div>
  );
};

Formations.propTypes = {
  datas: PropTypes.array.isRequired
}

export default Formations;