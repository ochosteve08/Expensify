import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import landing from "../assets/loan1.png";
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
      <main
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 0, 255, 0.2)), url(${landing})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Outlet />
      </main>
     
    </div>
  );
};

export default Main;
