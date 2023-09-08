/* eslint-disable react/prop-types */
import { redirect } from "react-router-dom";
import { DeleteItem, GetAllMatchingItems } from "../helpers";
import { toast } from "react-toastify";

export const DeleteBudget = ({ params }) => {
  try {
    DeleteItem({
      key: "budgets",
      id: params.id,
    });
    const AssociatedExpense = GetAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });
    AssociatedExpense.forEach((expense)=>{
        DeleteItem({
            key:'expenses',
            id: expense.id,
        })
    });

    console.log(AssociatedExpense);
    toast.info("budget deleted successful");
  } catch (error) {
    throw new Error("encountered error while deleting budget");
  }
  return redirect("/");
};
