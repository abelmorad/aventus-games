import React from "react";

export default function Navigation() {

    return (
        <nav>
            <div className="logo-container">
                <a className="logo" href="#">Aventus Games</a>
            </div>
            <div className="nav-links-wrapper">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Portfolio</a>
                <a href="#">News</a>
                <a className="contact-us-btn" href="#">Contact us</a>
            </div>
        </nav>
    )
}