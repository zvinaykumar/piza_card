import React from 'react';
import logo from "../images/logo.png";
import "./header.css"

export  const Header = () => (
    
<div className="nav-head">
    
    <img src={logo} alt="loading.."></img>
    
        <nav className="nav-body">
            <ul>
            <li><a href="/">OUR MENU</a></li>
            <li><a href="/">STOR FINDER</a></li>
            <li><a href="/">GIFT CARD</a></li>
            <li><a href="/">CORPORATE ENQUIRY</a></li>
            <li><a href="/">CONTACT US</a></li>
            <li> <a href="/">DOWNLOAD</a></li>
            </ul>  
        </nav>
</div>

    
)