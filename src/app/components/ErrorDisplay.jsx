import React from 'react'
import { Box, Heading } from '@chakra-ui/layout'
// import PropTypes from 'prop-types'

export default function ErrorDisplay({ message, children }) {
    const msg = message ? message : 'Error!'
    return (
        <Box w='70%' m='auto'>
            <Heading>{msg}</Heading>
            {children}
        </Box>
    )
}

// ErrorDisplay.prototype = {
//     message: PropTypes.string,
//     children: PropTypes.element
// }
