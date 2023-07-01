import logo from "./logo.svg";
import "./App.css";
import "./style/search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./module/LandingPage";
import SearchCar from "./module/searchCar";
import SearchResult from "./module/saearchResult";
import CarDetail from "./module/carDetail";
import Routers from "./common/router/router.js";

function App() {
  return (
    <>
      <Routers />
      {/* <LandingPage />
      <SearchCar />
      <SearchResult />
      <CarDetail /> */}
    </>
  );
}

export default App;
