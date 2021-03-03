import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
import Budget from "./pages/Budget";
import Chores from "./pages/Chores";
// import Calendar from "./pages/Calendar";
import Expenses from "./pages/Expenses";
import NoMatch from "./pages/NoMatch";
import { ExpenseProvider } from "./utils/GlobalState";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div className="App">
        <ExpenseProvider>
          <Nav />
          <Switch>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} /> */}
            <Route exact path="/budget" component={Budget} />
            {/* <Route exact path="/calendar" component={Calendar} /> */}
            <Route exact path="/expenses" component={Expenses} />
            <Route exact path="/chores" component={Chores} />
            <Route component={NoMatch} />
          </Switch>
        </ExpenseProvider>
      </div>
    </Router>
  );
}

export default App;
