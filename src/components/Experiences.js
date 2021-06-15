import React from "react";

const Experiences = ({ datas }) => {
  return (
    <div className="cursus mb3">
      <h2 className="h2">Expériences Professionnelles</h2>
      {datas.map((item, key) => (
        <div className="grid__row" key={key}>
          <div className="grid__item">
            <p className="grid__date">{item.date}</p>
          </div>
          <div className="grid__item">
            <h3 className="grid__title">{item.title}</h3>
            <p className="grid__location">{item.location}</p>
            <p className="grid__text">{item.text}</p>
            <ul className="grid__missions">
              {item.missions.map((mission, k) => (
                <li className="grid_missions" key={k}>{mission}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
