import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Show from "../Show/Show";
import About from "../About/About"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer"

import { ChakraProvider } from "@chakra-ui/react";
import './App.css';



function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Show />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
