import React from "react";
import { useTranslation } from "../../lib/intl";
import { Collapse, ListItem } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Experiences = ({ datas }) => {
  const { t } = useTranslation()
  const initialStateOpen = [false, false]
  const [open, setOpen] = React.useState(initialStateOpen)
  const handleChange = (key) => {
    const newState = open.map((state, index) => {
      if (index === key) {
        return !state
      } else {
        return state
      }
    })
    setOpen(newState)
  }
  return (
    <div className="cursus mb3">
      <h2 className="h2">{t('EXPERIENCE_TITLE')}</h2>
      {datas.map((item, key) => (
        <div className="grid__row" key={key}>
          <div className="grid__item">
            <p className="grid__date">{item.date}</p>
          </div>
          <div className="grid__item">
            <ListItem disableGutters button={true} onClick={() => handleChange(key)}>
              {open[key] ? <ExpandLess /> : <ExpandMore />}
              <h3 className="grid__title">{item.title}</h3>
            </ListItem>

            <p className="grid__location">{item.location}</p>
            <Collapse in={open[key]}>
              <p className="grid__text">{item.text}</p>
              <h5 className="grid__titleTechnos">{"TECHNOLOGIES UTILISEES"}</h5>
              <ul className="grid__technos">
                {item.technos.map((techno, k) => (
                  <li className="grid_techno" key={k}>{techno}</li>
                ))}
              </ul>
              <h5 className="grid__titleMissions">{"MISSIONS PRINCIPALES"}</h5>
              <ul className="grid__missions">
                {item.missions.map((mission, k) => (
                  <li className="grid_missions" key={k}>{mission}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
