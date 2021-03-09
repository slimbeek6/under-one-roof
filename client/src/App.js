import React, { Component, useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { ExpenseProvider } from "./utils/GlobalState";
import AuthService from "./services/auth.service";
import Budget from "./pages/Budget";
import Chores from "./pages/Chores";
import Calendar from "./pages/Calendar";
import Expenses from "./pages/Expenses";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";


function App () {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };





  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark blueBG">
        {currentUser ? (
        <Link to={"/landing"} className="navbar-brand logo">
        <img src="/assets/img-sans-background/v1-heart/UORHeartOnlyLOGO72.png" alt="Under One Roof Logo and Home Button"></img>
        UnderOneRoof
        </Link>) : (
        <Link to={"/"} className="navbar-brand logo">
        <img src="/assets/img-sans-background/v1-heart/UORHeartOnlyLOGO72.png" alt="Under One Roof Logo and Home Button"></img>
        UnderOneRoof
        </Link>
        )}
        <div className="navbar-nav mr-auto">
          {/* {currentUser ? (<li className="nav-item">
            <Link to={"/landing"} className="nav-link">
              Home
            </Link>
          </li>) : (
            <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          )} */}
              {/* These are the navbar items protected after auth */}
          {/* {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )} */}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/budget"} className="nav-link">
              <img src="/assets/img/NewBudget/UnderOneRoofNewBudgetLOGO48.png" alt="Budget Button"></img>
                Budget
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/chores"} className="nav-link">
              <img src="/assets/img/Chores/UnderOneRoofChoreLOGO48.png" alt="Chores Button"></img>
                Chores
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/calendar"} className="nav-link">
              <img src="/assets/img/Calendar/UnderOneRoofCal-48.png" alt="Calendar Button"></img>
                Calendar
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/expenses"} className="nav-link">
              <img src="/assets/img/Expenses/UnderOneRoofExpense-48.png" alt="Expense Button"></img>
                Expenses
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      
        <div className="App">
          <ExpenseProvider>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              
              {/* Logged in routes */}
              {currentUser && (
                <div>
                  <Route exact path="/landing" component={Landing} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/budget" component={Budget} />
                  <Route exact path="/expenses" component={Expenses} />
                  <Route exact path="/chores" component={Chores} />
                  <Route exact path="/calendar" component={Calendar} />
                </div>
              // ) : (
              //   <div>
              //     <Route component={NoMatch} />
              //   </div>
              )}
            </Switch>
          </ExpenseProvider>
        </div>
        
    </div>
  );
  
            
};

export default App;