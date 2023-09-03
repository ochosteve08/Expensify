import { Form } from "react-router-dom";
import {FaUserPlus} from 'react-icons/fa'


const Landing = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          {" "}
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            placeholder="username"
            name="username"
            required
            aria-label="your name"
            autoComplete="given-name"
          />
          <button type="submit" className="btn btn--dark">
            Create Account <FaUserPlus />
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Landing