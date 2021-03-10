import React from 'react';
import {Link} from "react-router-dom";

function EventsCard(props) {

  return (
    <div className="mx-4">
      <div className="row p-2">
        <h2 className="col-12 blue text-center bold">
          {props.heading}
        </h2>
      </div>
      {props.list.map(listItem => {
        return (
          <div className="row listItem border px-1" key={listItem.id}>
            <p className="col-3 purple pt-3 text-center bold small">{listItem.eventDate.slice(5)}</p>
            <p className="col-9 pt-3 bold small">{listItem.eventName}</p>
          </div>
        )
      })}

      <div className="row justify-content-center">
        <Link to="/calendar"><span><button className="btn btn-success mt-3">Go to Calendar</button></span></Link>
      </div>
  
    </div>
  )
}

export default EventsCard;