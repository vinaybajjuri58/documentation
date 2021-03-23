import { NavLink } from "react-router-dom";
export const NavigationBar = () => {
  return (
    <nav className="nav">
      <h2 className="main-logo-docs">
        <span style={{ marginRight: "0.5rem" }} className="nav-toggler">
          <i class="fas fa-bars"></i>
        </span>
        <NavLink
          style={{
            textDecoration: "none",
            paddingLeft: "1.5rem",
            color: "whitesmoke",
          }}
          to="/"
        >
          Orange
        </NavLink>
      </h2>
      <ul className="main-navbar-items">
        <li className="top-navbar-item">
          <NavLink
            style={{ textDecoration: "none", color: "whitesmoke" }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="top-navbar-item">About</li>
      </ul>
    </nav>
  );
};
