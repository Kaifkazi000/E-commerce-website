import React from "react";
import "./Home.css"; // Importing custom CSS
import perfumeImage from "../assets/perfume.png"; // Replace with your perfume image path
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Side - Brand Name */}
      <motion.div
        className="home-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="brand-name">NOOR FRAGRANCE</h1>
        <p className="brand-tagline">REGAL. EXQUISITE. UNMISTAKABLE.</p>
      </motion.div>

      {/* Right Side - Perfume Image */}
      <motion.div
        className="home-image"
        initial={{ opacity: 0, x:100}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={perfumeImage} alt="Perfume Bottle" className="perfume-img" />
      </motion.div>
    </div>
  );
};

export default Home;
