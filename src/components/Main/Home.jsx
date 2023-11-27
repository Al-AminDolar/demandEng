import AttractiveSection from "../Home/AttractiveSection";
import Feedback from "../Home/Feedback";
import HeroSection from "../Home/HeroSection";
import ProductSection from "../Home/ProductSection";
import Quotes from "../Home/Quotes";
import WelcomeSection from "../Home/WelcomeSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <ProductSection />
      <Feedback />
      <AttractiveSection />
      <Quotes />
    </div>
  );
};

export default Home;
