import axios from "axios";
import { CONFIG } from "../config";
import * as Alert from "../utils/alert.utils";
// import { sessionUtils } from "./session.utils";

// const session = sessionUtils.getJsonStorageComponent("session");
// let accessToken;
// if (session !== null) {
//   accessToken = session.access_token;
// }

const instance = axios.create({
  baseURL: CONFIG.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    // authorization: `Token ${accessToken}`
  },

  timeout: 0
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const Config = error.config;

    if (error.code === "ECONNABORTED") {
      Alert.info("Request Time Out. Please try again");
    }
    if (typeof error === "undefined") {
      // when backend server is not available at all
      Alert.info(
        "We cannot seem to reach our servers. Please check your internet connection and try again"
      );
      return Promise.reject(error);
    } else if (typeof error.response === "undefined") {
      // when request is timeout

      Alert.info(
        "We cannot seem to reach our servers. Please check your internet connection and try again"
      );
      return Promise.reject(error.response);
    } else if (error.response.status === 401) {
      if ((error.response.data || "") === "invalid_token") {
        // should be rejected and logout
        return logout(error);
      } else {
        if (
          Config["x-no-retry"] !== true &&
          Config["x-refresh-token"] !== true
        ) {
          /* return Auth.renewToken().then((response:any)=>{
					Config["x-refresh-token"] = true;
					Config.headers.Authorization = `${response.token_type} ${response.access_token}`;
					return instance.request(Config);
				},(err)=>{
					return logout(err);
				}); */
        } else {
          // should be rejected and logout
          return logout(error);
        }
      }
      return Promise.reject(error.response);
    } else if (error.response.status === 403) {
      // Alert.info("You are not authorized to perform that action");
      return Promise.reject(error.response);
    } else if (error.response.status === 500) {
      Alert.info(
        "Our system is currently facing a problem. Please check back later"
      );

      return Promise.reject(error.response);
    } else {
      // we don't know what's going on
      return Promise.reject(error.response);
    }
  }
);

export const rootURL = CONFIG.BACKEND_URL;

// export default { instance, oauthInstance };
export default instance;

function logout(error) {
  const logouts = ["/logout", "logout"];
  if (!logouts.includes(window.location.pathname)) {
    window.location.href = "/logout";
  }
  return Promise.reject(error.response);
}
