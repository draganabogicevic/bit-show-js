import React from "react";
import { Menu, MenuButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"



const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Menu  >
      <MenuButton>BIT SHOW</MenuButton>
      <MenuButton>About</MenuButton>
      <MenuButton onClick={toggleColorMode}>
        {colorMode === "light"? <MoonIcon /> : <SunIcon />}
        </MenuButton>
    </Menu>
  )
}

export default Navbar;
