import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './Pages/landing'
import Header from './Components/Header'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route path="/" element={<Header />} />
            </Routes>
        </Router>
    );
}

export default App;
