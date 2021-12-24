import { Routes, Route } from 'react-router-dom'

import BookmarkContextProvider from '../context/bookmark-context'
import Home from './shows/ShowsGrid'
import Show from './show-details/Show'
import About from './about/About'
import FavShows from './fawShows/FavShows'

const Main = () => {
    return (
        <main>
            <BookmarkContextProvider>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/favShows' element={<FavShows />} />
                    <Route path='/:id' element={<Show />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BookmarkContextProvider>
        </main>
    )
}

export default Main
