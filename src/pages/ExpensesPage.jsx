import { useLoaderData } from "react-router-dom";
import { FetchData } from "../helpers";
import Table from "../components/Table";

export const ExpensesLoader = () => {
  const expenses = FetchData("expenses");

  return { expenses };
};

const ExpensesPage = () => {
  const { expenses } = useLoaderData();
  console.log(expenses);
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
