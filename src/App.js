import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/Pages/About";
import "./app.css";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./Contact";
import { useState } from "react";

import { FormspreeProvider } from "@formspree/react";

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
    <FormspreeProvider project="1874171648316276121">
      <div className="App">
        <Header currentPage={currentPage} handlePages={handlePages} />

        {renderPage()}

        <Footer className="App" />
      </div>
    </FormspreeProvider>
  );
}

export default App;
