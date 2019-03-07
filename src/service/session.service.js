import axios from "../utils/axios.utils";
import Store from "../store";

import { Actions } from "../constants/actions";
import { sessionUtils } from "../utils";

class Authentication {
  isAuthenticated() {
    const auth = sessionUtils.getJsonStorageComponent("session");
    if (auth && auth.data && auth.data.token) {
      return true;
    } else {
      return false;
    }
  }

  sendLoginRequest = (username, password) => {
    return async dispatch => {
      try {
        const URL = "user/login";

        const DATA = {
          username,
          password
        };

        const response = await axios.post(URL, DATA);
        this.setSession(response.data);
        return response.data;
      } catch (e) {
        console.log(e);
        throw e;
      }
    };
  };

  setSession = token => {
    Store.dispatch({
      payload: token,
      type: Actions.sessionActions.SET_TOKEN
    });
  };

  //   logout() {
  //     Store.dispatch({
  //       type: Actions.sessionActions.CLEAR_SESSION
  //     });
  //     window.location.href = "/login";
  //   }
}

const Auth = new Authentication();

export default Auth;
