import React, { useState, useEffect } from "react";
import EventsCard from "../components/RecentCard/EventsCard";
import ExpensesCard from "../components/RecentCard/ExpensesCard";
import ChoresCard from "../components/RecentCard/ChoresCard";
import UserService from "../services/user.service";
import API from "../utils/API";

const Home = () => {
  const [content, setContent] = useState("");
  const [events, setEvents] = useState([]);
  const [chores, setChores] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // useEffect(() => {
  //   UserService.getPublicContent().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);

  useEffect(() => {
    API.getEvents()
      .then(events => {
        setEvents(events.data)
      }).catch(err => console.error(err))
    API.getChores()
      .then(chores => {
        // console.log(chores)
        setChores(chores.data)
      }).catch(err => console.error(err))
    API.getExpenses()
      .then(expenses => {
        // console.log(expenses)
        setExpenses(expenses.data)
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
    <div className="container">
      <header className="p-5">
        <h3>Welcome home, Ryan!</h3>
      </header>
      <main className="row">
        <div className="col-4">
          <EventsCard list={limitedEvents} heading={'Upcoming Events'} />
        </div>
        <div className="col-4">
          <ExpensesCard list={limitedExpenses} heading={'Recent Expenses'} />
        </div>
        <div className="col-4">
          <ChoresCard list={limitedChores} heading={'Chores Due'} />
        </div>
      </main>
    </div>
  );
};

export default Home;