import "./App.css";
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
      <ExpertSection />
      <Footer />
    </div>
  );
}

export default App;
