import React from 'react';
import './index.css';

function EventForm() {

  return (
    <form className="row border p-3 m-0">
      <label className="col-12 form-label">Date</label>
      <input className="col-12 form-control mb-3" type="date" placeholder="MM/DD/YYYY" />
      <label className="col-12 form-label">Title</label>
      <input className="col-12 form-control mb-3" type="text" placeholder="Title of event..." />
      <label className="col-12 form-label">Description</label>
      <textarea className="col-12 form-control mb-3" type="text" rows="3"></textarea>
      <button className="btn btn-primary ml-auto">Save</button>
    </form>
  );
}

export default EventForm;