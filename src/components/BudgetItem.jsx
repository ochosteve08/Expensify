/* eslint-disable react/prop-types */

import { Form, Link } from "react-router-dom";
import {
  CalculateSpentByBudget,
  FormatCurrency,
  FormatPercentage,
} from "../helpers";
import { BsTicketDetailed } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = CalculateSpentByBudget(id);
  return (
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{FormatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {FormatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{FormatCurrency(spent)} spent</small>
        <small>{FormatCurrency(amount - spent)} remaining</small>
      </div>
      {showDelete ? (
        <div className="flex-sm">
          <Form
            method="post"
            action="delete"
            onSubmit={(event) => {
              if (
                !confirm(
                  " Are you sure you want to permanently delete this budget"
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn">
              <span>Delete Budget</span> <FaTrash />
            </button>
          </Form>
        </div>
      ) : (
        <div className="flex-sm">
          <Link className="btn" to={`/budget/${id}`}>
            <span>View Details</span>
            <BsTicketDetailed />
          </Link>
        </div>
      )}
    </div>
  );
};

export default BudgetItem;
