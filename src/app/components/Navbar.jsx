import React from 'react'
import { Link } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Flex, Menu, MenuButton, useColorMode, useColorModeValue } from '@chakra-ui/react'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <Link to="/">
                                <MenuButton px={4}>BIT SHOW</MenuButton>
                            </Link>
                        </Menu>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <Link to="/favShows">
                                <MenuButton px={4}>Favorite Shows</MenuButton>
                            </Link>
                            <Link to="/about">
                                <MenuButton px={4}>About</MenuButton>
                            </Link>
                            <MenuButton px={4} onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </MenuButton>
                        </Menu>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default Navbar
