import React, { useState, useEffect } from "react";
import ChoresCard from '../components/RecentCard/ChoresCard';
import EventsCard from '../components/RecentCard/EventsCard';
import ExpensesCard from '../components/RecentCard/ExpensesCard';
import UserService from "../services/user.service";

const Landing = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        {/* <h3>{content}</h3> */}
        <ChoresCard />
        <EventsCard />
        <ExpensesCard />
      </header>
    </div>
  );
};

export default Landing;