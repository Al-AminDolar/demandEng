import { Route, Routes } from "react-router-dom";
import "./App.css";
import About2 from "./components/About2";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Shop from "./components/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/service" element={<Services />} />
        <Route path="/about" element={<About2 />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
