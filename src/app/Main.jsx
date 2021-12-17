import { Routes, Route } from 'react-router-dom'

import BookmarkContextProvider from '../context/bookmark-context'
import Home from './Shows/ShowsGrid'
import Show from './Show/Show'
import About from './About/About'
import FavShows from './FavShows/FavShows'

const Main = () => {
  return (
    <main>
      <BookmarkContextProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favShows" element={<FavShows />}/>
          <Route path="/:id" element={<Show />}/>  
          <Route path="/about" element={<About />}/>
        </Routes>
      </BookmarkContextProvider>
    </main>
  )
}

export default Main