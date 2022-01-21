import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

import AuthContext from "./context/auth-context";

function App() {
  const ctxAuth = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctxAuth.isLoggedIn && <Login />}
        {ctxAuth.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
