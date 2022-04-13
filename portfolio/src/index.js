import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Landing, Home } from './Pages/manager'
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/Home" element={<Home />} />
            </Routes>
        </Router>
    </React.StrictMode>,
)