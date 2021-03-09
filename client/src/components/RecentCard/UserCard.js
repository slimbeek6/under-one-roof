import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

function UserCard(props) {

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
            <p className="col-2">{listItem.firstName} {listItem.lastName}</p>
            <p className="col-2">{listItem.contactPhone}</p>
            <p className="col-2">{listItem.contactEmail}</p>
            <p className="col-2">{listItem.emergencyName}</p>
            <p className="col-2">{listItem.emergencyPhone}</p>
          </div>
        )
      })}
      
      <div>
        <Link to="/Profile"><span><button className="btn btn-success">Go to Home</button></span></Link>
      </div>
      
    </div>
  )
}

export default UserCard;