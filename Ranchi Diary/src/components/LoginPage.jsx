import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const LogInPage = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <form style={{ width: "25%", marginLeft: "30%" }}>
        <img
          className="mb-4"
          src="/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            fdprocessedid="q4bea"
          />
          <label htmlFor="floatingInput">User Id</label>
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
  );
};

export default LogInPage;
