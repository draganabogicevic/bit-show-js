import React, { useContext } from 'react'

export const BookmarkContext = React.createContext({
    bookmarkedShows: [],
    bookmarkHandler: prop => {},
    saveToLocalStorage: () => []
})

export const useBookmarkContext = () => {
    const ctx = useContext(BookmarkContext)
    return ctx
}
