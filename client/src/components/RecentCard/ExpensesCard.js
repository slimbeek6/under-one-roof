import React from 'react';
import './index.css';
import DayJS from 'react-dayjs';
import { Link } from "react-router-dom";

function ExpensesCard(props) {

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
            <DayJS element="p" className="col-3 purple" format='MM-DD'>{listItem.expenseDate}</DayJS>
            <p className="col-3">{listItem.expenseName}</p>
            <p className="col-3">${listItem.expenseAmount}</p>
            <p className="col-3">{listItem.paidBy}</p>
          </div>
        )
      })}
      
      <div>
        <Link to="/budget"><span><button className="btn btn-success">Go to Budget</button></span></Link>
      </div>
      
    </div>
  )
}

export default ExpensesCard;