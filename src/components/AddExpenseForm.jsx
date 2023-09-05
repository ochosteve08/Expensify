/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useFetcher } from "react-router-dom";

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const formRef = useRef();
  const focusRef = useRef();
  return (
    <div className="form-wrapper">
      <h3>
        Add New {""}
        <span className="accent" style={{ textTransform: "capitalize" }}>
          {budgets.length === 1 && `${budgets.map((budget) => budget.name)}`}
        </span>{" "}
        {""}
        Expense
      </h3>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense">Expense Name:</label>
            <input
              type="text"
              placeholder="e.g meat-pie"
              name="newExpense"
              id="newExpense"
              ref={focusRef}
              required
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">Amount:</label>
            <input
              type="number"
              placeholder="e.g 300"
              step={0.01}
              name="newExpenseAmount"
              id="newExpenseAmount"
              required
            />
          </div>
        </div>
        <button className="btn btn--dark" >
        
              <span>Add Expense </span> <span style={{fontWeight:"bold"}}>+</span>
           
        
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddExpenseForm;
