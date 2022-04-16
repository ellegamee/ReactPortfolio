import React from "react"
import { Link } from 'react-router-dom'
import "./index.css"

export default function Landing() {
    return (
        <div className="bg">            
            <div className="text">
                <p className="text__welcome">Hello!</p>
                <Link to="/home" className="text__option">Portfolio</Link>
                <Link to="/contact" className="text__option">Contact</Link>
            </div>
            <div className="instruction">
                <p className="instruction_text">Choose an option above</p>
            </div>
        </div>
    )
}
