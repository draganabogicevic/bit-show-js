import React, { useContext } from 'react'

export const BookmarkContext = React.createContext({
    bookmarked: [],
    bookmarkHandler: prop => {},
    saveToLocalStorage: () => []
})

export const useBookmarkContext = () => {
    const ctx = useContext(BookmarkContext)
    return ctx
}
