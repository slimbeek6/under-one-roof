import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand mx-3" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/budget"
              className={window.location.pathname === "/budget" ? "nav-link active" : "nav-link"}
            >
              Budget
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/chores"
              className={window.location.pathname === "/chores" ? "nav-link active" : "nav-link"}
            >
              Chores
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/calendar"
              className={window.location.pathname === "/calendar" ? "nav-link active" : "nav-link"}
            >
              Calendar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;