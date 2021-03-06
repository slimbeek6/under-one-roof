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

  return (
    events.map(event => (
      <div className="row border p-3 m-0">
        <h3 className="col-10"><DayJS element='span' format='MMM D'>{event.date}</DayJS>: {event.title}</h3>
        <div className="col-2">
          <button className="btn edit">Edit</button>
          <button className="btn delete ml-3">Delete</button>
        </div>
      </div>
    ))
  )
}

export default CalEvent;