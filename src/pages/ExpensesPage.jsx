import { useLoaderData } from "react-router-dom";
import { FetchData } from "../helpers";
import Table from "../components/Table";
import { toast } from "react-toastify";
import { DeleteExpense, AddBudgetDelay } from "../helpers";


export const ExpensesLoader = () => {
  const expenses = FetchData("expenses");

  return { expenses };
};


export const ExpensePageAction = async ({ request }) => {
  await AddBudgetDelay();
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      DeleteExpense({
        key: "expenses",
        id: values.expenseId,
      });

      return toast.info(`Expense deleted`);
    } catch (e) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
};


const ExpensesPage = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>{expenses.length} total</small>
          </h2>
          <Table
            expenses={expenses
              .sort((a, b) => b.createdAt - a.createdAt)
              }
          />
        </div>
      ) : (
        <div>No Expenses</div>
      )}
    </div>
  );
};

export default ExpensesPage;
