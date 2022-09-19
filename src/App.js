import React from "react";
import { Login } from "./pages/login/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store/store";

function App() {
  return (
    // TODO:implement Provider once store is configured
    <BrowserRouter>
      {/*<Routes>*/}
      <Route exact path="/" component={Login} />
      <Route component={PageNotFound} />
      {/*</Routes>*/}
    </BrowserRouter>
  );
}

export default App;
