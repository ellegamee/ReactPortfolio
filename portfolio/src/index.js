import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Landing } from './Pages/manager'
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Landing />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);