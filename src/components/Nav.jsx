/* eslint-disable react/prop-types */
import logo from "../assets/expensify.svg";
import { Form, NavLink } from "react-router-dom";
import {FaTrash} from 'react-icons/fa'

const Nav = ({ username }) => {
  return (
    <nav>
      <NavLink to={"/"} aria-label="Go to home">
        <img width={200} src={logo} alt="" />
      </NavLink>
      <NavLink to={"/about"}>
        <div className="about">About Us</div>
      </NavLink>
      {username && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span style={{display:"flex", alignItems:"center", gap:"5px"}}>Delete Account <FaTrash/></span>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
