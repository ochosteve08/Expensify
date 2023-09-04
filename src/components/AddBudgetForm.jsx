import { Form } from "react-router-dom";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h3 className="h3">Create Budget</h3>
      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name:</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g. Groceries"
            required
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            step={0.01}
            placeholder="₦3000"
            id="newBudgetAmount"
            name="newBudgetAmount"
            required
            inputMode="decimal"
          />
        </div>
        <button className="btn btn--dark">
          Create budget <span>₦</span>
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
