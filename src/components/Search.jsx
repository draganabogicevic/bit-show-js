// @ts-nocheck
import React from "react";

import { Box, Input, InputGroup, InputLeftAddon  } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  return (
    <Box my="30px">
      <InputGroup>
        <InputLeftAddon children={<SearchIcon />}/>
        <Input type="text" placeholder="search for the show" />
      </InputGroup>
    </Box>
  )
} 

export default Search;
