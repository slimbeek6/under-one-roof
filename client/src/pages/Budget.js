import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useExpenseContext } from "../utils/GlobalState";
import { ADD_EXPENSE, DELETE_EXPENSE, GET_EXPENSES } from "../utils/actions";
import "./style.css";
import  ExpenseTableRow  from "../components/ExpenseTableRows";


const Budget = () => {
    const expnameRef = useRef();
    const expamtRef = useRef();
    const exptypeRef = useRef();

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

    console.log(state);
    

    const addExpense = () => {
        let newExpense = {
            expenseName: expnameRef.current.value,
            expenseAmount: expamtRef.current.value,
            expenseType: exptypeRef.current.value,
            expenseDate: Date.now()
        }
        console.log(newExpense);
        API.addExpense(newExpense);
    };

    return (
            <div className="container-fluid">
                <div className="row-fluid">
                    <div className="col md-12">
                        <h1>Overall Roommate Budget Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="card col-md-5">
                        <h2>Total Budget</h2>
                        <div class="row justify-content-center my-4">
                            <div class="col-9 chart">
                                <canvas id="piechart"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-5">
                        <h2>Roommate Budget and Payments</h2>
                        <p><strong>Bar Chart Here populated by GlobalState</strong></p>
                    </div>
                </div>
                <div className="row">
                    <div className="card col-md-10" id="bottomcard">
                        <h2>Expense Management:</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Add New Expense:</h3>
                                {/* <form className="form-group" onSubmit={addExpense}>
                                    <input className="form-control mb-5" required ref={expnameRef} placeholder="Name of Expense"/>
                                    <input className="form-control mb-5" required ref={expamtRef} placeholder="Expense Amount" />
                                    <input className="form-control mb-5" required ref={exptypeRef} placeholder="Expense Type, enter Rent, Utilities, or Other" />
                                    <button className="btn btn-success mt-3 mb-5" type="submit">Save Expense</button>
                                </form> */}
                            </div>
                            <div className="col-md-6">
                                <h3>Largest Expenses:</h3>
                                <table border="1" style={{width: "80%", textAlign: "center"}}>                           
                                    <tr>
                                        <th>Expense Name</th>
                                        <th>Expense Amount</th>
                                        <th>Expense Type</th>
                                        <th>Expense Paid?</th>
                                        <th>Expense Paid By</th>
                                    </tr>
                                    {state.expenses.map(expense => (
                                        <ExpenseTableRow  expenseName={expense.expenseName} expenseAmount={expense.expenseAmount} expenseType={expense.expenseType} paid={expense.paid} paidBy={expense.paidBy} /> 
                                    ))}
                                        
                                    
                                </table>                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Budget;