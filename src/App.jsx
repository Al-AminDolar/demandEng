import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Card from "./components/Card";
import ExpertSection from "./components/ExpertSection";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import IdeaSection from "./components/IdeaSection";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
      <Navbar />
      <Banner />
      <About />
      <Card />
      <Feedback />
      <IdeaSection />
      <Quotes />
      <ExpertSection />
    </div>
  );
}

export default App;
