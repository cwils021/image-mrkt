//  FIXME CreateNavBar Component to be viewable on all pages
//  TODO NavBar will Highlight the CurrentPage
//  TODO Will display Users current Balance
//  TODO Style the NavBar
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    const [userData, setUserData] = useState({
        username:'testUser123',
        balance: 100,
        images: [],
    })
    return (
        <div className='navbar-container'>
            <div className='home-link'>
                    <h3>
                        <Link to="/">Home</Link>
                    </h3>
            </div>
            <div className='navlink-container'>
                <h3 className='nav-links'>
                    <Link to="/Account">Account</Link>
                </h3>
                <h3 className='nav-links'>
                    <Link to="/Market">Marketplace</Link>
                </h3>
            </div>
            <div id="user-items" className='navlink-container'>
                    <h3 className='nav-links'>
                        <Link to="/Account">{userData.balance}</Link>
                    </h3>
                    <h3 className='nav-links'>
                        <Link to="/Account">{userData.username}</Link>
                    </h3>
            </div>
        </div>
    );
};

export default NavBar;
