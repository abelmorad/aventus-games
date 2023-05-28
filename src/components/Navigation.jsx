import React from "react"
import { NavLink } from "react-router-dom"

export default function Navigation() {
    return (
        <div className="nav-container">
            <nav className="nav-links-wrapper">
                <h1>Aventus Games</h1>
                <ul>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                    <NavLink to='/news'>News</NavLink>
                    <a className="contact-us-btn" href="#">Contact us</a>
                </ul>
            </nav>
        </div>
    )
}