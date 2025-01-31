import React from "react";

const Home = ({ name, title }) => {
  return (
    <div id="home" className="home relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 h-screen flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-white z-10 text-center">
        <h1 className="text-6xl font-bold text-gray-100 mb-4">{name}</h1>
        <h2 className="text-2xl text-gray-300">{title}</h2>
      </div>
    </div>
  );
};

export default Home;
