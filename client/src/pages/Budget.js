import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_EXPENSE, UPDATE_EXPENSE, REMOVE_EXPENSE, GET_EXPENSES } from "../utils/actions";

const Budget = () => {
    const [state, dispatch] = useStoreContext();

    const getBudget = () => {
        dispatch({ type: GET_EXPENSES })
    };

    useEffect(() =>{
        getBudget();
    }, []);

    const addExpense = () => {
        dispatch({
            type: ADD_EXPENSE,
            budget: state.currentExpense
        });
    };

    const removeExpense = (id) => {
        dispatch({
            type: REMOVE_EXPENSE,
            _id: state.currentExpense._id
        });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();


    }

    return (
        <>{state.currentPost ? (
            <div className="container-fluid">
                <div className="row-fluid">
                    <div className="col md-12">
                        <h1>Overall Roommate Budget Page</h1>
                    </div>
                </div>
                <div className="row-fluid">
                    <div className="card col-md-5">
                        <h2>Total Budget</h2>
                        <p><strong>Pie Chart Here</strong></p>
                    </div>
                    <div className="card col-md-5">
                        <h2>Roommate Budget and Payments</h2>
                        <p><strong>Bar Chart Here</strong></p>
                    </div>
                </div>
                <div className="row-fluid">
                    <div className="card col-md-10">
                        <h2>Add New Expense:</h2>
                            <div className="row-fluid">
                                <div className="col md-5">
                                    <form onSubmit={addExpense}>
                                        New Expense Form
                                    </form>
                                </div>
                                <div className="col md-5">
                                    <h3>Largest Other Expenses</h3>
                                    <table>
                                        
                                    </table>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        ) : (
            <div>loading...</div>
        )}</>
    )
};

export default Budget;