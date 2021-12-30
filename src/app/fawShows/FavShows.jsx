import React, { useState, useEffect } from 'react'
import { useBookmarkContext } from 'context/bookmarkContext'

import Card from 'app/components/Card'
import ErrorDisplay from 'app/components/ErrorDisplay'

import { Box, SimpleGrid, Heading } from '@chakra-ui/react'

const FavShows = () => {
    // @ts-ignore
    const { bookmarkedShows } = useBookmarkContext()
    const [bookmarked, setBookmarked] = useState(bookmarkedShows)
    useEffect(() => {
        setBookmarked(bookmarkedShows)
    }, [bookmarkedShows])

    return (
        <Box w='70%' m='auto'>
            <Heading my='30px'>My favorite</Heading>
            {bookmarked !== null && bookmarked.length >= 1 ? (
                <SimpleGrid columns={[1, 2, 3]}>
                    {bookmarked.map((s, index) => (
                        <Box w='100%' key={index}>
                            <Card show={s} key={s.id} />
                        </Box>
                    ))}
                </SimpleGrid>
            ) : (
                // @ts-ignore
                <ErrorDisplay message='No selected favorite shows jet' />
            )}
        </Box>
    )
}

export default FavShows
