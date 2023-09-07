import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import Main, { MainLoader } from "./layout/Main";
import Dashboard, { DashboardAction, DashboardLoader } from "./pages/Dashboard";
import About from "./components/About";
import { LogoutAction } from "./actions/Logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExpensesPage, {
  ExpensePageAction,
  ExpensesLoader,
} from "./pages/ExpensesPage";
import BudgetDetail, { BudgetAction, BudgetLoader } from "./pages/BudgetDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: MainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: DashboardLoader,
        action: DashboardAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: ExpensesLoader,
        action: ExpensePageAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        element: <BudgetDetail />,
        loader: BudgetLoader,
        action: BudgetAction,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: LogoutAction,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
