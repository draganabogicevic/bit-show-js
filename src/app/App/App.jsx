import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Show from "../Show/Show";
import FavShows from "../FavShows/FavShows";
import About from "../About/About";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import ErrorBoundary from '../../components/ErrorBoundary';
import BookmarkContextProvider from "../../context/bookmark-context";



import { ChakraProvider } from "@chakra-ui/react";
import './App.css';

const App = () => {

  return (
  <ErrorBoundary>
    <ChakraProvider>
      <Navbar />
      <BookmarkContextProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favShows" element={<FavShows />}/>
          <Route path="/:id" element={<Show />}/>  
          <Route path="/about" element={<About />}/>
        </Routes>
      </BookmarkContextProvider>
      <Footer />
    </ChakraProvider>
  </ErrorBoundary>   
  );
}

export default App;
