import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './app/App'
import './index.css'
import React from 'react'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
