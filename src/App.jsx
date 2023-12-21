import { Route, Routes } from "react-router-dom";
import "./App.css";
import Abouts from "./components/About/Abouts";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails";
import Shop from "./components/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<ProductDetails />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
