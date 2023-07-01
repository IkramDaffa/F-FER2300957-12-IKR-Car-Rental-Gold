import Layout from "../../components/Layout";
import HeroBackroundSection from "./section/heroBacgroundSection";
import SearchSection from "../searchCar/section/searchSection";
import ResultSection from "./section/resultSection";

function searchResult() {
  return (
    <Layout>
      <HeroBackroundSection />
      <SearchSection />
      <ResultSection />
    </Layout>
  );
}
export default searchResult;
