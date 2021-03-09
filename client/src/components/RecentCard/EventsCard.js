import React from 'react';
import './index.css';

function EventsCard(props) {

  return (
    <div className="mx-4">
      <div className="row blueBG p-2">
        <h2 className="col-12 white text-center">
          {props.heading}
        </h2>
      </div>
      {props.list.map(listItem => {
        return (
          <div className="row listItem border px-1" key={listItem.id}>
            <p className="col-3 purple pt-3">{listItem.eventDate.slice(5)}</p>
            <p className="col-9 pt-3">{listItem.eventName}</p>
          </div>
        )
      })}
    </div>
  )
}

export default EventsCard;