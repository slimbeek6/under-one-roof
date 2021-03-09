import React from 'react';
import {Link} from "react-router-dom";

function ChoresCard(props) {

  return (
    <div className="mx-4">
      <div className="row blueBG p-2">
        <h2 className="col-12 white text-center">
          {props.heading}
        </h2>
      </div>
      {props.list.map(listItem => {
        return (
          <div className="row listItem border px-1" key={listItem.id}>
            <p className="col-6 pt-3">{listItem.choreName}</p>
            <p className="col-6 pt-3">{listItem.assignee}</p>
          </div>
        )
      })}

      <div>
        <Link to="/chores"><span><button className="btn btn-success">Go to Chores</button></span></Link>
      </div>

    </div>
  )
}

export default ChoresCard;