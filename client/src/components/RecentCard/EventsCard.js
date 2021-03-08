import React from 'react';
import './index.css';

function EventsCard(props) {
  console.log(props.list)

  return (
  <div className="row card">
    <div className="col-12 card-header text-center">
      {props.heading}
    </div>
    <ul className="col-12 list-group list-group-flush">
      {props.list.map(listItem => {
        return (
          <li className="list-group-item" key={listItem.id}>
            <span className="col-5 date">{listItem.eventDate.slice(5)}</span>
            <span className="col-7 name">{listItem.eventName}</span>
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default EventsCard;