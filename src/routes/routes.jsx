//testing
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Admin/Login";
import MainDashboard from "../components/layouts/MainDashboard";
import Dashboard from "../pages/Dashboard/Dashboard";
import Setting from "../pages/Setting/Setting";
import Village from "../pages/Village/Village";
import Household from "../pages/Hosehold/Household";
import Business from "../pages/Business/Business";
import HouseholdTax from "../pages/HouseholdTax/HouseholdTax";
import BusinessTax from "../pages/BusinessTax/BusinessTax";
import Operator from "../pages/Admin/Operator";
import EditVillage from "../pages/Village/EditVillage";
import AddHousehold from "../pages/Hosehold/AddHousehold";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/main-dashboard",
    element: <App></App>,
    children: [
      {
        path: "/main-dashboard",
        element: <MainDashboard></MainDashboard>,
        children: [
          {
            path: "/main-dashboard/dashboard",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/main-dashboard/setting",
            element: <Setting></Setting>,
          },
          {
            path: "/main-dashboard/village",
            element: <Village></Village>,
          },
          {
            path: "/main-dashboard/household",
            element: <Household></Household>,
          },
          {
            path: "/main-dashboard/business",
            element: <Business></Business>,
          },
          {
            path: "/main-dashboard/household-tax",
            element: <HouseholdTax></HouseholdTax>,
          },
          {
            path: "/main-dashboard/business-tax",
            element: <BusinessTax></BusinessTax>,
          },
          {
            path: "/main-dashboard/operator",
            element: <Operator></Operator>,
          },
          {
            path: "/main-dashboard/edit-village",
            element: <EditVillage></EditVillage>,
          },
          {
            path: "/main-dashboard/add-household",
            element: <AddHousehold></AddHousehold>,
          },
        
        ],
      },
    ],
  },
]);
export default routes;
