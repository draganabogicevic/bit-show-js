import { useState, useContext } from 'react'
import { useUpdateEffect } from 'react-use'
import { BookmarkContext } from '../../context/bookmark-context'

import Card from './../components/Card'
import ErrorDisplay from '../components/ErrorDisplay'

import { Box, SimpleGrid, Heading } from '@chakra-ui/react'

const FavShows = () => {
    const bookmarkContext = useContext(BookmarkContext)
    const [bookmarked, setBookmarked] = useState(bookmarkContext.bookmarked)

    const handleUnBookmark = showId => {
        const selectedShow = bookmarked.find(s => s.id === showId)
        setBookmarked(prevBookmarked => {
            return prevBookmarked.filter(s => s.id !== selectedShow.id)
        })
    }

    useUpdateEffect(() => {
        bookmarkContext.bookmarkHandler(bookmarked)
    }, [bookmarked])

    return (
        <Box w='70%' m='auto'>
            <Heading my='30px'>My favorite</Heading>
            {bookmarked !== null && bookmarked.length >= 1 ? (
                <SimpleGrid columns={[1, 2, 3]}>
                    {bookmarked.map((s, index) => (
                        <Box w='100%' key={index}>
                            <Card show={s} key={s.id} onBookmark={handleUnBookmark} />
                        </Box>
                    ))}
                </SimpleGrid>
            ) : (
                <ErrorDisplay message='No selected favorite shows jet' />
            )}
        </Box>
    )
}

export default FavShows
