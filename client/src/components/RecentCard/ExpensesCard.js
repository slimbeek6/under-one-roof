import React from 'react';
import './index.css';
import DayJS from 'react-dayjs';

function ExpensesCard(props) {

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
            <DayJS element="p" className="col-3 purple" format='MM-DD'>{listItem.expenseDate}</DayJS>
            <p className="col-9">{listItem.expenseName}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ExpensesCard;