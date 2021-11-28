import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../context/search-context";

import Search from "../../components/Search";
import ShowCommunicator from "../../service/ShowCommunicator"

import { Box } from "@chakra-ui/react";


const Home = () => {
  const [shows, setShows] = useState([]);
  const searchContext = useContext(SearchContext);

  useEffect (() => {
    ShowCommunicator.getAllShows().then(data => setShows(data))
  }, []);

  let filteredShows;
  if(searchContext.query !== "") {
    filteredShows = shows.filter(item => item.name.toLowerCase().includes(searchContext.query.toLocaleLowerCase()) || item.rating.average === parseFloat(searchContext.query))
  } else {
    filteredShows = shows;
  }


  console.log(filteredShows)

  return (
    <Box w="70%" m="auto">
      <Search />
    </Box>
  )
}


export default Home;