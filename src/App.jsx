import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const siteProps = {
  name: "Sk Mahammad Irfan",
  title: "Full-Stack web developer(MERN)",
  email: "skmahammadirfan8@gmail.com",
  gitHub: "Sk8Mahammad-Irfan9",
  instagram: "",
  linkedIn: "sk-mahammad-irfan",
  medium: "",
  twitter: "",
  youTube: "",
};

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home name={siteProps.name} title={siteProps.title} />
        <About />
        <Portfolio />
        <Footer {...siteProps} />
      </div>
    </>
  );
};

export default App;
