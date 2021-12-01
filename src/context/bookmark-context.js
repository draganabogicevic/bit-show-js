import React, { useState } from "react";

export const BookmarkContext = React.createContext({
  bookmarked: [],
  bookmarkHandler: (prop) => {},
});

const BookmarkContextProvider = (props) => {
  const [bookmarked, setBookmarked] = useState([]);

  const bookmarkHandler = (items) => {
    setBookmarked(items);
  }

  // const saveToLs = (data) => {
  //   const dataForLs = JSON.stringify(data);
  //   localStorage.setItem("favShows", dataForLs);
  // }
 
  return (
    <BookmarkContext.Provider
      value = {{bookmarked:bookmarked, bookmarkHandler:bookmarkHandler }}
    >
      {props.children}
    </BookmarkContext.Provider>  
  )
}
export default BookmarkContextProvider;