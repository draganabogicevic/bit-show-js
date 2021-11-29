import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Show from "../Show/Show";
import About from "../About/About"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import ErrorBoundary from '../../components/ErrorBoundary';



import { ChakraProvider } from "@chakra-ui/react";
import './App.css';

const App = () => {
  return (
  <ErrorBoundary>
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Show />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </ChakraProvider>
  </ErrorBoundary>   
  );
}

export default App;
