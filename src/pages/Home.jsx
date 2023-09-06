/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import AddBudgetForm from "../components/AddBudgetForm"
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";


const Home = ({ username, budgets, expenses }) => {
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
              <AddExpenseForm budgets={budgets} />
            </div>
            <h2>Existing Budgets</h2>
            <div className="budgets">
              {budgets &&
                budgets.length > 0 &&
                budgets.map((budget) => (
                  <BudgetItem key={budget.id} budget={budget} />
                ))}
            </div>
            {expenses && expenses.length > 0 && 
            <div className="grid-md">
              <h2>Recent Expenses</h2>
              <Table expenses = {expenses.sort((a,b)=> b.createdAt - a.createdAt).slice(0,5)} />
              { expenses.length > 5 && <Link to={'expenses'} className="btn btn--dark"
              > View all expenses</Link> }
            </div>
            }
          </div>
        ) : (
          <div className="grid-sm">
            <p style={{ color: "#2d1387" }}>Budget with purpose</p>
            <AddBudgetForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home