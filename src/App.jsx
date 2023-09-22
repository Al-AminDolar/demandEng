import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import ExpertSection from "./components/ExpertSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/topbar";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Banner />
      <About />
      <ExpertSection />
      <Footer />
    </div>
  );
}

export default App;
