import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Landing } from './Pages/manager'
import Header from './Layout/header'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route path="/" element={<Header />} />
            </Routes>
        </Router>
    </React.StrictMode>
);