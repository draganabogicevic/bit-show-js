import React from 'react'

import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
// @ts-ignore
import style from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} className={style.footer}>
                <Flex h={10} alignItems={'center'} justifyContent={'center'}>
                    <p>Copyright &copy; 2021.</p>
                </Flex>
            </Box>
        </>
    )
}

export default Footer
