import LandingPage from "../../module/LandingPage";
import SearchCar from "../../module/searchCar";
import { createBrowserRouter } from "react-router-dom";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "searchCar",
    element: <SearchCar />,
  },
]);

export default routerList;
