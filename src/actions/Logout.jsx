import { redirect } from "react-router-dom";
import { DeleteUser } from "../helpers";
import { toast } from "react-toastify";

export const LogoutAction = async () => {
  toast.info("logout successful");
  DeleteUser({
    key: "username",
  });
  return redirect("/");
};
