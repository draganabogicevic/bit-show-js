import React, { useEffect, useState } from "react";

export const BookmarkContext = React.createContext({
  bookmarked: [],
  bookmarkHandler: () => {},
  clearBookmarked: () => {}, 
});

export const BookmarkContextProvider = (props) => {
  const [bookmarked, setBookmarked] = useState([]);

  useEffect (() => {
    setBookmarked(getLocalStorage())
  }, [])

  console.log(bookmarked)

  const bookmarkHandler = (selected) => {
    if(bookmarked.map(s => s.id !== selected.id)) {
    setBookmarked(bookmarked.concat(selected));
    } else {
      setBookmarked(bookmarked);
    } 
  }

  const saveToLocalStorage = () => {
    localStorage.setItem("favShows", JSON.stringify(bookmarked));
  }
  function getLocalStorage() {
    const ls = JSON.parse(localStorage.getItem("favShows"));
    console.log(ls)
    return ls;
  }
  
  const clearBookmarked = () => {
    saveToLocalStorage();
    // setBookmarked([]);
  }

  return (
    <BookmarkContext.Provider
      // @ts-ignore
      value = {{bookmarked:bookmarked, bookmarkHandler:bookmarkHandler, clearBookmarked: clearBookmarked, getLocalStorage: getLocalStorage }}
    >
      {props.children}
    </BookmarkContext.Provider>  
  )
}

export default BookmarkContextProvider;