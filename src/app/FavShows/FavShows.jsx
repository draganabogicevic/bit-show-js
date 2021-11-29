import React, { useState, useEffect, useContext } from "react";
import { BookmarkContext } from "../../context/bookmark-context";

import FavCard from "./FavCard";
import ErrorDisplay from "../../components/ErrorDisplay";

import { Box, SimpleGrid  } from "@chakra-ui/react";

const FavShows = () => {
  const [bookmarked, setBookmarked] = useState([]);
  const bookmarkContext = useContext(BookmarkContext);

  useEffect(() => {
    setBookmarked(bookmarkContext.bookmarked);
  }, [bookmarkContext.bookmarked])

  useEffect(() =>{
    return function () {
      setBookmarked([]);
      bookmarkContext.clearBookmarked();
    }
  }, [])

  return (
    <Box w="70%" m="auto">
      {bookmarked.length !== 0? (
        <SimpleGrid columns={[1, 2, 3]}>
          {bookmarked.map((s, index) => (
          <Box w="100%" key={index}>
            <FavCard show={s} key={s.id}/>
          </Box>
          ))}
        </SimpleGrid>
      ) : <ErrorDisplay message="No selected favourite shows jet" />}
    </Box>
  )
}

export default FavShows;