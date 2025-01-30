import React from "react";
import image from "../images/woman-with-tablet.jpg";
import arrowSvg from "../images/down-arrow.svg";

const Home = () => {
  return (
    <div className="home relative">
      <img src={image} alt="Altered image" className="w-full h-auto" />
      <div className="absolute top-20 left-8 w-68">
        <h1 className="text-4xl font-bold">HEllo</h1>
        <h2 className="text-xl">HEllo</h2>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <img src={arrowSvg} className="h-12 w-12" alt="Altered image" />
      </div>
    </div>
  );
};

export default Home;
