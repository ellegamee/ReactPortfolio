import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Landing, Home, Contact } from './Pages/manager'
import Header from "./Layout/header"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="home" element={<Home />} />
                <Route path="contact" element={<Contact />}/>
            </Routes>
        </Router>
    </React.StrictMode>,
)