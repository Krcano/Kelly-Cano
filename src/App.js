import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/Pages/About";
import "./app.css";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";
import ParticleBackground from "./components/ParticleBackground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router >
      <div className="App">
      <ParticleBackground />
      <Header />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer className="App" />
      </div>
    </Router>
  );
}

export default App;
