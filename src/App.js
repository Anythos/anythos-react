import React from "react";
import { Login } from "./pages/login/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Login />;
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
