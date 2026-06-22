import React from "react";
import { Link } from "react-router-dom";

function Home({ transactions }) {

  const income = transactions
    .filter(t => t.type === "Income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expense = transactions
    .filter(t => t.type === "Expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="dashboard">

        <h1>Personal Finance Tracker</h1>
        <p>Track your income and expenses easily.</p>

      <h1 className="dashboard-title">Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Total Income</h3>
          <p style={{color:"green"}}>₹{income}</p>
        </div>

        <div className="card">
          <h3>Total Expense</h3>
          <p style={{color:"blue"}}>₹{expense}</p>
        </div>

        <div className="card">
          <h3>Balance</h3>
          <p style={{color: balance <= 0 ? "red" : "green"}}>₹{balance}</p>
        </div>

      </div>
      {balance < 0 && <p style={{color:"red"}}> Your balance is negative!</p>}

     

      <p>Total Transactions: {transactions.length}</p>

      <div className="quick-actions">

         <Link to="/add" className="action-btn">
           Add Entry
         </Link>

         <Link to="/report" className="action-btn">
           View Report
         </Link>

      </div>

    </div>
  
  );
}

export default Home;

