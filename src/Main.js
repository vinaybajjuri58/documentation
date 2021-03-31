import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Alert } from "./Components/Alert";
import { Avatar } from "./Components/Avatar";
import { Badge } from "./Components/Badge";
import { Button } from "./Components/Button";
import { Card } from "./Components/Card";
import { ImageComponent } from "./Components/Image";
import { InputComponent } from "./Components/Input";
import { Lists } from "./Components/Lists";
import { Modal } from "./Components/Modal";
import { Navigation } from "./Components/Navigation";
// import { Slider } from "./Components/Slider";
import { TextUtilities } from "./Components/TextUtilities";
import { Toast } from "./Components/Toast";
import { NavigationBar } from "./Components/MainComponents";
import { Description } from "./Components/Description";

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
  //   name: "Description",
  //   url: "/description",
  // },
];

const SwitchComponents = ({ name }) => {
  switch (name) {
    // case "description":
    //   return <Description />;
    case "alert":
      return <Alert />;
    case "avatar":
      return <Avatar />;
    case "badge":
      return <Badge />;
    case "button":
      return <Button />;
    case "card":
      return <Card />;
    case "image":
      return <ImageComponent />;
    case "input":
      return <InputComponent />;
    case "lists":
      return <Lists />;
    case "modal":
      return <Modal />;
    case "navigation":
      return <Navigation />;
    // case "slider":
    //   return <Slider />;
    case "text-utilities":
      return <TextUtilities />;
    case "toast":
      return <Toast />;
    // case "description":
    //   return <Description />;
    default:
      return (
        <div className="component-description">
          <h2 className="heading">Component Not found</h2>
        </div>
      );
  }
};

export const NavigationComponents = ({ displaySidebar, changeDisplay }) => {
  return (
    <div className={displaySidebar ? "sidebar" : "no-sidebar"}>
      <h2>Components List</h2>
      <ul className="list-sidebar">
        {ComponentsArray.map((component) => (
          <li className="navbar-item" key={component.id}>
            <Link
              onClick={() => changeDisplay(!displaySidebar)}
              className="navbar-link"
              to={`${component.url}`}
            >
              {component.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
function Child() {
  let { id } = useParams();

  return <SwitchComponents name={id} componentClass="component-description" />;
}
export const ComponentContent = () => {
  return (
    <Switch>
      <Route path="/" exact component={Description} />
      <Route path="/:id" children={<Child />} />
    </Switch>
  );
};
export const Main = () => {
  const [togglerState, setTogglerState] = useState(true);
  return (
    <div className="main">
      <button
        onClick={() => setTogglerState(!togglerState)}
        className="side-nav-toggler"
      >
        <i class="fas fa-bars"></i>
      </button>
      <Router>
        <NavigationBar />
        <NavigationComponents
          displaySidebar={togglerState}
          changeDisplay={setTogglerState}
        />
        <ComponentContent />
      </Router>
    </div>
  );
};
