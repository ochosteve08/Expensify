/* eslint-disable react/prop-types */

import { CalculateSpentByBudget, FormatCurrency, FormatPercentage } from "../helpers";

const BudgetItem = ({ budget }) => {
    const {id, name, amount, color} = budget;
const spent = CalculateSpentByBudget(id);
  return (
    <div className="budget" style={{'--accent':color}}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{FormatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {FormatPercentage(spent/amount)}
      </progress>
      <div className="progress-text">
        <small>{FormatCurrency(spent)} spent</small>
        <small>{FormatCurrency(amount-spent)} remaining</small>
      </div>
    </div>
  );
};

export default BudgetItem;
