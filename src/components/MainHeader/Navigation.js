import React, { useContext } from "react";

import AuthContext from "../../context/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctxAuth = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctxAuth.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctxAuth.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctxAuth.isLoggedIn && (
          <li>
            <button onClick={ctxAuth.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
