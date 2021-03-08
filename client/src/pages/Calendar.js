import React, { useState, useEffect } from "react";
import MiniCal from '../components/MiniCal';
import CalEvent from '../components/CalEvent';

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
      <header className="row p-3">
        <div className="col-8 border d-flex align-items-center justify-content-center">
          <h1 className="text-center display-1">Calendar</h1>
        </div>
        <div className="col-4 border">
          <MiniCal />
        </div>
      </header>
      <main className="row">
        <div className="col-12 p-3">
          <button className="btn btn-primary m-0 mb-3">Add Event</button>
          <CalEvent />
        </div>
      </main>
    </div>
  )
}

export default Calendar;