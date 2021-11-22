import React from "react";
import { NavLink } from "react-router-dom";
import "./Navication.css";

const Navication = () => {
  return (
    <div className="NavContainer">
      {/* <NavLink exact className="nav" activeClassName="active-nav" to="/">
        Home
      </NavLink> */}
      <NavLink
        exact
        className="nav"
        activeClassName="active-nav"
        to="/categories"
      >
        Categories
      </NavLink>
      <NavLink
        exact
        className="nav"
        activeClassName="active-nav"
        to="/partners"
      >
        Hamkorlar
      </NavLink>
      {/* <NavLink exact className="nav" activeClassName="active-nav" to="/item">
        partnersItem
      </NavLink> */}
    </div>
  );
};

export default Navication;
