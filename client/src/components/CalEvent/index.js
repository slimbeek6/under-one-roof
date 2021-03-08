import React from 'react';
import './index.css';

function CalEvent() {
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   API.getEvents()
  //     .then(results => {
  //       setEvents(results.data);
  //     }).catch(err => console.error(err))
  // }, [])

  // const handleDeleteBtn = event => {
  //   let id = event.target.getAttribute('data-id');
  //   console.log(id);
  //   API.deleteEvent(id)
  //     .then(res => {
  //       console.log("Event deleted!")
  //       setEvents(events)
  //       document.location.reload()
  //     }).catch(err => console.error(err))
  // }

  return (
    <div className="row border p-3 m-0">
      <h3 className="col-11">Event Title</h3>
      <button className="col-1 btn btn-danger">Delete</button>
      <p className="col-12 my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit dolor eu tincidunt dapibus. Praesent facilisis in mauris sed pulvinar. Sed ut mattis lacus. Donec et gravida enim. Sed non feugiat nulla. Nulla ut nunc pharetra, blandit lacus in, scelerisque nibh. Vestibulum in massa quam. Nullam ultricies sed purus et ornare.
      </p>
      <p className="col-11">Posted by Ryan</p>
      <button className="col-1 btn btn-warning" href="#">Edit</button>
    </div>
  );
}

export default CalEvent;