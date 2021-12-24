import { useState, useContext } from 'react'
import { useUpdateEffect, useMount } from 'react-use'

import Search from '../components/Search'
import Card from '../components/Card'
import Loader from '../components/Loader'
import ErrorDisplay from '../components/ErrorDisplay'
import FallbackUI from '../components/FallbackUI'
import Paginate from '../components/Paginate'
import { SearchContext } from '../../context/search-context'
import { BookmarkContext } from '../../context/bookmark-context'

import { showCommunicator } from '../../service/ShowCommunicator'

import { Box, SimpleGrid } from '@chakra-ui/react'

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

    const handleBookmarkClick = showId => {
        const selectedShow = shows.find(s => s.id === showId)
        selectedShow.toggleBookmark()
        setShows(prevShows => {
            return prevShows.map(s => {
                return s.id === showId ? selectedShow : s
            })
        })
        setBookmarked(prevBookmarked => {
            return selectedShow.bookmarked
                ? [...prevBookmarked, selectedShow]
                : prevBookmarked.filter(s => s.id !== selectedShow.id)
        })
    }

    useUpdateEffect(() => {
        bookmarkContext.bookmarkHandler(bookmarked)
    }, [bookmarkContext, bookmarked])

    const fetchShows = () => {
        showCommunicator
            .getAllShows()
            .then(data => {
                if (bookmarked) {
                    bookmarked.forEach(b => {
                        const initbookmarked = data.find(s => s.id === b.id)
                        console.log('initbookmarked: ', initbookmarked)
                        initbookmarked.bookmarked = true
                    })
                }
                setShows(data)
                setData(data)
                setPageCount(Math.ceil(data.length / 9))
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const showOtherPages = () => {
        const slicedData = shows.slice(offset, offset + 9)
        setData(slicedData)
    }

    const handlePageClick = e => {
        const selectedPage = e.selected
        setOffset(selectedPage * 9)
    }

    useMount(() => {
        fetchShows()
    })

    useUpdateEffect(() => {
        showOtherPages()
    }, [offset])

    let filteredShows
    if (searchContext.query !== '') {
        filteredShows = shows.filter(
            item =>
                item.name.toLowerCase().includes(searchContext.query.toLocaleLowerCase()) ||
                item.rating === parseFloat(searchContext.query)
        )
    } else {
        filteredShows = data.slice(0, 9)
    }

    if (error) {
        return <FallbackUI message={error} />
    }

    if (loading) {
        return <Loader />
    }
    return (
        <Box w="70%" m="auto" mb={10}>
            <Paginate onPageClick={handlePageClick} pageCount={pageCount} />
            <Search />
            {filteredShows.length !== 0 ? (
                <SimpleGrid columns={[1, 2, 3]}>
                    {filteredShows.map(s => (
                        <Card show={s} onBookmark={handleBookmarkClick} key={s.id} />
                    ))}
                </SimpleGrid>
            ) : (
                <ErrorDisplay message="No matching result" />
            )}
        </Box>
    )
}

export default ShowsGrid
