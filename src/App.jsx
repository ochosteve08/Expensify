
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard, { DashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    loader: DashboardLoader,
    errorElement: <Error/>
  },
  {
    path: "*",
    element: <Error/>,

  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
