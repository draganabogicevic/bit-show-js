import React, { useState } from 'react'

import { useSearchContext } from 'context/searchContext'

import { Box, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const { searchHandler } = useSearchContext()

    const searchQueryHandler = query => {
        setSearchQuery(query)
        searchHandler(query)
    }

    return (
        <Box my="30px">
            <InputGroup>
                <InputLeftAddon children={<SearchIcon />} />
                <Input
                    value={searchQuery}
                    type="text"
                    placeholder="search for the show"
                    onChange={e => {
                        searchQueryHandler(e.target.value)
                    }}
                />
            </InputGroup>
        </Box>
    )
}

export default Search
