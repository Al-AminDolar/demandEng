import About from "./About";
import Banner from "./Banner";
import Feedback from "./Feedback";
import IdeaSection from "./IdeaSection";
import Quotes from "./Quotes";
import ProductSection from "./products/ProductSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <ProductSection />
      <Feedback />
      <IdeaSection />
      <Quotes />
    </div>
  );
};

export default Home;
