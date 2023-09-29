import React from 'react';
import { useTranslation } from '../../lib/intl';

const Formations = ({ datas }) => {
  const { t } = useTranslation()
  return (
    <div className="cursus mb3">
      <h2 className="h2">{t("FORMATION_TITLE")}</h2>
      {datas.map((item, key) => (
        <div className="grid__row" key={key}>
          <div className="grid__item">
            <p className="grid__date">{item.date}</p>
          </div>
          <div className="grid__item">
            <h3 className="grid__title">{item.title}</h3>
            <p className="grid__location">{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Formations;