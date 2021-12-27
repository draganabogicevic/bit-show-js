import { Routes, Route } from 'react-router-dom'

import Home from './shows/ShowsGrid'
import Show from './show-details/Show'
import About from './about/About'
import FavShows from './fawShows/FavShows'

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favShows" element={<FavShows />} />
                <Route path="/:id" element={<Show />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    )
}

export default Main
