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

  return (
    events.map(event => (
      <>
        <div className="row m-0 mt-4" key={event.id}>
          <div className="col-2">
            <h3 className="m-0"><DayJS format='MMM D'>{event.eventDate}</DayJS></h3>
          </div>
          <div className="col-9">
            <h3 className="m-0">{event.eventName}</h3>
          </div>
          <div className="col-1 ml-auto">
            <button className="btn edit" data-id={event.id}>Edit</button>
            <button className="btn delete ml-auto" onClick={handleDeleteBtn} data-id={event.id}>Delete</button>
          </div>
        </div>
        <hr/>
      </>
    ))
  )
}

export default CalEvent;