import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./composants/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Footer from "./composants/footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

       
      </Routes> 
      <Footer/>
    </>
  );
}

export default App;
