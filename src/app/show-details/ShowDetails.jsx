import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import PropTypes from 'prop-types'

import Show from 'entities/Show'

import { Image, SimpleGrid, Box, Heading, Divider } from '@chakra-ui/react'

const ShowDetails = ({ show }) => {
    return (
        <Box w="70%" m="auto">
            <SimpleGrid columns={[1, 1, 2]} mt="50px" mb="30px">
                <Image w={'80%'} borderRadius="20px" boxShadow={'2xl'} src={show.image.original} />
                <Box>
                    <Heading mt="30px">{show.name}</Heading>
                    <Box mt="50px">{ReactHtmlParser(show.summary)}</Box>
                </Box>
            </SimpleGrid>
            <Divider />
        </Box>
    )
}

ShowDetails.propTypes = {
    show: PropTypes.objectOf(PropTypes.instanceOf(Show))
}

export default ShowDetails
