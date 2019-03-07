import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import indexRoutes from "./routes/index.jsx";

const hist = createBrowserHistory();

const RouterPath = () => (
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return (
          <Route
            exact={prop.exact}
            path={prop.path}
            key={key}
            component={prop.component}
          />
        );
      })}
    </Switch>
  </Router>
);

export default RouterPath;
