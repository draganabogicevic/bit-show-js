import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/search-context";

import Search from "../../components/Search";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import ErrorDisplay from "../../components/ErrorDisplay";
import FallbackUI from "../../components/FallbackUI";

import ShowCommunicator from "../../service/ShowCommunicator"

import { Box, SimpleGrid  } from "@chakra-ui/react";


const Home = () => {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const searchContext = useContext(SearchContext);

  useEffect (() => {
    ShowCommunicator.getAllShows()
    .then(data => setShows(data))
    .catch(error => {
      setError(error.message);
    }).finally(() => {
      setLoading(false);
      }
    ) 
  }, []);

  let filteredShows;
  if(searchContext.query !== "") {
    filteredShows = shows.filter(item => item.name.toLowerCase().includes(searchContext.query.toLocaleLowerCase()) || item.rating.average === parseFloat(searchContext.query))
  } else {
    filteredShows = shows;
  }

  if(error) {
    return <FallbackUI message={error}/>
  }
  if(loading) {
    return <Loader />
  }
  return (
    <Box w="70%" m="auto">
      <Search />
      {filteredShows.length !== 0? (
        <SimpleGrid columns={[1, 2, 3]}>
          {filteredShows.slice(0, 50).map(s => (
          <Box w="100%" key={s.id}>
            <Link to={`/${s.id}`}>
              <Card show={s} />
            </Link>   
          </Box>
          ))}
        </SimpleGrid>
      ) : <ErrorDisplay message="No matching result" />}
    </Box>
  )
}


export default Home;