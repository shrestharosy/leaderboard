import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Login from "../views/Login";

var indexRoutes = [
  { path: "/login", exact: true, name: "Login", component: Login },
  { path: "/", name: "Home", component: Dashboard }
];

export default indexRoutes;
