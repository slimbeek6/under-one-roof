import React from 'react';
import './index.css';

function RecentCard(props) {
  return (
  <div className="card" style="width: 18rem;">
    <div className="card-header">
      {props.cardTitle}
    </div>
    <ul className="list-group list-group-flush">
      {props.list.map(listItem => {
        <li>
          {listItem.date ? <span className="date">{listItem.date}</span> : null}
          {listItem.choreName ? <span className="chore">{listItem.choreName}</span> : null}
          {listItem.expenseName ? <span className="expense">{listItem.expenseName}</span> : null}
          {listItem.title ? <span className="event">{listItem.title}</span> : null}
        </li>
      })}
    </ul>
  </div>
  )
}

export default RecentCard;