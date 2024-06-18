import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutFunctionality } from "../store";

const Header = () => {
  const customerDetailFromStore = useSelector((store) => store.customerReducer);
  const isLoggedIn = customerDetailFromStore.loggedInUserDetail.jwtToken;

  // const isLoggedIn = "null";

  const dispatch = useDispatch();

  const logoutAndNullifyJWTToken = () => {
    console.log("**********");
    dispatch(logoutFunctionality());
  };

  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Quality
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Notification
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            ></form>

            <div className="text-end">
              {isLoggedIn == null ? (
                <Link to={"/login"}>
                  <button type="button" className="btn btn-outline-light me-2">
                    Login
                  </button>
                </Link>
              ) : (
                <></>
              )}
              {isLoggedIn == null ? (
                <Link to="/signUp">
                  <button type="button" className="btn btn-warning">
                    Sign-up
                  </button>
                </Link>
              ) : (
                <></>
              )}
              {isLoggedIn != null ? (
                <Link to={"/home"}>
                  <button
                    type="button"
                    className="btn btn-outline-light me-2"
                    onClick={logoutAndNullifyJWTToken}
                  >
                    Logout
                  </button>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
