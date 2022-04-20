import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const StyledHeader = {
        'display': 'flex',
    }

    const StyledMenu = {
        'display': 'flex',
        'marginLeft': 'auto',
    }

    const StyleLinks = {
        'textDecoration': 'none',
        'color': 'black',
        'margin': '15px',
    }

    return(
        <div style={StyledHeader}>
            <Link to='/' style={StyleLinks}>Elias Axonov</Link>
            
            <div style={StyledMenu}>
                <Link to='/archive' style={StyleLinks}>Archive</Link>
                <Link to='/about' style={StyleLinks}>About</Link>
            </div>
        </div>
    )
}