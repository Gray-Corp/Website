import Main from "./Mainpage/Main";
import 'typeface-inter';
import Testing from "./Mainpage/Testing";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import About from "./AboutUs.js/About";
import Pending from "./Pending";
import ServiceMain from "./Services/ServiceMain";
import ContactMain from "./Contact/ContactMain";
import './Mainpage/Contents.css'
import CareersMain from "./careers/CareersMain";
import PositionsRequirements from "./careers/PositionsRequirements";

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/aboutus" element={<About/>}/>
    <Route path="/products" element={<Pending/>}/>
    <Route path="/grayscale" element={<Pending/>}/>
    <Route path="/contact" element={<ContactMain/>}/>
    <Route path="/updates" element={<Pending/>}/>
    <Route path="/services" element={<ServiceMain/>}/>
    <Route path="/careers" element={<CareersMain/>}/>
    <Route path="/careers/openings" element={<PositionsRequirements/>}/>
    </Routes>  
    </Router>
    
  );
}

export default App;