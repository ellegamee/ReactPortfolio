import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrHomeRounded } from 'react-icons/gr'
import './index.css'

export default function Header() {
    const [cross1, setCross1] = useState("")
    const [cross2, setCross2] = useState("")
    const [cross3, setCross3] = useState("")
    const [menu, setMenu] = useState("menu")
    const [menuLinks, setMenuLinks] = useState("menu_link")


    function toggle_burger_menu() {
        if (cross1 === "active_cross1") {
            setCross1("")
            setCross2("")
            setCross3("")
            setMenu("")
            setMenuLinks("menu_link")

        } else {
            setCross1("active_cross1")
            setCross2("active_cross2")
            setCross3("active_cross3")
            setMenu("active_menu")
            setMenuLinks("menu_link menu_link_active")
        }
    }

    return(
        <div className="header">
            <Link to='/home' className="links"><GrHomeRounded /></Link>
            
            <div className="link_wrapper">
                <Link to='/about' className="links">About</Link>
                <Link to='/contact' className="links">Contact</Link>
            </div>

            <div className="burger_menu" onClick={toggle_burger_menu}>
                <div className={menu}>
                    <Link to='/about' className={menuLinks}>About</Link>
                    <Link to='/contact' className={menuLinks}>Contact</Link>
                </div>
                <hr className={cross1}></hr>
                <hr className={cross2}></hr>
                <hr className={cross3}></hr>
            </div>
        </div>
    )
}