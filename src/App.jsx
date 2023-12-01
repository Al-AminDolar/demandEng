import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Abouts from "./components/Main/Abouts";
import Home from "./components/Main/Home";
import ProductDetails from "./components/ProductDetails";

import Services from "./components/Main/Services/Services";
import Shop from "./components/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/service" element={<Services />} />
        <Route path="/shop/:productId" element={<ProductDetails />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
