import React from 'react';
import './index.css';

function EventsCard(props) {

  return (
    <div>
      <div className="row border">
        <div className="col-12 listHeader text-center border">
          {props.heading}
        </div>
      </div>
      {/* {props.list.map(listItem => {
        return (
          <div className="row listItem border px-1" key={listItem.id}>
            <p className="col-3 purple">{listItem.eventDate.slice(5)}</p>
            <p className="col-9">{listItem.eventName}</p>
          </div>
        )
      })} */}
    </div>
  )
}

export default EventsCard;