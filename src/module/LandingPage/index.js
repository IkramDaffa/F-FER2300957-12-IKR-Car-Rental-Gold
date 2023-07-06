import Layout from "../../components/Layout";
import HeroSection from "./section/HeroSection";
import ServiceSection from "./section/ServiceSection";
import WhyUsSection from "./section/WhyUsSection";
import MyTestimoni from "./section/TestimoniSection";
import BannerSection from "./section/BannerSection";
import FaqSection from "./section/FaqSection";
function landingPage() {
  return (
    <Layout>
      <HeroSection />
      <ServiceSection />
      <WhyUsSection />
      <MyTestimoni />
      <BannerSection />
      <FaqSection />
    </Layout>
  );
}
export default landingPage;
