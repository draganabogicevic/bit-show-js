import React, { useState, useEffect } from 'react'

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
    // @ts-ignore
    const { bookmarkedShows } = useBookmarkContext()
    const { query } = useSearchContext()
    const [bookmarked, setBookmarked] = useState(bookmarkedShows)
    const [shows, setShows] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])
    const [pageCount, setPageCount] = useState()

    const fetchShows = () => {
        showCommunicator
            .getAllShows()
            .then(data => {
                if (bookmarked) {
                    bookmarked.forEach(b => {
                        const initbookmarked = data.find(s => s.id === b.id)
                        initbookmarked.bookmarked = true
                    })
                }
                setShows(data)
                setData(data)
                // @ts-ignore
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

    useEffect(() => {
        fetchShows()
    }, [])

    useEffect(() => {
        showOtherPages()
    }, [offset])

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
        // @ts-ignore
        return <FallbackUI message={error} />
    }

    if (loading) {
        return <Loader />
    }
    return (
        <Box w='70%' m='auto' mb={10}>
            <Paginate onPageClick={handlePageClick} pageCount={pageCount} />
            <Search />
            {filteredShows.length !== 0 ? (
                <SimpleGrid columns={[1, 2, 3]}>
                    {filteredShows.map(s => (
                        <Card show={s} key={s.id} />
                    ))}
                </SimpleGrid>
            ) : (
                // @ts-ignore
                <ErrorDisplay message='No matching result' />
            )}
        </Box>
    )
}

export default ShowsGrid
