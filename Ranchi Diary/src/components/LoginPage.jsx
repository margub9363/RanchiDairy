import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { loggingIn } from "../store";

const LogInPage = () => {
  const dispatch = useDispatch();
  const customerDetailFromStore = useSelector((store) => store.customerReducer);
  const userDetails = customerDetailFromStore.loggedInUserDetail.jwtToken;

  const LogInPageHandler = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const creds = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    dispatch(loggingIn(creds));
    console.log(userDetails);
  };

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <form
          style={{ width: "25%", marginLeft: "30%" }}
          onSubmit={LogInPageHandler}
        >
          <img
            className="mb-4"
            src="./../public/LoginLogo.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              fdprocessedid="q4bea"
            />
            <label htmlFor="floatingInput">Customer ID</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              fdprocessedid="bcarw7"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            fdprocessedid="mcjvxe"
          >
            Sign in
          </button>
        </form>
        <Link to="/home" style={{ margin: "30%" }}>
          <Button variant="danger" style={{ width: "25%", marginTop: "10px" }}>
            Cancel
          </Button>{" "}
        </Link>
      </div>
    </>
  );
};

export default LogInPage;
