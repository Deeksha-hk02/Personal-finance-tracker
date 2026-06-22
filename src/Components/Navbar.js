import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <h2>Personal Finance Tracker</h2>

      <Link to="/">Home </Link> 
      <Link to="/add">Record Expense </Link> 
      <Link to="/report">Report</Link>

    </nav>
  );
}

export default Navbar;
