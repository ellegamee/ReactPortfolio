import React from 'react'
import { Link } from 'react-router-dom'
import { GrHomeRounded } from 'react-icons/gr'
import './index.css'

export default function Header() {
    return(
        <div className="header">
            <Link to='/home' className="links"><GrHomeRounded /></Link>
            
            <div className="menu">
                <Link to='/archive' className="links">About</Link>
                <Link to='/contact' className="links">Contact</Link>
            </div>
        </div>
    )
}