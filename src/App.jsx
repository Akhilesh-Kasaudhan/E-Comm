import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Products from "./pages/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
