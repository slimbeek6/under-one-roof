import React from 'react';
import './index.css';

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
            <p className="col-12 pt-3">{listItem.choreName}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ChoresCard;