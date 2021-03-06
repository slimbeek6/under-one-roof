import React from 'react';
import DayJS from 'react-dayjs';
import './index.css';

function CalEvent(props) {

  return (
    <>
      {props.events.map(event => {
        <div className="row border p-3 m-0">
          <h3 className="col-10"><DayJS element='span' format='MMM Do'>{event.date}</DayJS>: {event.title}</h3>
          <div className="col-2">
            <button className="btn edit">Edit</button>
            <button className="btn delete ml-3">Delete</button>
          </div>
        </div>
      })}
    </>
  );
}

export default CalEvent;