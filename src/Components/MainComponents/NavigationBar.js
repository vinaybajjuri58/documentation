import { NavLink } from "react-router-dom";
export const NavigationBar = () => {
  return (
    <nav className="nav">
      <h2 className="main-logo">
        <span style={{ marginRight: "0.5rem" }} className="nav-toggler">
          <i class="fas fa-bars"></i>
        </span>
        <NavLink style={{ textDecoration: "none" }} to="/">
          Orange
        </NavLink>
      </h2>
      <ul className="main-navbar-items">
        <li className="top-navbar-item">
          <NavLink style={{ textDecoration: "none" }} to="/">
            Home
          </NavLink>
        </li>
        <li className="top-navbar-item">About</li>
      </ul>
    </nav>
  );
};
