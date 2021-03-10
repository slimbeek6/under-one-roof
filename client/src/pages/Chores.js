import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useChoreContext } from "../utils/GlobalState";
import { GET_CHORES } from "../utils/actions";
import "./style.css";
import AuthService from "../services/auth.service";
import ChoreTableRow from "../components/ChoreTableRow";


const Chores = () => {
    const [displayForm, setDisplayForm] = useState(false);

    const hideForm = () => {
        setDisplayForm(false)
    }
    const showForm = () => {
        setDisplayForm(true)
    }

    const [chores, setChores] = useState([]);
    const [users, setUsers] = useState([]);
    // const choreNameRef = useRef();
    // const choreDescRef = useRef();
    // const choreFreqRef = useRef();
    // const currentUser = AuthService.getCurrentUser();

    const getHomeId = () => {
        const HomeId = currentUser.id;
        return HomeId;
    }

    let HomeId = getHomeId();

    const getChores = (data) => {
        let id = data;

        API.getChores(id)
        .then(results => {
            setChores(results.data);
        }).catch(err => console.error(err))
    };

    useEffect(() => {
        getChores(HomeId);
    }, []);
    
    const getAssignee = () => {
        const assigneeMax = users.length;
        const assigneeId = Math.floor(Math.random() * assigneeMax);
        const uN = users["id", `${assigneeId}`];
        console.log(uN);
        var assignee = "None";
        if (uN) {
            assignee = uN["userName"];
        }
        return assignee;
    }

    useEffect(() => {
        API.getUsers(HomeId)
        .then(users => {
          // console.log(expenses)
          setUsers(users.data)
          
        }).catch(err => console.error(err))
    }, [])

    let assignee = getAssignee();

    const addChore = (event) => {
        event.preventDefault();
        let newChore = {
            choreName: choreNameRef.current.value,
            choreDescription: choreDescRef.current.value,
            choreFrequency: choreFreqRef.current.value,
            assignee: assignee,
            HomeId: HomeId,
        }
        console.log(newChore);
        API.addChore(newChore);
        window.location.reload();
    };

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
                    <table border="1" style={{width: "80%", textAlign: "center"}}>
                        <tr>
                            <th>Chore Name</th>
                            <th>Chore Description</th>
                            <th>Chore Frequency</th>
                            <th>Currently Assigned To</th>
                        </tr>
                        {chores.map(chore => (
                            <ChoreTableRow choreName={chore.choreName} choreDescription={chore.choreDescription} choreFrequency={chore.choreFrequency} assignee={chore.assignee} />
                        ))}
                    </table>
                </div>
                <div className="card col-md-5">
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
        
    )
};

export default Chores;