import { NavLink } from "react-router-dom";
export const NavigationBar = () => {
  return (
    <nav className="nav">
      <h2>
        <span style={{ marginRight: "0.5rem" }} className="nav-toggler">
          <i class="fas fa-bars"></i>
        </span>
        <NavLink
          className="icon"
          style={{
            textDecoration: "none",
            paddingLeft: "1.5rem",
            color: "whitesmoke",
          }}
          to="/"
        >
          ORANGE
        </NavLink>
      </h2>
      <ul className="main-navbar-items">
        <li className="top-navbar-item">
          <a
            style={{ textDecoration: "none", color: "whitesmoke" }}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/vinaybajjuri58"
          >
            <i class="fab fa-github-square icon"></i>
          </a>
        </li>
        <li className="top-navbar-item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/bajjuri-vinay-kumar-5b84a0193/"
          >
            <i class="fab fa-linkedin icon"></i>
          </a>
        </li>
        <li className="top-navbar-item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/VinayBajjuri5"
          >
            <i class="fab fa-twitter-square icon"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};
