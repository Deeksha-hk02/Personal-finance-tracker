import React from "react";

function Report({ transactions, setTransactions }) {

  const deleteTransaction = (id) => {
    const updated = transactions.filter(t => t.id !== id);
    setTransactions(updated);
  };

  return (
    <div className="report">

      <h2>Transaction Report</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td> 
              <td style={{color: t.type === "Income" ? "green" : "red"}}>
                {t.type}
              </td>
              <td>{t.amount}</td>
              <td>{t.category}</td>
              

              <td>
                <button onClick={() => deleteTransaction(t.id)}>
                  Delete
                </button>
              </td>
              
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Report;

