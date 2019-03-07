import * as React from "react";
import { Redirect } from "react-router-dom";

import Auth from "../service";
import pusherInstance from "../utils/pusher.utils";

const WithAuthentication = Component => {
  return props => {
    const checkIsAuthenticated = Auth.isAuthenticated();
    if (checkIsAuthenticated) {
      pusherInstance.instantiatePusher();
      return <Component {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
};

export default WithAuthentication;
