/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { useFetcher } from "react-router-dom";
// import { FetchData } from "../helpers";

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const formRef = useRef();
  const focusRef = useRef();
  const isSubmitting = fetcher.state === "submitting";
  useEffect(() => {
    if (!isSubmitting) {
      // clear form
      formRef.current.reset();
      // reset focus
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const existingExpenses = FetchData("expenses") ?? [];
  //   const newExpenseName = formRef.current.newExpense.value;
  //   const isExpenseNameTaken = existingExpenses.some(
  //     (expense) => expense.name.toLowerCase() === newExpenseName.toLowerCase()
  //   );
  //   if (isExpenseNameTaken) {
  //     alert("Expense name already taken. Please choose another name.");
  //   }
  // };

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
      <fetcher.Form
        method="post"
        className="grid-sm"
        ref={formRef}
        // onSubmit={handleFormSubmit}
      >
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
              inputMode="decimal"
              name="newExpenseAmount"
              id="newExpenseAmount"
              required
            />
          </div>
        </div>
        <div className="grid-xs" hidden={budgets.length === 1}>
          <label htmlFor="newExpenseBudget">Budget Category</label>
          <select name="newExpenseBudget" id="newExpenseBudget" required>
            {budgets
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((budget) => (
                <option key={budget.id} value={budget.id}>
                  {budget.name}
                </option>
              ))}
          </select>
        </div>

        <input type="hidden" name="_action" value="createExpense" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting…</span>
          ) : (
            <>
              <span>Add Expense </span>
              <span style={{ fontWeight: "bold" }}>+</span>
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddExpenseForm;
