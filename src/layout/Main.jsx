import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import landing from '../assets/loan1.png'
import Nav from "../components/Nav";

export const MainLoader = () => {
  const username = fetchData("username");

  return { username };
};

const Main = () => {
  const { username } = useLoaderData();
  
  return (
    <div className="layout">
    <Nav username={username} />
      <main>
        <Outlet />
      </main>
      <img src={landing} alt="" />
    </div>
  );
};

export default Main;
