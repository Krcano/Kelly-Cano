import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import './app.css'
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useState } from "react";


function App() {
  const [currentPage, setCurrentPage] = useState('aboutMe')
  const renderPage=()=>{
    if( currentPage === 'aboutMe'){
      return <About/>
    }
    if(currentPage === 'portfolio'){
      return <Portfolio/>
    }
    if(currentPage === 'contact'){
      return <Contact/>
    }
  }
  const handlePages=(page)=>{
    setCurrentPage(page)
    const style = {
      navbarFocus: {
        color: 'red',
      },
    }
  }
 
 return (
    <div >
      <Header currentPage={currentPage} handlePages={handlePages}/>   
      
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
