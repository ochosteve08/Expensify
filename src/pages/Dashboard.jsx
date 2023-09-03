import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Landing from "../components/Landing";

export const DashboardLoader = () => {
  const username = fetchData("username");
  return { username };
};

const Dashboard = () => {
  const { username } = useLoaderData();

  return (
    <div>
      {username ? <p>{username}</p>: <Landing/> }
     
    </div>
  );
};

export default Dashboard;
