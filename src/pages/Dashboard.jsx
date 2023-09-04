import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Landing from "../components/Landing";
import { toast } from "react-toastify";

export const DashboardLoader = () => {
  const username = fetchData("username");
  return { username };
};

export const DashboardAction = async ({ request }) => {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("username", JSON.stringify(formData.username));
    return toast.info(`Welcome, ${formData.username}`);
  } catch (e) {
    throw new Error("There was a problem creating your account.");
  }
};

const Dashboard = () => {
  const { username } = useLoaderData();
  console.log(username);

  return <div>{username ? <p>{username}</p> : <Landing />}</div>;
};

export default Dashboard;
