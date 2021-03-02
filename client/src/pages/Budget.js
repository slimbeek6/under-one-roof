import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE, GET_EXPENSES } from "../utils/actions";
import "./style.css";

const Budget = () => {
    // const expnameRef = useRef();
    // const expamtRef = useRef();
    // const exptypeRef = useRef();
    // const [state, dispatch] = useStoreContext();

    // const newExpense = {
    //     expenseName: expnameRef.current.value,
    //     expenseAmount: expamtRef.current.value,
    //     expenseType: exptypeRef.current.value,
    //     expenseDate: Date.now()
    // }

    // const getBudget = () => {
    //     dispatch({ type: GET_EXPENSES })
    // };

    // useEffect(() =>{
    //     getBudget();
    // }, []);

    // const addExpense = () => {
    //     dispatch({
    //         type: ADD_EXPENSE,
    //         expense: newExpense
    //     });
    // };

    // const removeExpense = (id) => {
    //     dispatch({
    //         type: DELETE_EXPENSE,
    //         _id: state.currentExpense._id
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
                        <p><strong>Pie Chart Here</strong></p>
                    </div>
                    <div className="card col-md-5">
                        <h2>Roommate Budget and Payments</h2>
                        <p><strong>Bar Chart Here</strong></p>
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
                                <h3>Largest Other Expenses</h3>
                                <table>
                                        Table
                                </table>                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Budget;