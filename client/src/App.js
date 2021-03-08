// import React, { Component } from "react";
// // import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // import Home from "./pages/Home";
// import Budget from "./pages/Budget";
// import Chores from "./pages/Chores";
// import Calendar from "./pages/Calendar";
// import Expenses from "./pages/Expenses";
// import NoMatch from "./pages/NoMatch";
// import { ExpenseProvider } from "./utils/GlobalState";
// import Nav from "./components/Nav";

// class App extends Component {
//   render() {
//     // ...
//   }
// }

// export default App;


// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <ExpenseProvider>
// //           <Nav />
// //           <Switch>
// //             {/* <Route exact path="/" component={Home} />
// //             <Route exact path="/home" component={Home} /> */}
// //             <Route exact path="/budget" component={Budget} />
// //             <Route exact path="/calendar" component={Calendar} />
// //             <Route exact path="/chores" component={Chores} />
// //             <Route exact path="/expenses" component={Expenses} />
// //             <Route component={NoMatch} />
// //           </Switch>
// //         </ExpenseProvider>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

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
import BoardUser from "./pages/BoardUser";

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
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          UnderOneRoof
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
              {/* These are the navbar items protected after auth */}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
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
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/budget" component={Budget} />
              <Route exact path="/expenses" component={Expenses} />
              <Route exact path="/chores" component={Chores} />
              <Route exact path="/calendar" component={Calendar} />
              <Route path="/user" component={BoardUser} />
              {/* <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} /> */}
              <Route component={NoMatch} />
            </Switch>
          </ExpenseProvider>
        </div>
        
    </div>
  );
  
            
};

export default App;