// @ts-nocheck
import React, { useState, useContext } from "react";

import { SearchContext } from "../context/search-context";

import { Box, Input, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

const Search = () => {
  // const [ searchQuery, setSearchQuery ] = useState("");
  const searchContext = useContext(SearchContext);

  // const searchQueryHandler = (query) => {
  //   searchContext.searchHandler(query);
  // }

  return (
    <Box my="30px">
      <InputGroup>
        <InputLeftAddon 
          children={<SearchIcon />}
        />
        <Input 
          type="text" 
          placeholder="search for the show" 
          onChange={(e) => {searchContext.searchHandler(e.target.value)}}
        />
      </InputGroup>
    </Box>
  )
} 

export default Search;
