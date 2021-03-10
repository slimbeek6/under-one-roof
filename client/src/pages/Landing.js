import React, { useState, useEffect } from "react";
import API from '../utils/API';
import ChoresCard from '../components/RecentCard/ChoresCard';
import EventsCard from '../components/RecentCard/EventsCard';
import ExpensesCard from '../components/RecentCard/ExpensesCard';
import UserCard from '../components/RecentCard/UserCard';
import ContactCard from '../components/ContactCard/index';
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";


const Landing = () => {
  const [content, setContent] = useState("");
  const [chores, setChores] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const currentUser = AuthService.getCurrentUser();

  const getHomeId = () => {
      const HomeId = currentUser.id;
      return HomeId;
  }

  let HomeId = getHomeId();

  useEffect(() => {
    API.getEvents(HomeId)
      .then(events => {
        setEvents(events.data)
      }).catch(err => console.error(err))
    API.getChores(HomeId)
      .then(chores => {
        // console.log(chores)
        setChores(chores.data)
      }).catch(err => console.error(err))
    API.getExpenses(HomeId)
      .then(expenses => {
        // console.log(expenses)
        setExpenses(expenses.data)
      }).catch(err => console.error(err))
    API.getUsers(HomeId)
    .then(users => {
      // console.log(expenses)
      setUsers(users.data)
    }).catch(err => console.error(err))
  }, [])

  const limitedEvents = events.slice(0, 5).map(item => {
    return item;
  })
  const limitedExpenses = expenses.slice(0, 5).map(item => {
    return item;
  })
  const limitedChores = chores.slice(0, 5).map(item => {
    return item;
  })

  return (
    <div className="container-fluid m-0">
      <div className="jumbotron">
        <h1>Welcome Home to {currentUser.username}!</h1>
      </div>
      <div className="row m-5">
        <div className="col-4">
          <ChoresCard list={limitedChores} heading="Chores Due" />
        </div>
        <div className="col-4">
          <EventsCard list={limitedEvents} heading="Upcoming Events" />
        </div>
        <div className="col-4">
          <ExpensesCard list={limitedExpenses} heading="Recent Expenses" />
        </div>
      </div>
      <div className="row m-5">
      <div className="col-12">
          {/* <UserCard list={users} heading="Roommate Contact List" /> */}
          <ContactCard list={users} />
        </div>
      </div>
    </div>
  );
};

export default Landing;