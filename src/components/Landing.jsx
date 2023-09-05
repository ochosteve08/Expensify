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
          height: "100%",
        }}
      >
        <h1 style={{ color: "#2d1387", marginBottom:"20px" }}>Budget with purpose</h1>
        <p>
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
          <input type="hidden" name="_action" value={"newUser"} />
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
