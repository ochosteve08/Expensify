import { redirect } from "react-router-dom";
import { deleteUser } from "../helpers";
import { toast } from "react-toastify";

export const LogoutAction = async () => {
   toast.info("account deleted successfully");
  deleteUser({
    key: "username"
  });
  return redirect("/");
};
