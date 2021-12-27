import { useState } from 'react'

import { SearchContext } from './searchContext'

export const SearchContextProvider = props => {
    const [query, setQuery] = useState('')

    const searchHandler = query => {
        setQuery(query)
    }

    const searchContextValue = {
        query,
        searchHandler
    }

    return (
        <SearchContext.Provider value={searchContextValue}>{props.children}</SearchContext.Provider>
    )
}

export default SearchContextProvider
