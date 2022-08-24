import React, { useState, useEffect } from 'react'

import ShowFromLs from 'entities/ShowFromLs'
import { BookmarkContext } from './bookmarkContext'

const getShowsFromLocalStorage = () => {
    const dataFromLs = JSON.parse(localStorage.getItem('favShows'))
    let prevBookmarked
    dataFromLs ? (prevBookmarked = dataFromLs.map(s => new ShowFromLs(s))) : (prevBookmarked = [])
    return prevBookmarked
}

const BookmarkContextProvider = props => {
    const [bookmarkedShows, setBookmarkedShows] = useState(getShowsFromLocalStorage())
    const bookmarkHandler = show => {
        setBookmarkedShows(prevBookmarked => {
            return show.bookmarked
                ? [...prevBookmarked, show]
                : prevBookmarked.filter(s => s.id !== show.id)
        })
    }

    const saveToLocalStorage = bookmarked => {
        localStorage.setItem('favShows', JSON.stringify(bookmarked))
    }

    useEffect(() => saveToLocalStorage(bookmarkedShows), [bookmarkedShows])

    const bookmarkContextValue = {
        bookmarkedShows,
        bookmarkHandler,
        saveToLocalStorage
    }

    return (
        <BookmarkContext.Provider
            // @ts-ignore
            value={bookmarkContextValue}
        >
            {props.children}
        </BookmarkContext.Provider>
    )
}
export default BookmarkContextProvider
