import React from "react"

function Formations(props) {
  const datas = props.datas

  return (
    <div className="cursus mb3">
      <h2>Formations</h2>
      {datas.map(item => (
        <div className="grid__row" key={item.id}>
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
  )
}

export default Formations
