import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
const SideBar = () => {
  const customerDetailFromStore = useSelector((store) => store.customerReducer);
  const userDetails = customerDetailFromStore.customerProfile;
  const ROLE = customerDetailFromStore.loggedInUserDetail.role;

  const customerNav = [
    { diplayName: "Profile", navigation: "profile" },
    { diplayName: "Dashboard", navigation: "dashboard" },
    { diplayName: "Subscription", navigation: "subscription" },
    { diplayName: "Notifications", navigation: "notificationWindow" },
  ];
  const AdminNav = [
    { diplayName: "Customers", navigation: "customers" },
    { diplayName: "Update Price", navigation: "price" },
    { diplayName: "Send Notifications", navigation: "sendNotification" },
    { diplayName: "Doctor", navigation: "doctor" },
    { diplayName: "Animal Food", navigation: "animalFood" },
    { diplayName: "Waste Management", navigation: "tractor" },
  ];
  const listItems = (navItems) => (
    <>
      <li>
        <NavLink
          to={navItems.navigation}
          className="nav-link text-white"
          aria-current="page"
        >
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#people-circle"></use>
          </svg>
          {navItems.diplayName}
        </NavLink>
      </li>
    </>
  );

  const displayNavItems = () => {
    let navigatingElements = null;
    if (ROLE === "ADMIN") navigatingElements = AdminNav;
    else navigatingElements = customerNav;

    return <>{navigatingElements.map((item) => listItems(item))}</>;
  };
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "280px" }}
      >
        <span>
          <svg className="bi pe-none me-2" width="40" height="32"></svg>
          <span className="fs-4">{userDetails.name}</span>
        </span>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          {displayNavItems()}
          {}
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="../../public/profilePic/Rahman.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>{userDetails.name}</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
