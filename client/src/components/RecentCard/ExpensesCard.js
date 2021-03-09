import React from 'react';
import './index.css';
import DayJS from 'react-dayjs';

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
            <DayJS element="p" className="col-3 purple pt-3" format='MM-DD'>{listItem.expenseDate}</DayJS>
            <p className="col-9 pt-3">{listItem.expenseName}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ExpensesCard;