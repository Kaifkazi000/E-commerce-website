import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"; // ✅ HeroSection import added
import Home from "./pages/Home";
import Products from "./pages/Products";
import TopBrands from "./pages/TopBrands";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login"; // ✅ Import Login Page
import CartPage from "./pages/CartPage";
function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection /> {/* ✅ HeroSection added */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/top-brands" element={<TopBrands />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} /> {/* ✅ Added Login Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

