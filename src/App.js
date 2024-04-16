import Main from "./Mainpage/Main";
import 'typeface-inter';
import Testing from "./Mainpage/Testing";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import About from "./AboutUs.js/About";
import Pending from "./Pending";
import ServiceMain from "./Services/ServiceMain";

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/aboutus" element={<About/>}/>
    <Route path="/products" element={<Pending/>}/>
    <Route path="/grayscale" element={<Pending/>}/>
    <Route path="/contactus" element={<Pending/>}/>
    <Route path="/updates" element={<Pending/>}/>
    <Route path="/services" element={<ServiceMain/>}/>
    </Routes>  
    </Router>
    
  );
}

export default App;
