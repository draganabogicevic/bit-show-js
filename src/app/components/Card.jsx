import React from 'react'
import { Link } from 'react-router-dom'
import { useBookmarkContext } from 'context/bookmarkContext'
import PropTypes from 'prop-types'

import Show from 'entities/Show'
import { Icon, Heading, Box, Image, Flex, useColorModeValue, Spacer } from '@chakra-ui/react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

const Card = ({ show }) => {
    const { bookmarkHandler } = useBookmarkContext()

    return (
        <Box
            m={6}
            p={3}
            maxW={'270px'}
            w={'full'}
            bg={useColorModeValue('gray.100', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
        >
            <Link to={`/${show.id}`}>
                <Image w={'full'} src={show.image.medium} objectFit={'cover'} />
            </Link>
            <Flex>
                <Box
                    onClick={() => {
                        show.toggleBookmark()
                        bookmarkHandler(show)
                    }}
                >
                    {show.bookmarked ? <Icon as={BsBookmarkFill} /> : <Icon as={BsBookmark} />}
                </Box>
                <Spacer />
                <Box
                    mt={-3}
                    mr={30}
                    textAlign='center'
                    width='40px'
                    css={{
                        border: '2px solid white'
                    }}
                    borderRadius='full'
                    bg={useColorModeValue('gray.100', 'gray.800')}
                >
                    {show.rating}
                </Box>
            </Flex>
            <Heading
                mb={5}
                fontSize={'2xl'}
                fontWeight={500}
                fontFamily={'body'}
                textAlign='center'
            >
                {show.truncatedTitle}
            </Heading>
        </Box>
    )
}

Card.propTypes = {
    show: PropTypes.instanceOf(Show)
}

export default Card
