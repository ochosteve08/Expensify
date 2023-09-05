/* eslint-disable react/prop-types */

import { CalculateSpentByBudget, FormatCurrency } from "../helpers";

const BudgetItem = ({ budget }) => {
    const {id, name, amount, color} = budget;

  return (
    <div className="budget">
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{FormatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={100}></progress>
      <div className="progress-text">
        <small>{CalculateSpentByBudget(id)}spent</small>
        <small>...remaining</small>
      </div>
    </div>
  );
};

export default BudgetItem;
