import React, { useState, useEffect } from "react";
import MiniCal from '../components/MiniCal';
import Event from '../components/Event';

function Calendar() {
  return (
    <div className="container">
      <header className="row p-3">
        <div className="col-8 border">
          Announcement Area
        </div>
        <div className="col-4 border">
          <MiniCal />
        </div>
      </header>
      <main className="row">
        <div className="col-12 p-3">
          <button className="btn btn-primary m-0 mb-3">Add Event</button>
          <Event />
        </div>
      </main>
    </div>
  )
}

export default Calendar;