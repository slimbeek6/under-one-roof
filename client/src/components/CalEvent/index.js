import React, { useState, useEffect } from 'react';
import DayJS from 'react-dayjs';
import API from "../../utils/API";
import './index.css';

function CalEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.getEvents()
      .then(results => {
        console.log(results.data);
        let allEvents = results.data
        setEvents(allEvents);
      }).catch(err => console.error(err))
  }, [])

  const handleDeleteBtn = event => {
    let id = event.target.getAttribute('data-id');
    console.log(id);
    API.deleteEvent(id)
      .then(res => {
        console.log("Event deleted!")
      }).catch(err => console.error(err))
  }

  return (
    events.map(event => (
      <div className="row border p-3 m-0" key={event.id}>
        <h3 className="col-10"><DayJS element='span' format='MMM D'>{event.date}</DayJS>: {event.title}</h3>
        <div className="col-2">
          <button className="btn edit" data-id={event.id}>Edit</button>
          <button className="btn delete ml-3" onClick={handleDeleteBtn} data-id={event.id}>Delete</button>
        </div>
      </div>
    ))
  )
}

export default CalEvent;