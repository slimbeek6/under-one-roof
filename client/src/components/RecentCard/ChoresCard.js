import React from 'react';
import './index.css';

function ChoresCard(props) {

  return (
  <div className="row card">
    <div className="col-12 card-header text-center">
      {props.heading}
    </div>
    <ul className="col-12 list-group list-group-flush">
      {props.list.map(listItem => {
        return (
          <li className="list-group-item" key={listItem.id}>
            <span className="col-12 name">{listItem.choreName}</span>
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default ChoresCard;