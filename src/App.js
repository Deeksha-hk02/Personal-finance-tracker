import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AddTransaction from "./Pages/AddTransaction";
import Report from "./Pages/Report";

function App() {

  const [transactions, setTransactions] = useState([]);

  // Load saved transactions
  useEffect(() => {
    const savedData = localStorage.getItem("transactions");
    if (savedData) {
      setTransactions(JSON.parse(savedData));
    }
  }, []);

  // Save transactions when they change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home transactions={transactions} />} />
        <Route path="/add" element={<AddTransaction setTransactions={setTransactions} />} />
        <Route path="/report" element={<Report transactions={transactions} setTransactions={setTransactions} />} />
      </Routes>

    </Router>
  );
}

export default App;

