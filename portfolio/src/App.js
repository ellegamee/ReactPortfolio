import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Front} from './Pages/maintainer'
import Header from './Components/Header'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Front />} />
            </Routes>
        </Router>
    );
}

export default App;
