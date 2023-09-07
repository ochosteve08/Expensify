/* eslint-disable react/prop-types */

import { Link, useFetcher } from "react-router-dom";
import { FormatCurrency, FormatDate, GetAllMatchingItems } from "../helpers";
import { FaTrash } from "react-icons/fa";

const ExpenseItem = ({ expense, showBudget }) => {
  const fetcher = useFetcher();
  const budget = GetAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  return (
    <>
      <td>{expense.name}</td>
      <td>{FormatCurrency(expense.amount)}</td>
      <td>{FormatDate(expense.createdAt)}</td>
      {showBudget && (
        <td>
          <Link style={{ "--accent": budget.color }} to={`budget/${budget.id}`}>
            {budget.name}
          </Link>
        </td>
      )}
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value={"deleteExpense"} />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button
            className="btn btn--warning"
            type="submit"
            aria-label={`delete ${expense.name} expense`}
          >
            <FaTrash />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};

export default ExpenseItem;
