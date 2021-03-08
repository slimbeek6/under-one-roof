import React, { useRef } from "react";
import API from "../../utils/API";



export default function ExpenseTableRow(props) {
  let paid = false;
  
  const setPaid = (data) => {
    if (data) {
      paid = "Paid";
    }
    return paid;
  }

  setPaid(props.paid);

    return (
      <tr>
        <td>{props.expenseName}</td>
        <td>{props.expenseAmount}</td>
        <td>{props.expenseType}</td>
        <td>{paid}</td>
        <td>{props.paidBy}</td>
      </tr>
    );
}
  

