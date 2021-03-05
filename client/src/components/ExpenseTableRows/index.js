import React from "react";



export default function ExpenseTableRow(props) {
    return (
      <tr>
        <td>{props.expenseName}</td>
        <td>{props.expenseAmount}</td>
        <td>{props.expenseType}</td>
        <td>{props.paid}</td>
        <td>{props.paidBy}</td>
      </tr>
    );
}
  

