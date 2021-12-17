import { useState, useEffect, useContext } from 'react'
import ReactPaginate from 'react-paginate'

import Search from '../components/Search'
import Card from '../components/Card'
import Loader from '../components/Loader'
import ErrorDisplay from '../components/ErrorDisplay'
import FallbackUI from '../components/FallbackUI'
import { SearchContext } from '../../context/search-context'
import { BookmarkContext } from '../../context/bookmark-context'

import ShowCommunicator from '../../service/ShowCommunicator'

import { Box, SimpleGrid } from '@chakra-ui/react'
// @ts-ignore
import style from './ShowsGrid.module.css'

const ShowsGrid = () => {
  const bookmarkContext = useContext(BookmarkContext)
  const [bookmarked, setBookmarked] = useState(bookmarkContext.bookmarked)
  const [shows, setShows] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const searchContext = useContext(SearchContext)
  const [offset, setOffset] = useState(0)
  const [data, setData] = useState([])
  const [pageCount, setPageCount] = useState()


  const handleBookmarkClick = (showId) => {
    const selectedShow = shows.find((s => s.id === showId));
    console.assert(selectedShow)
    selectedShow.toggleBookmark()
    setShows((prevShows) => {
      return prevShows.map((s) => {
        return s.id === showId ? selectedShow : s
      })
    })
    setBookmarked((prevBookmarked) => {
      return (
        selectedShow.bookmarked ?
        [...prevBookmarked, selectedShow] :
          prevBookmarked.filter(s => s.id !== selectedShow.id)
      )
    })
  }

  useEffect(() => {
    bookmarkContext.bookmarkHandler(bookmarked)
  }, [bookmarked])
  
 
  useEffect (() => {
    ShowCommunicator.getAllShows()
    .then(data => {
      if(bookmarked) {
        bookmarked.forEach(b => {
          const initbookmarked = data.find(s => (s.id === b.id))
          initbookmarked.bookmarked = true;   
        }) 
      }
      setShows(data)
      const slicedData = data.slice(offset, offset+9)
      setData(slicedData)
      // @ts-ignore
      setPageCount(Math.ceil(data.length / 9))
    })
    .catch(error => {
      setError(error.message);
    }).finally(() => {
      setLoading(false);
      }
    )
  }, [offset])


  const handlePageClick = (e) => {
    const selectedPage = e.selected
    setOffset(selectedPage*9)
  };
  let filteredShows
  if(searchContext.query !== '') {
    filteredShows = shows.filter(item => item.name.toLowerCase().includes(searchContext.query.toLocaleLowerCase()) || item.rating.average === parseFloat(searchContext.query))
  } else {
    filteredShows = data;
  }

  if(error) {
    return <FallbackUI message={error}/>
  }
  if(loading) {
    return <Loader />
  }
  return (
    <Box w='70%' m='auto'>
      <div color='white'>
        <ReactPaginate
          className={style.pagination}
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
      <Search />
      {filteredShows.length !== 0? (
      <SimpleGrid columns={[1, 2, 3]}>
        {filteredShows.map(s => (
        <Box w='100%' key={s.id}>
          <Card 
            show={s}
            onBookmark={handleBookmarkClick}
          />
        </Box>
        ))}
      </SimpleGrid>
    ) : <ErrorDisplay message='No matching result'/>}
  </Box>
  )
}


export default ShowsGrid