import React from 'react';
import './index.css';

function EventsCard(props) {

  return (
  <div className="row">
    <div className="col-12 text-center border">
      {props.heading}
    </div>
    <div className="px-1 border">
      {props.list.map(listItem => {
        return (
          <div className="row listItem border" key={listItem.id}>
            <p className="col-4 date">{listItem.eventDate.slice(5)}</p>
            <p className="col-8 name">{listItem.eventName}</p>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default EventsCard;