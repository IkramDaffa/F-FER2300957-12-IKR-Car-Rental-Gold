import Layout from "../../components/Layout";
import HeroSection from "./section/HeroSection";
import ServiceSection from "./section/serviceSection";
import WhyUsSection from "./section/whyUsSection";
import MyTestimoni from "./section/testimoniSection";
import BannerSection from "./section/bannerSection";
import FaqSection from "./section/faqSection";
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
