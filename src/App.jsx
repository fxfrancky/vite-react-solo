import React from "react";
import { useState } from "react";
import "./App.css";
import LogoImg from "./components/LogoImg";
import Title from "./components/Title";
import Contact from "./components/Contact";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main">
      <div className="mainApp">
        <LogoImg />
        <Title />
        <Contact />
        <MainContent />
        <Footer />
      </div>
    </main>
  );
}

export default App;
