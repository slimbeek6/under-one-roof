import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

function ChoresCard(props) {

  return (
    <div>
      <div className="row border">
        <div className="col-12 listHeader text-center border">
          {props.heading}
        </div>
      </div>
      {props.list.map(listItem => {
        return (
          <div className="row listItem border px-1" key={listItem.id}>
            <p className="col-9">{listItem.choreName}</p>
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