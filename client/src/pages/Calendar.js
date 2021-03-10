import React, { useState, useEffect } from "react";
import MiniCal from '../components/MiniCal';
import CalEvent from '../components/CalEvent';
import EventForm from '../components/EventForm';

function Calendar() {
  const [displayForm, setDisplayForm] = useState(false);

  const hideForm = () => {
    setDisplayForm(false)
  }
  const showForm = () => {
    setDisplayForm(true)
  }

  return (
    <div className="container">
      <header className="row justify-content-center p-3">
        <div className="col-8 d-flex align-items-center justify-content-center mt-5">
          <img className="img-fluid" src="/assets/img/Calendar/UnderOneRoofCal-96.png" />
          <h1 className="large text-center display-1 blue mt-3 mx-5 bold">Calendar</h1>
        </div>
        <div className="col-lg-4 col-md-6 mt-5 d-flex">
          <MiniCal />
        </div>
      </header>
      <main className="row">
        <div className="col-12 p-3">
          <button className="btn btn-primary m-0 mb-3" onClick={showForm}>Add Event</button>
          {displayForm ? <EventForm hideForm={hideForm} /> : <CalEvent />}
        </div>
      </main>
    </div>
  )
}

export default Calendar;