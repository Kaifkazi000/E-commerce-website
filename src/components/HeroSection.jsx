import React from "react";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">NOOR FRAGRANCE</h1>
          <p className="text-lg text-gray-600 mt-4">REGAL. EXQUISITE. UNMISTAKABLE.</p>
        </div>
        <div className="flex justify-center">
          <img src="/perfume.png" alt="Perfume" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
