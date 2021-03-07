import React, { useState, useEffect } from 'react';
import DayJS from 'react-dayjs';
import API from "../../utils/API";
import './index.css';

function CalEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.getEvents()
      .then(results => {
        setEvents(results.data);
      }).catch(err => console.error(err))
  }, [])

  const handleDeleteBtn = event => {
    let id = event.target.getAttribute('data-id');
    console.log(id);
    API.deleteEvent(id)
      .then(res => {
        console.log("Event deleted!")
        setEvents(events)
        document.location.reload()
      }).catch(err => console.error(err))
  }

  console.log(events)

  return (
    events.map(event => (
      <div className="row m-0 my-4" key={event.id}>
        <h3 className="col-11"><DayJS element="span" className="date" format='MMM D'>{event.eventDate}</DayJS> {event.eventName}</h3>
        <div className="col-1">
          {/* <button className="btn edit" data-id={event.id}>Edit</button> */}
          <button className="btn delete ml-auto" onClick={handleDeleteBtn} data-id={event.id}>Delete</button>
        </div>
      </div>
    ))
  )
}

export default CalEvent;