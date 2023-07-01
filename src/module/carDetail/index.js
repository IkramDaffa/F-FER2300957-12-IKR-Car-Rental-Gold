import Layout from "../../components/Layout";
import HeroBackgroundSection from "../saearchResult/section/heroBacgroundSection.js";
import SearchCar from "../searchCar/section/searchSection.js";
import CarDetailSection from "./section/carDetailSection.js";
function carDetail() {
  return (
    <Layout>
      <HeroBackgroundSection />
      <SearchCar />

      <CarDetailSection />
    </Layout>
  );
}
export default carDetail;
