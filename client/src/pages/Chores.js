import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useChoreContext } from "../utils/GlobalState";
// import { ADD_CHORE, UPDATE_CHORE, DELETE_CHORE, GET_CHORES } from "../utils/actions";
import "./style.css";

const Chores = () => {
    const choreNameRef = useRef();
    const choreDescRef = useRef();
    const choreFreqRef = useRef();

    const choreList = [];

    const getChores = () => {
        API.getChores()
        .then(results => {
            choreList.push(results);
            console.log(choreList);
        });
    };

    getChores();

    const addChore = () => {
        let newChore = {
            choreName: choreNameRef.current.value,
            choreDescription: choreDescRef.current.value,
            choreFrequency: choreFreqRef.current.value
        }
        console.log(newChore);
        API.addChore(newChore);
    };

    // const newChore = {
    //     choreName: choreNameRef.current.value,
    //     choreDescription: choreDescRef.current.value,
    //     choreFrequency: choreFreqRef.current.value
    // }


    // const getChores = () => {
    //     dispatch({ type: GET_CHORES })
    // };

    // useEffect(() => {
    //     getChores();
    // }, []);

    // const addChore = () => {
    //     dispatch({
    //         type: ADD_CHORE,
    //         chore: newChore
    //     });
    // };

    // const removeChore = () => {
    //     dispatch({
    //         type: DELETE_CHORE,
    //         _id: state.currentChore._id
    //     });
    // };

    // const updateChore = () => {
    //     dispatch({
    //         type: UPDATE_CHORE,
    //         _id: state.currentChore._id
    //     });
    // };

    return (
        <div className="container-fluid">
            <div className="row-fluid">
                <div className="col md-12">
                    <h1>Household Chores</h1>
                </div>
            </div>
            <div className="row">
                <div className="card col-md-6">
                    <h2>Chore List:</h2>
                    <div className="row">
                        <table border="1" style={{width: "80%", textAlign: "center"}}>
                            <tr>
                                <th>Chore Name</th>
                                <th>Chore Description</th>
                                <th>Chore Frequency</th>
                                <th>Currently Assigned To</th>
                            </tr>
                            <tr>
                                <td>Refrigerator</td>
                                <td>Clean the refrigerator, throw out any old food and sanitize shelves</td>
                                <td>30 days</td>
                                <td>Ryan</td>
                            </tr>
                        </table>
                    </div>
                    <div className="row">
                        <h2>Add a New Chore:</h2>
                        <form className="form-group" onSubmit={addChore}>
                            <input className="form-control mb-5" required ref={choreNameRef} placeholder="Name of chore" />
                            <input className="form-control mb-5" required ref={choreDescRef} placeholder="Brief description of chore" />
                            <input className="form-control mb-5" required ref={choreFreqRef} placeholder="How often (in days) should the chore be done?" />
                            <button className="btn btn-success mt-3 mb-5" type="submit">Add Chore</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Chores;