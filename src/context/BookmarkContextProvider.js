import React, { useState } from 'react'
import { useUpdateEffect } from 'react-use'

import ShowFromLs from 'entities/ShowFromLs'
import { BookmarkContext } from './bookmarkContext'

const BookmarkContextProvider = props => {
    const [contextBookmarked, setContextBookmarked] = useState(() => {
        const dataFromLS = JSON.parse(localStorage.getItem('favShows'))
        const previousBookmarked = dataFromLS.map(s => new ShowFromLs(s))
        return previousBookmarked ? previousBookmarked : []
    })

    const bookmarkHandler = items => {
        setContextBookmarked(items)
    }

    const saveToLocalStorage = bookmarked => {
        localStorage.setItem('favShows', JSON.stringify(bookmarked))
    }

    useUpdateEffect(() => saveToLocalStorage(contextBookmarked))

    const bookmarkContextValue = {
        contextBookmarked,
        bookmarkHandler,
        saveToLocalStorage
    }

    return (
        <BookmarkContext.Provider value={bookmarkContextValue}>
            {props.children}
        </BookmarkContext.Provider>
    )
}
export default BookmarkContextProvider
