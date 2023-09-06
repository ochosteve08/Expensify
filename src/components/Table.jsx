/* eslint-disable react/prop-types */

import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses }) => {

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date","Budget", "Action"].map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
             <ExpenseItem expense={expense}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
