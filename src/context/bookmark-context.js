import React, { useState } from "react";

export const BookmarkContext = React.createContext({
  bookmarked: [],
  bookmarkHandler: () => {},
  clearBookmarked: () => {}, 
});

export const BookmarkContextProvider = (props) => {
  const [bookmarked, setBookmarked] = useState([]);

  const bookmarkHandler = (selected) => {
    if(bookmarked.map(s => s.id !== selected.id)) {
    setBookmarked(bookmarked.concat(selected));
    }    
  }

  const clearBookmarked = () => {
    setBookmarked([]);
  }

  return (
    <BookmarkContext.Provider
      value = {{bookmarked:bookmarked, bookmarkHandler:bookmarkHandler, clearBookmarked: clearBookmarked }}
    >
      {props.children}
    </BookmarkContext.Provider>  
  )
}

export default BookmarkContextProvider;