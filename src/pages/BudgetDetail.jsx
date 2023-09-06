import { useLoaderData } from "react-router-dom";
import { GetAllMatchingItems } from "../helpers";
import BudgetItem from "../components/BudgetItem";
import AddExpenseForm from "../components/AddExpenseForm";
import Table from "../components/Table";

export const BudgetLoader = async ({ params }) => {
  const budget = await GetAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];

  const expenses = await GetAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });

  if (!budget) {
    throw new Error("budget not found");
  }
  return { budget, expenses };
};

const BudgetDetail = () => {
  const { budget, expenses } = useLoaderData();
  console.log(expenses);
  return (
    <div className="grid-lg">
      <h2>
        <span className="accent">{budget.name}</span> Overview
      </h2>
      <div className="flex-lg">
        <BudgetItem budget={budget} />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{budget.name}</span> Expenses
          </h2>
          <Table expenses={expenses} />
        </div>
      )}
    </div>
  );
};

export default BudgetDetail;
