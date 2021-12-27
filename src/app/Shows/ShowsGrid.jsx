import { useState } from 'react'
import { useUpdateEffect, useMount } from 'react-use'

import Search from 'app/components/Search'
import Card from 'app/components/Card'
import Loader from 'app/components/Loader'
import ErrorDisplay from 'app/components/ErrorDisplay'
import FallbackUI from 'app/components/FallbackUI'
import Paginate from 'app/components/Paginate'
import { useSearchContext } from 'context/searchContext'
import { useBookmarkContext } from 'context/bookmarkContext'

import { showCommunicator } from 'service/ShowCommunicator'

import { Box, SimpleGrid } from '@chakra-ui/react'

const ShowsGrid = () => {
    const { bookmarkHandler, contextBookmarked } = useBookmarkContext()
    const { query } = useSearchContext()
    const [bookmarked, setBookmarked] = useState(contextBookmarked)
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
                console.log(data)
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

    useUpdateEffect(() => {
        bookmarkHandler(bookmarked)
    }, [bookmarked])

    let filteredShows
    if (query !== '') {
        filteredShows = shows.filter(
            item =>
                item.name.toLowerCase().includes(query.toLocaleLowerCase()) ||
                item.rating === parseFloat(query)
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
