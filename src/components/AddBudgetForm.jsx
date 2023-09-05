import { useRef, useEffect } from "react";
import {  useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);
  return (
    <div className="form-wrapper">
      <h3 className="h3">Create Budget</h3>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name:</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g. Groceries"
            required
            ref={focusRef}
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
        <input type="hidden" name="_action" value={"createBudget"} />
        <button className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Create budget </span> <span>₦</span>
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
