import React, { useState } from "react";

function AddTransaction({ setTransactions }) {

  const [type, setType] = useState("Income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      date,
      type,
      amount,
      category
    };

    setTransactions((prev) => [...prev, newTransaction]);

    setMessage("Transaction added successfully!");

    setAmount("");
    setCategory("");
  };

  return (
    <div className="form-page">
  
    <div className="form-container">

    <h2>Add Transaction</h2>

    {message && <p className="success-msg">{message}</p>}

    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <select value={type} onChange={(e)=>setType(e.target.value)}>
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>

      <div className="form-group">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="date"
          placeholder="Category"
          value={category}
          onChange={(e)=>setDate(e.target.value)}
        />
      </div>

      <button className="form-btn">Add Transaction</button>

    </form>

  </div>

</div>
  );
}

export default AddTransaction;

