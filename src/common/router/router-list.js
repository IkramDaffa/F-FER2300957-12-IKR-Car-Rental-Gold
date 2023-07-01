import LandingPage from "../../module/LandingPage";
import SearchCar from "../../module/searchCar";
import SearchResult from "../../module/saearchResult";
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
  {
    path: "searchResult",
    element: <SearchResult />,
  },
]);

export default routerList;
