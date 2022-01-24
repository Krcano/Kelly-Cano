import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/Pages/About";
import "./app.css";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("aboutMe");
  const renderPage = () => {
    if (currentPage === "aboutMe") {
      return <About />;
    }
    if (currentPage === "portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    }
  };
  const handlePages = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePages={handlePages} />

      {renderPage()}

      <Footer className="App" />
    </div>
  );
}

export default App;
