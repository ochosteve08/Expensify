/* eslint-disable react/prop-types */

import AddBudgetForm from "../components/AddBudgetForm"
import AddExpenseForm from "../components/AddExpenseForm";


const Home = ({username,budgets}) => {

  return (
    <div className="dashboard">
      <h2>
        Welcome back, <span className="accent">{username}</span>
      </h2>

      <div className="grid-sm">
        {budgets && budgets.length > 0 ? (
          <div className="grid-lg">
            <div className="flex-lg">
              <AddBudgetForm />
              <AddExpenseForm budgets={budgets}/>
            </div>
          </div>
        ) : (
          <div className="grid-sm">
            <p style={{ color: "#2d1387"}}>
              Budget with purpose
            </p>
            <AddBudgetForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home