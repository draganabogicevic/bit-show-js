import { useState, useEffect, useContext } from 'react'


import Search from '../components/Search'
import Card from '../components/Card'
import Loader from '../components/Loader'
import ErrorDisplay from '../components/ErrorDisplay'
import FallbackUI from '../components/FallbackUI'
import Paginate from '../components/Paginate'
import { SearchContext } from '../../context/search-context'
import { BookmarkContext } from '../../context/bookmark-context'

import ShowCommunicator from '../../service/ShowCommunicator'

import { Box, SimpleGrid } from '@chakra-ui/react'
// @ts-ignore


const ShowsGrid = () => {
  const bookmarkContext = useContext(BookmarkContext)
  const searchContext = useContext(SearchContext)
  const [bookmarked, setBookmarked] = useState(bookmarkContext.bookmarked)
  const [shows, setShows] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const [data, setData] = useState([])
  const [pageCount, setPageCount] = useState()


  const handleBookmarkClick = (showId) => {
    const selectedShow = shows.find((s => s.id === showId))
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
  }, [bookmarkContext, bookmarked])
  
  const fetchShows = () => {
    ShowCommunicator.getAllShows()
    .then(data => {
      if(bookmarked) {
        bookmarked.forEach(b => {
          const initbookmarked = data.find(s => (s.id === b.id))
          initbookmarked.bookmarked = true   
        }) 
      }
      setShows(data)
      const slicedData = data.slice(offset, offset+9)
      setData(slicedData)
      // @ts-ignore
      setPageCount(Math.ceil(data.length / 9))
    })
    .catch(error => {
      setError(error.message)
    }).finally(() => {
      setLoading(false)
      }
    )
  }
 
  useEffect (() => {
    fetchShows()
  }, [offset])


  const handlePageClick = (e) => {
    const selectedPage = e.selected
    setOffset(selectedPage*9)
  };
  let filteredShows
  if(searchContext.query !== '') {
    filteredShows = shows.filter(item => item.name.toLowerCase().includes(searchContext.query.toLocaleLowerCase()) || item.rating.average === parseFloat(searchContext.query))
  } else {
    filteredShows = data
  }

  if(error) {
    return <FallbackUI message={error}/>
  }
  if(loading) {
    return <Loader />
  }
  return (
    <Box w='70%' m='auto' mb={10}>
      <Paginate onPageClick={handlePageClick} pageCount={pageCount} />
      <Search />
      {filteredShows.length !== 0? (
      <SimpleGrid columns={[1, 2, 3]}>
        {filteredShows.map(s => (
          <Card 
            show={s}
            onBookmark={handleBookmarkClick}
          />
        ))}
      </SimpleGrid>
    ) : <ErrorDisplay message='No matching result'/>}
  </Box>
  )
}


export default ShowsGrid