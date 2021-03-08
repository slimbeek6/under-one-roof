import React, { useEffect, useRef } from "react";
import API from "../utils/API";
import { useExpenseContext } from "../utils/GlobalState";
import  ExpensesTbl  from "../components/ExpensesTbl";
import { ADD_EXPENSE, DELETE_EXPENSE, GET_EXPENSES } from "../utils/actions";


const Expenses = () => {
    const [state, dispatch] = useExpenseContext();

    const sortExpenses = (data) => {
        data.sort(function (a, b) {
            return b.expenseAmount - a.expenseAmount;
        });
    }
    
    const getExpenses = () => {
        API.getExpenses()
        .then(results => {
            sortExpenses(results.data)
            dispatch({
                type: GET_EXPENSES,
                expenses: results.data
            });
            // console.log(state);
        })
        
    }

    useEffect (() => {
        getExpenses();
    }, []);





    return (
        
            <div className="row">
                <section className="card col-md-6">
                    <h3>All Expenses:</h3>
                    <table border="1" style={{width: "96%", textAlign: "center"}}>                           
                        <tr>
                            <th>Expense Name</th>
                            <th>Expense Amount</th>
                            <th>Expense Type</th>
                            <th>Expense Paid?</th>
                            <th>Expense Paid By</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {state.expenses.map(expense => (
                            <ExpensesTbl  expenseName={expense.expenseName} expenseAmount={expense.expenseAmount} expenseType={expense.expenseType} paid={expense.paid} paidBy={expense.paidBy} id={expense.id}/> 
                        ))}
                    </table>
                </section>

                <section className="card col-mb-6">
                    
                </section>
            </div>
        
    )
}

export default Expenses;