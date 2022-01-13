import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import './app.css'
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useState } from "react";


function App() {
 return (
    <div >
      <Header />
      <About/>
      <Portfolio />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
