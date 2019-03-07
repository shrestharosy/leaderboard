var env = process.env.REACT_APP_API_ENV;
env = (env || "").trim();

let BACKEND_URL;

if (env === "mahendra") {
  BACKEND_URL = "http://172.16.4.158:8000/";
} else if (env === "sushil") {
  BACKEND_URL = "http://172.16.5.43:5000/";
} else if (env === "bijay") {
  BACKEND_URL = "http://172.16.4.215:5000";
} else {
  BACKEND_URL =
    "http://fuse-ai-competition-dev-v2.us-west-2.elasticbeanstalk.com/";
}


export const CONFIG = {
  BACKEND_URL
};
