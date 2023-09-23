import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Card from "./components/Card";
import ExpertSection from "./components/ExpertSection";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import IdeaSection from "./components/IdeaSection";
import Navbar from "./components/Navbar";
import Topbar from "./components/topbar";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Banner />
      <About />
      <Card />
      <Feedback />
      <IdeaSection />
      <ExpertSection />
      <Footer />
    </div>
  );
}

export default App;
