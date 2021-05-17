//  FIXME CreateNavBar Component to be viewable on all pages
//  TODO NavBar will Highlight the CurrentPage
//  TODO Will display Users current Balance
//  TODO Style the NavBar

import React from 'react'
import { Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className='home-link'>
                    <h3>
                        <Link to="/">Home</Link>
                    </h3>
            </div>
            <div className='navlink-container'>
                <ul>
                    <li className='nav-links'>
                        <Link to="/Account">Account</Link>
                    </li>
                    <li className='nav-links'>
                        <Link to="/Market">Marketplace</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
