import React, { useState, useEffect } from 'react'

export const BookmarkContext = React.createContext({
    bookmarked: [],
    bookmarkHandler: prop => {}
})

const BookmarkContextProvider = props => {
    const [bookmarked, setBookmarked] = useState([])

    useEffect(() => {
        if (localStorage.getItem('favShows')) {
            setBookmarked(JSON.parse(localStorage.getItem('favShows')))
        }
    }, [])
    const bookmarkHandler = items => {
        setBookmarked(items)
    }

    const saveToLocalStorage = bookmarked => {
        localStorage.setItem('favShows', JSON.stringify(bookmarked))
    }

    useEffect(() => {
        saveToLocalStorage(bookmarked)
    }, [bookmarked])

    return (
        <BookmarkContext.Provider
            value={{ bookmarked: bookmarked, bookmarkHandler: bookmarkHandler }}
        >
            {props.children}
        </BookmarkContext.Provider>
    )
}
export default BookmarkContextProvider
