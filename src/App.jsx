import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import Main, { MainLoader } from "./layout/Main";
import Dashboard, { DashboardLoader } from "./pages/Dashboard";
import About from "./components/About";

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
        errorElement: <Error />,
      },
      {
        path: 'about',
        element: <About/>,
        errorElement: <Error />,
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
    </div>
  );
}

export default App;
