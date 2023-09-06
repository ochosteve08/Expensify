/* eslint-disable react/prop-types */

import { FormatCurrency, FormatDate } from "../helpers";


const ExpenseItem = ({expense}) => {
    console.log(expense.name)
  return (
    <>
      <td>{expense.name}</td>
      <td>{FormatCurrency(expense.amount)}</td>
      <td>{FormatDate(expense.createdAt)}</td>
    </>
  );
}

export default ExpenseItem