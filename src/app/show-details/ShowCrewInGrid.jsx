import React from 'react'
import PropTypes from 'prop-types'

import ShowCrew from 'entities/ShowCrew'

import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react'

const ShowCrewInGrid = ({ actor }) => {
    return (
        <Box
            maxW={'270px'}
            w={'full'}
            bg={useColorModeValue('gray.100', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
        >
            <Image borderRadius='20px' boxShadow={'2xl'} src={actor.image.medium} />
            <Box textAlign='center'>
                <Text>{actor.name}</Text>
            </Box>
        </Box>
    )
}

ShowCrewInGrid.propTypes = {
    actor: PropTypes.instanceOf(ShowCrew)
}

export default ShowCrewInGrid
