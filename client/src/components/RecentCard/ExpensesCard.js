import React from 'react';
import './index.css';
import DayJS from 'react-dayjs';

function ExpensesCard(props) {
  console.log(props.list)

  return (
  <div className="row card">
    <div className="col-12 card-header text-center">
      {props.heading}
    </div>
    <ul className="col-12 list-group list-group-flush">
      {props.list.map(listItem => {
        return (
          <li className="list-group-item">
            {/* <span className="col-5 date">{listItem.expenseDate}</span> */}
            <DayJS element="span" className="col-5 date" format='MM-DD'>{listItem.expenseDate}</DayJS>
            <span className="col-12 name">{listItem.expenseName}</span>
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default ExpensesCard;