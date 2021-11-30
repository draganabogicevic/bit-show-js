import React, { useEffect, useState } from "react";

export const BookmarkContext = React.createContext({
  bookmarked: [],
  bookmarkHandler: () => {},
  clearBookmarked: () => {}, 
});

const BookmarkContextProvider = (props) => {
  const [bookmarked, setBookmarked] = useState([]);

  // function getLocalStorage() {
  //   const ls = JSON.parse(localStorage.getItem("favShows"));
  //   console.log(ls)
  //   return ls;
  // }

  // useEffect (() => {
  //   setBookmarked(getLocalStorage())
  // }, [])
  
  // const selectedIsDifferent = (selected) => {
  //   let isDifferent = true;
  //   for(let i = 0; i<bookmarked.length; i++) {
  //     let current = bookmarked[i].id;
  //     if(current === selected.id) {
  //     isDifferent = false;
  //   } 
  //   return isDifferent;
  //  }
  // }
  
  // const bookmarkHandler = (selected) => {
  //   if(selectedIsDifferent(selected)) {
  //     setBookmarked(bookmarked.concat(selected))
  //   }
  // }
  // console.log(bookmarked)
  // const saveToLocalStorage = () => {
  //   localStorage.setItem("favShows", JSON.stringify(bookmarked));
  // }

  const bookmarkHandler = (selected) => {
    if(bookmarked.map(s => s.id !== selected.id)) {
    setBookmarked(bookmarked.concat(selected));
    }    
  }

  const clearBookmarked = () => {
    // saveToLocalStorage();
    setBookmarked([]);
  }

  return (
    <BookmarkContext.Provider
      // @ts-ignore
      value = {{bookmarked:bookmarked, bookmarkHandler:bookmarkHandler, clearBookmarked: clearBookmarked }}
    >
      {props.children}
    </BookmarkContext.Provider>  
  )
}
export default BookmarkContextProvider;