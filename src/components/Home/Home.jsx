import Quotes from "./Email/Quotes";
import Feedback from "./Feedback/Feedback";
import HeroSection from "./HeroSection/HeroSection";
import ProductSection from "./ProductSection/ProductSection";
import ServiceOverview from "./ServiceOverview/ServiceOverview";
import Mainslider from "./slider/Mainslider";

const Home = () => {
  return (
    <div>
      <Mainslider />
      <HeroSection />
      <ProductSection />
      <Feedback />
      <ServiceOverview />
      <Quotes />
    </div>
  );
};

export default Home;
