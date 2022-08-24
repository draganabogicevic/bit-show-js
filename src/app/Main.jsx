import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ShowsGrid from './shows/ShowsGrid'
import Show from './show-details/Show'
import About from './about/About'
import FavShows from './fawShows/FavShows'

const Main = () => {
    return (
        <main>
            <Routes>
                <Route
                    path='/'
                    // @ts-ignore
                    element={<ShowsGrid />}
                />
                <Route
                    path='/favShows'
                    // @ts-ignore
                    element={<FavShows />}
                />
                <Route
                    path='/:id'
                    // @ts-ignore
                    element={<Show />}
                />
                <Route
                    path='/about'
                    // @ts-ignore
                    element={<About />}
                />
            </Routes>
        </main>
    )
}

export default Main
