import React, { useEffect, useState } from "react";
import { RoutesComponent } from "./Routes";
import { NavigationBar } from "./Components/MainComponents";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import "./main.css";

const ComponentsArray = [
  {
    id: 0,
    name: "Alert",
    url: "/alert",
  },
  {
    id: 1,
    name: "Avatar",
    url: "/avatar",
  },
  {
    id: 2,
    name: "Badge",
    url: "/badge",
  },
  {
    id: 3,
    name: "Button",
    url: "/button",
  },
  {
    id: 4,
    name: "Card",
    url: "/card",
  },
  {
    id: 5,
    name: "Image",
    url: "/image",
  },
  {
    id: 6,
    name: "Input",
    url: "/input",
  },
  {
    id: 7,
    name: "Lists",
    url: "/lists",
  },
  {
    id: 8,
    name: "Modal",
    url: "/modal",
  },
  {
    id: 9,
    name: "Navigation",
    url: "/navigation",
  },
  // {
  //   id: 10,
  //   name: "Slider",
  //   url: "/slider",
  // },
  {
    id: 11,
    name: "TextUtilities",
    url: "/text-utilities",
  },
  {
    id: 12,
    name: "Toast",
    url: "/toast",
  },
  // {
  //   id: 13,
  //   name: "Rating",
  //   url: "/rating",
  // },
  // {
  //   id: 13,
  //   name: "Description",
  //   url: "/description",
  // },
];

export const NavigationComponents = ({ displaySidebar, toggleSidebar }) => {
  return (
    <div className={displaySidebar ? "sidebar" : "no-sidebar"}>
      <h2 style={{ paddingLeft: "1rem", fontSize: "large", fontWeight: 600 }}>
        Components List
      </h2>
      <ul className="list-sidebar">
        {ComponentsArray.map((component) => (
          <li className="navbar-item" key={component.id}>
            <NavLink
              onClick={() => toggleSidebar(!displaySidebar)}
              className="navbar-link"
              to={`${component.url}`}
              activeStyle={{
                color: "white",
                backgroundColor: "#9575cd",
              }}
            >
              {component.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Main = () => {
  const [togglerState, setTogglerState] = useState(false);
  useEffect(() => {
    setTogglerState(false);
  }, []);
  return (
    <div className="main">
      <button
        onClick={() => setTogglerState(!togglerState)}
        className="side-nav-toggler"
      >
        {togglerState ? (
          <i class="fas fa-times"></i>
        ) : (
          <i class="fas fa-bars"></i>
        )}
      </button>
      <Router>
        <NavigationBar />
        <NavigationComponents
          displaySidebar={togglerState}
          toggleSidebar={setTogglerState}
        />
        <RoutesComponent />
      </Router>
    </div>
  );
};
