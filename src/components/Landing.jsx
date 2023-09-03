import { Form } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import Slider from "./Slider";

const Landing = () => {
  return (
    <div>
      <div
        style={{
          marginBottom: "30px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%", // Adjust the height value accordingly if you have a specific height in mind
        }}
      >
        <h1 style={{ color: "#2d1387" }}>Budget with purpose</h1>
        <p style={{ padding: "20px" }}>
          Spend, save, and give toward what&apos;s important in life
        </p>
      </div>

      <div className="intro">
        <div>
          <h2>
            Take Control of <span className="accent">Your Money</span>
          </h2>
          <p>
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
        <Slider />
      </div>
    </div>
  );
};

export default Landing;
