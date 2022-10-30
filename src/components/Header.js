import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>React Movies</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to=""
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Whishlist"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Whishlist
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
