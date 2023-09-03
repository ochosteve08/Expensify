import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export const DashboardLoader = () => {
  const username = fetchData("username");
  console.log(username);
  return { username };
};

const Dashboard = () => {
  const { username } = useLoaderData();
  console.log(username);
  return <h1>{username}</h1>;
};

export default Dashboard;
