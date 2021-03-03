import React, { useState, useEffect } from "react";
import MiniCal from '../components/MiniCal';

function Calendar() {
  return (
    <div className="container-fluid">
      <header className="row">
        <div className="col-8 border">
          Announcement Area
        </div>
        <div className="col-4 border">
          <MiniCal />
        </div>
      </header>
      <main className="row">
        <div className="col-12 border">
          Event list area
        </div>
      </main>
    </div>
  )
}

export default Calendar;