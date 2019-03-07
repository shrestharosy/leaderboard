import Dashboard from "../views/Dashboard/Dashboard.jsx";
import Details from "../views/Details/Details.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Leaderboard",
    icon: "nc-icon nc-trophy",
    component: Dashboard
  },
  
  {
    path: "/info",
    name: "Details",
    icon: " nc-icon nc-paper",
    component: Details
  },

  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
