import { Route, Routes } from "react-router-dom";
import "./App.css";
import Abouts from "./components/About/Abouts";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Header/Nav";
import Home from "./components/Home/Home";
import ElectricalItem from "./pages/ElectricalItem";
import ProductDetails from "./pages/ProductDetails";
import ReciprocatingCompressor from "./pages/ReciprocatingCompressor";
import ScrewAirCompressor from "./pages/ScrewAirCompressor";
import ScrewCompressorFilter from "./pages/ScrewCompressorFilter";
import Shop from "./pages/Shop";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<ProductDetails />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ScrewAirCompressor" element={<ScrewAirCompressor />} />
        <Route path="/ElectricalItem" element={<ElectricalItem />} />
        <Route
          path="/ScrewCompressorFilter"
          element={<ScrewCompressorFilter />}
        />
        <Route
          path="/ReciprocatingCompressor"
          element={<ReciprocatingCompressor />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
