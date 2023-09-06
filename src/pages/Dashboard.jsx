import { useLoaderData } from "react-router-dom";
import {
  CreateBudget,
  FetchData,
  AddBudgetDelay,
  CreateExpense,
} from "../helpers";
import Landing from "../components/Landing";
import { toast } from "react-toastify";
import Home from "./Home";

export const DashboardLoader = () => {
  const username = FetchData("username");

  const budgets = FetchData("budgets");
  const expenses = FetchData("expenses");

  return { username, budgets, expenses };
};

export const DashboardAction = async ({ request }) => {
  await AddBudgetDelay();
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newUser") {
    try {
      localStorage.setItem("username", JSON.stringify(values.username));
      return toast.info(`Welcome, ${values.username}`);
    } catch (e) {
      throw new Error("There was a problem creating your account.");
    }
  }

  if (_action === "createBudget") {
    try {
      CreateBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.info("budget created successfully");
    } catch (e) {
      throw new Error("There was a problem creating your budget.");
    }
  }

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
};

const Dashboard = () => {
  const { username, budgets, expenses } = useLoaderData();

  return (
    <div>
      {username ? (
        <Home username={username} budgets={budgets} expenses={expenses} />
      ) : (
        <Landing />
      )}
    </div>
  );
};

export default Dashboard;
