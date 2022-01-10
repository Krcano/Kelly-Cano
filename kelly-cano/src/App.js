import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
// import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Contact from "./components/Contact";
// import "./App.css";

function App() {
  return (
    <div className="">
      <Header />
      {/* <Navigation/> */}
      <About/>
      <Project />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
