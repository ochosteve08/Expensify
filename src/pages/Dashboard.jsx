import { useLoaderData } from "react-router-dom";
import { CreateBudget, FetchData } from "../helpers";
import Landing from "../components/Landing";
import { toast } from "react-toastify";
import Home from "./Home";

export const DashboardLoader = () => {
  const username = FetchData("username");
  const budgets = FetchData("budgets");
  console.log(budgets)
  return { username, budgets };
};

export const DashboardAction = async ({ request }) => {
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
console.log(_action)
console.log(values)
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
};

const Dashboard = () => {
  const { username, budgets } = useLoaderData();

  return (
    <div>
      {username ? <Home username={username} budgets={budgets} /> : <Landing />}
    </div>
  );
};

export default Dashboard;
