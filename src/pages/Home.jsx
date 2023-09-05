/* eslint-disable react/prop-types */

import AddBudgetForm from "../components/AddBudgetForm"


const Home = ({username,budgets}) => {
// console.log(budgets)
  return (
    <div className="dashboard">
    <h2>Welcome back, <span className="accent">{username}</span></h2>
    <div className="grid-sm">
        
        <div className="grid-lg">
            <div className="flex-lg">
            <AddBudgetForm/>

            </div>
        </div>
    </div>

    </div>
  )
}

export default Home