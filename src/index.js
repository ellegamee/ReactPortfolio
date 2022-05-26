import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Landing, Home, Contact, About } from './Pages/manager'
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />}/>
                <Route path="contact" element={<Contact />}/>
            </Routes>
        </Router>
    </React.StrictMode>,
)