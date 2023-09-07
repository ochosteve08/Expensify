/* eslint-disable react/prop-types */

import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses, showBudget = true }) => {
  const headers = ["Name", "Amount", "Date", "Action"];
  if (showBudget) {
    headers.splice(3, 0, "Budget");
  }
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {headers.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
