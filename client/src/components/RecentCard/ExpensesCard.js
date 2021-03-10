import React from 'react';
import DayJS from 'react-dayjs';
import { Link } from "react-router-dom";

function ExpensesCard(props) {

  return (
    <div className="mx-4">
      <div className="row p-2">
        <h2 className="col-12 blue text-center bold">
          {props.heading}
        </h2>
      </div>
      {props.list.map(listItem => {
        return (
          <div className="row listItem border px-1" key={listItem.id}>
            <DayJS element="p" className="col-2 purple pt-3 text-center bold small" format='MM-DD'>{listItem.expenseDate}</DayJS>
            <p className="col-4 pt-3 bold small">{listItem.expenseName}</p>
            <p className="col-2 pt-3 bold small text-center">${listItem.expenseAmount}</p>
            <p className="col-4 pt-3 bold small text-center">{listItem.paidBy}</p>
          </div>
        )
      })}
      
      <div className="row justify-content-center">
        <Link to="/budget"><span><button className="btn btn-success mt-3">Go to Budget</button></span></Link>
      </div>
      
    </div>
  )
}

export default ExpensesCard;