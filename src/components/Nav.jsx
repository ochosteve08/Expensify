/* eslint-disable react/prop-types */
import logo from "../assets/expensify.svg";
import { Form, NavLink } from "react-router-dom";

const Nav = ({ username }) => {
  return (
    <nav>
      <NavLink to={"/"} aria-label="Go to home">
        <img className="logo" width={180} src={logo} alt="" />
      </NavLink>
      <div className="menu">
        {!username && (
          <NavLink to={"/about"}>
            <h4 className="about">About</h4>
          </NavLink>
        )}
        {username && (
          <Form
            method="post"
            action="/logout"
            onSubmit={(event) => {
              if (!confirm("all data will be cleared, proceed?")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                Logout
              </span>
            </button>
          </Form>
        )}
      </div>
    </nav>
  );
};

export default Nav;
