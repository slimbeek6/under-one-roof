import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
import Budget from "./pages/Budget";
// import Chores from "./pages/Chores";
// import Calendar from "./pages/Calendar";
// import { StoreProvider } from "./utils/GlobalState";
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div className="App">
        {/* <StoreProvider> */}
          <Nav />
          <Switch>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} /> */}
            <Route exact path="/budget" component={Budget} />
            {/* <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/chores" component={Chores} /> */}
          </Switch>
        {/* </StoreProvider> */}
      </div>
    </Router>
  );
}

export default App;
