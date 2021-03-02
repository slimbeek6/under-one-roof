// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import API from "../utils/API";
// import { useStoreContext } from "../utils/GlobalState";
// import { ADD_CHORE, UPDATE_CHORE, DELETE_CHORE, GET_CHORES } from "../utils/actions";
// import "./style.css";

// const Chores = () => {
//     const choreNameRef = useRef();
//     const choreDescRef = useRef();
//     const choreFreqRef = useRef();
//     const [state, dispatch] = useStoreContext();

//     const newChore = {
//         choreName: choreNameRef.current.value,
//         choreDescription: choreDescRef.current.value,
//         choreFrequency: choreFreqRef.current.value
//     }


//     const getChores = () => {
//         dispatch({ type: GET_CHORES })
//     };

//     useEffect(() => {
//         getChores();
//     }, []);

//     const addChore = () => {
//         dispatch({
//             type: ADD_CHORE,
//             chore: newChore
//         });
//     };

//     const removeChore = () => {
//         dispatch({
//             type: DELETE_CHORE,
//             _id: state.currentChore._id
//         });
//     };

//     const updateChore = () => {
//         dispatch({
//             type: UPDATE_CHORE,
//             _id: state.currentChore._id
//         });
//     };

//     return (

//     )
// };

// export default Chores;