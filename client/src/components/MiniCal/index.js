import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';

function MiniCal() {
  const [date, setDate] = useState(new Date())

  const onChange = event => {
    setDate(new Date())
  }

  return (
    <div>
      <Calendar
      onChange={onChange}
      value={date}
      />
    </div>
  );
}

export default MiniCal;