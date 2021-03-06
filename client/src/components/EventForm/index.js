import React, { useState, useEffect, useRef } from 'react';
import API from '../../utils/API';
import './index.css';

function EventForm(props) {
  const calDateRef = useRef();
  const calTitleRef = useRef();
  const calDescRef = useRef();

  const saveEvent = () => {
    let newEvent = {
      date: calDateRef.current.value,
      title: calTitleRef.current.value,
      description: calDescRef.current.value
    }
    console.log(newEvent);
    API.saveEvent(newEvent).catch(err => console.error(err))
  }

  const handleBtnClick = () => {
    saveEvent();
    props.hideForm();
  }

  return (
    <form className="row border p-3 m-0">
      <label className="col-12 form-label">Date</label>
      <input className="col-12 form-control mb-3" type="date" placeholder="MM/DD/YYYY" required ref={calDateRef} />
      <label className="col-12 form-label">Title</label>
      <input className="col-12 form-control mb-3" type="text" placeholder="Title of event..." required ref={calTitleRef} />
      <label className="col-12 form-label">Description</label>
      <textarea className="col-12 form-control mb-3" type="text" rows="3" required ref={calDescRef}></textarea>
      <button className="btn btn-primary ml-auto" onClick={handleBtnClick}>Save</button>
    </form>
  );
}

export default EventForm;