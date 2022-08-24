import Main from './Main'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import SearchContextProvider from 'context/SearchContextProvider'
import BookmarkContextProvider from 'context/BookmarkContextProvider'

import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const App = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <SearchContextProvider>
                <BookmarkContextProvider>
                    <ErrorBoundary>
                        <Main />
                    </ErrorBoundary>
                </BookmarkContextProvider>
            </SearchContextProvider>
            <Footer />
        </ChakraProvider>
    )
}

export default App
