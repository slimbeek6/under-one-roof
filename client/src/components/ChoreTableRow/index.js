import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import AuthService from "../../services/auth.service";

export default function ChoreTableRow(props) {
  const [users, setUsers] = useState([]);

  const currentUser = AuthService.getCurrentUser();

  const getHomeId = () => {
      const HomeId = currentUser.id;
      return HomeId;
  }

  let HomeId = getHomeId();

  useEffect(() => {
    API.getUsers(HomeId)
    .then(users => {
      // console.log(expenses)
      setUsers(users.data)
    }).catch(err => console.error(err))
  }, [])

  console.log(users);

  return (
        <tr>
          <td>{props.choreName}</td>
          <td>{props.choreDescription}</td>
          <td>{props.choreFrequency}</td>
          <td>{props.assignee}</td>
        </tr>
      );
}
  