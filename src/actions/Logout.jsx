import { redirect } from "react-router-dom";
import { deleteUser } from "../helpers";

export const LogoutAction = async () => {
  deleteUser({
    key: "username"
  });
  return redirect("/");
};
