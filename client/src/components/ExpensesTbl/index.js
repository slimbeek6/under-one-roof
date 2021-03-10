import React, { useRef } from "react";
import API from "../../utils/API";

export default function ExpensesTbl(props) {
  let paid = false;
  const paidByRef = useRef();

  const setPaid = (data) => {
    if (data) {
      paid = "Paid";
    }
    return paid;
  }

  const runEdit = (event) => {
    let id = event.target.id;
    let paidBy = paidByRef.current.value;
    let expenseData = {paid: true, paidBy: paidBy};
    API.editExpense(id, expenseData);
    window.location.reload();
  }

  const runDelete = (event) => {
    let id = event.target.id;
    API.deleteExpense(id);
    window.location.reload();
  }

  setPaid(props.paid);

    return (
      <tr>
        <td>{props.expenseName}</td>
        <td>{props.expenseAmount}</td>
        <td>{props.expenseType}</td>
        <td>{paid}</td>
        <td>{props.paidBy}</td>
        <td>
          <form className="d-flex align-items-center" id={props.id} onSubmit={runEdit}>
            <input id={props.id} className="form-control" required ref={paidByRef} placeholder="Paid by name ..." />
            <button id={props.id} className="btn btn-success ml-2" type="submit">Save</button>
          </form>
        </td>
        <td>
          <button className="btn btn-danger" id={props.id} onClick={runDelete}>Remove</button>
        </td>
      </tr>
    );
}