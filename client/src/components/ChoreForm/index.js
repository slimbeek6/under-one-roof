import React, { useRef } from 'react';
import API from '../../utils/API';
import AuthService from "../../services/auth.service";

function ChoreForm(props) {
    const choreNameRef = useRef();
    const choreDescRef = useRef();
    const choreFreqRef = useRef();
    const currentUser = AuthService.getCurrentUser();

    const getHomeId = () => {
        const HomeId = currentUser.id;
        return HomeId;
    }

    let HomeId = getHomeId();

    let assignee = getAssignee();

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

    const addChore = (event) => {
        // event.preventDefault();
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

}