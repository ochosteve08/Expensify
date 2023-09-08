import { redirect } from "react-router-dom";
import { DeleteItem } from "../helpers";
import { toast } from "react-toastify";

export const LogoutAction = async () => {
  toast.info("logout successful");
  DeleteItem({
    key: "username",
  });
  DeleteItem({
    key: "expenses",
  });
  DeleteItem({
    key: "budgets",
  });
  return redirect("/");
};
