import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './component/about/About';
import Home from './component/home/Home';
import Navbar from './component/navbar/Navbar';
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

function App() {
  return (
    <>
      
    <Router>
    
        <Navbar/>      
        <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          
        </Routes>

        <Footer/>
        </Router>
    
       
    </>
   
  );
}

export default App;
