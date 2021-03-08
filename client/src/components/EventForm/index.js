import React, { useState, useEffect, useRef } from 'react';
import API from '../../utils/API';
import './index.css';

function EventForm(props) {
  const calDateRef = useRef();
  const calTitleRef = useRef();

  const saveEvent = () => {
    let newEvent = {
      eventDate: calDateRef.current.value,
      eventName: calTitleRef.current.value.trim(),
    }
    if (newEvent.eventDate === "" || newEvent.eventName === "") {
      return alert("Please fill out date and title of event.")
    }
    console.log(newEvent);
    API.saveEvent(newEvent).catch(err => console.error(err))
  }

  const handleSaveBtn = async () => {
    await saveEvent();
    props.hideForm();
    document.location.reload()
  }

  return (
    <form className="row border p-3 m-0">
      <label className="col-12 form-label">Date</label>
      <input className="col-12 form-control mb-3" type="date" placeholder="MM/DD/YYYY" required ref={calDateRef} />
      <label className="col-12 form-label">Event</label>
      <input className="col-12 form-control mb-3" type="text" placeholder="Event name..." required ref={calTitleRef} />
      {/* <label className="col-12 form-label">Description</label> */}
      {/* <textarea className="col-12 form-control mb-3" type="text" rows="3" required ref={calDescRef}></textarea> */}
      <button className="btn btn-primary ml-auto" onClick={handleSaveBtn}>Save</button>
    </form>
  );
}

export default EventForm;