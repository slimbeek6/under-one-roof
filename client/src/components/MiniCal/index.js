import React, { Component } from 'react';
import Moment from "moment";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';

class MiniCal extends Component {
  state = {
    date: new Date()
  }

  onChange = event => {
    console.log(event)
    let newDate = Moment(event)
    this.setState({ date: newDate })
  }

  render() {
    return (
      <div>
        <Calendar
        onChange={this.onChange}
        value={this.state.date}
        />
      </div>
    );
  }
}

export default MiniCal;