import { Link } from 'react-router-dom'

import { Icon, Heading, Box, Image, Flex, useColorModeValue, Spacer } from '@chakra-ui/react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

const Card = ({ show, onBookmark }) => {
    return (
        <Box
            m={6}
            p={3}
            maxW={'270px'}
            w={'full'}
            bg={useColorModeValue('gray.100', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>
            <Link to={`/${show.id}`}>
                <Image w={'full'} src={show.image.medium} objectFit={'cover'} />
            </Link>
            <Flex>
                <Box onClick={() => onBookmark(show.id)}>
                    {show.bookmarked ? <Icon as={BsBookmarkFill} /> : <Icon as={BsBookmark} />}
                </Box>
                <Spacer />
                <Box
                    mt={-3}
                    mr={30}
                    textAlign="center"
                    width="40px"
                    css={{
                        border: '2px solid white'
                    }}
                    borderRadius="full"
                    bg={useColorModeValue('gray.100', 'gray.800')}>
                    {show.rating}
                </Box>
            </Flex>
            <Heading
                mb={5}
                fontSize={'2xl'}
                fontWeight={500}
                fontFamily={'body'}
                textAlign="center">
                {show.truncatedTitle}
            </Heading>
        </Box>
    )
}

export default Card
