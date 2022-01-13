import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import './app.css'
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import "./App.css";

function App() {
  return (
    <div className="">
      <Header />
      <Navigation/>
      <About/>
      <Portfolio />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
