import './App.css'
import React from "react"
import Navbar from "./components/Navbar"
import AboutMe from "./Pages/AboutMe"
import Contact from "./Pages/Contact"
import Portfolio from "./Pages/Portfolio"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      {window.location.pathname.includes("/AboutMe") ? <AboutMe />: 
      window.location.pathname.includes("/Contact") ? <Contact />:
      window.location.pathname.includes("/Portfolio") ? <Portfolio />:
      <AboutMe />
      }
      <Footer />
      
      
      
      
    </div>
  );
}

export default App;
