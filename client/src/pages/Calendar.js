import React from 'react';
import MiniCalendar from '../components/MiniCalendar';

function Calendar() {
  return (
    <div className="container-fluid">
      <header className="row">
        <div className="col-8 border">
          Announcement Area
        </div>
        <div className="col-4 border">
          <MiniCalendar />
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