import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'

import { Box, Heading, Button } from '@chakra-ui/react'

const FallbackUI = ({ error }) => {
    const navigate = useNavigate()
    const refreshHomePage = () => {
        navigate('/')
        window.location.reload()
    }

    return (
        <Box w='70%' m='auto' mt='50px' alignItems='center'>
            <Heading mt='20px'>Something went wrong...</Heading>
            <Box my='20px'>
                <Box as='p'>Sorry, an unexpected error has occurred.</Box>
            </Box>
            {error ? <Box>Error : {error}</Box> : <Fragment />}
            <Button onClick={refreshHomePage}>Go Home</Button>
        </Box>
    )
}

// FallbackUI.propTypes = {
//     error: PropTypes.string
// }

export default FallbackUI
