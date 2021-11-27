import React, { useState, useEffect } from "react";

import Search from "../../components/Search";
import ShowCommunicator from "../../service/ShowCommunicator"

import { Box } from "@chakra-ui/react";


const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect (() => {
    ShowCommunicator.getAllShows().then(data => setShows(data))
  }, []);


  return (
    <Box w="70%" m="auto">
      <Search />
    </Box>
  )
}

export default Home;