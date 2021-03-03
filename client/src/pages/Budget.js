import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useExpenseContext } from "../utils/GlobalState";
import { ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE, GET_EXPENSES } from "../utils/actions";
import "./style.css";

const Budget = () => {
    // const expnameRef = useRef();
    // const expamtRef = useRef();
    // const exptypeRef = useRef();

    // const [_, dispatch] = useExpenseContext();

    

    // const getBudget = () => {
    //     dispatch({ type: GET_EXPENSES })
    // };

    // useEffect(() =>{
    //     getBudget();
    // }, []);

    // const addExpense = () => {
    //     let newExpense = {
    //         expenseName: expnameRef.current.value,
    //         expenseAmount: expamtRef.current.value,
    //         expenseType: exptypeRef.current.value,
    //         expenseDate: Date.now()
    //     }
    //     dispatch({
    //         type: ADD_EXPENSE,
    //         expenseData: newExpense
    //     });
    // };

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
                                <h3>Largest Other Expenses:</h3>
                                <table border="1" style={{width: "80%", textAlign: "center"}}>                           
                                    <tr>
                                        <th>Expense Name</th>
                                        <th>Expense Amount</th>
                                        <th>Expense Submitted By</th>
                                    </tr>
                                    <tr>
                                        <td>Rent</td>
                                        <td>$1000</td>
                                        <td>Dave</td>
                                    </tr>    
                                </table>                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Budget;