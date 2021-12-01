import React, { useState, useEffect, useContext } from "react";

import Search from "../../components/Search";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import ErrorDisplay from "../../components/ErrorDisplay";
import FallbackUI from "../../components/FallbackUI";
import { SearchContext } from "../../context/search-context";
import { BookmarkContext } from "../../context/bookmark-context";

import ShowCommunicator from "../../service/ShowCommunicator"

import { Box, SimpleGrid  } from "@chakra-ui/react";
// import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
// import {
//   Pagination,
//   usePagination,
//   PaginationNext,
//   PaginationPage,
//   PaginationPrevious,
//   PaginationContainer,
//   PaginationPageGroup,
// } from "@ajna/pagination";


const Home = () => {
  const bookmarkContext = useContext(BookmarkContext);
  const [bookmarked, setBookmarked] = useState([]);
  const [shows, setShows] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const searchContext = useContext(SearchContext);
  console.log(bookmarked);
  // const [pagesQuantity, setPagesQuantity] = useState(0);
  // const [curPage, setCurPage] = useState(0);
  // const itemLimit = 9;

  // const normalStyles = {
  //   bg: "white",
  // }
  // const activeStyles = {
  //   bg: "blue.300",
  // }

  // // @ts-ignore
  // const handlePageChange = (page) => {
  //   setCurPage(page)
  // }

  // useEffect(() => {
  //   const pagesTotal = Math.ceil(shows.length / itemLimit);
  //   setPagesQuantity(pagesTotal)
  // }, [shows.length])


  
  const handleBookmarkClick = (showId) => {
    const selectedShow = shows.find((s => s.id === showId));
    console.assert(selectedShow);
    selectedShow.toggleBookmark();
    setShows((prevShows) => {
      return prevShows.map((s) => {
        return s.id === showId ? selectedShow : s;
      });
    });
    setBookmarked((prevBookmarked) => {
      return (
        selectedShow.bookmarked ?
          [...prevBookmarked, selectedShow] :
          prevBookmarked.filter(s => s.id !== selectedShow.id)
      );
    });
  };

  useEffect(() => {
    bookmarkContext.bookmarkHandler(bookmarked);
  }, [bookmarked])
  

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
            <Card 
              show={s}
              onBookmark={handleBookmarkClick}
              // // @ts-ignore
              // curPage={curPage} 
              // itemLimit={itemLimit}
            />
          </Box>
          ))}
        </SimpleGrid>
      ) : <ErrorDisplay message="No matching result" />}
        {/* <Pagination
          onPageChange={handlePageChange}
          // @ts-ignore
          pagesQuantity={pagesQuantity-1}        
        >
          <PaginationPrevious bg="white">
            <CgChevronLeft />
          </PaginationPrevious> */}
          {/* <PaginationPageGroup>
          {generatePages(pagesQuantity)?.map((page) => (
              <PaginationPage
                key={`paginator_page_${page}`}
                page={page}
                normalStyles={normalStyles}
                activeStyles={activeStyles}
              />
            ))}
          </PaginationPageGroup> */}
        {/* </Pagination> */}
    </Box>
  )
}


export default Home;