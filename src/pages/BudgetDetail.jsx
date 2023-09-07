import { useLoaderData } from "react-router-dom";
import {
  GetAllMatchingItems,
  AddBudgetDelay,
  CreateExpense,
  DeleteExpense,
} from "../helpers";
import BudgetItem from "../components/BudgetItem";
import AddExpenseForm from "../components/AddExpenseForm";
import Table from "../components/Table";
import { toast } from "react-toastify";

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

export const BudgetAction = async ({ request }) => {
  await AddBudgetDelay();
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  console.log(_action);
  if (_action === "createExpense") {
    try {
      CreateExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });

      return toast.info(`Expense ${values.newExpense} created`);
    } catch (e) {
      throw new Error("There was a problem creating your expense.");
    }
  }

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

const BudgetDetail = () => {
  const { budget, expenses } = useLoaderData();

  return (
    <div className="grid-lg" style={{ "--accent": budget.color }}>
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
          <Table expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  );
};

export default BudgetDetail;
