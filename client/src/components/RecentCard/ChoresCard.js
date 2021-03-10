import React from 'react';
import {Link} from "react-router-dom";

function ChoresCard(props) {

  return (
    <div className="mx-4 rounded">
      <div className="row p-2">
        <h2 className="col-12 blue text-center bold">
          {props.heading}
        </h2>
      </div>
      {props.list.map(listItem => {
        return (
          <div className="row listItem border px-1" key={listItem.id}>
            <p className="col-7 pt-3 text-center small bold">{listItem.choreName}</p>
            <p className="col-5 pt-3 text-center small bold">{listItem.assignee}</p>
          </div>
        )
      })}

      <div className="row justify-content-center">
        <Link to="/chores"><span><button className="btn btn-success mt-3">Go to Chores</button></span></Link>
      </div>

    </div>
  )
}

export default ChoresCard;