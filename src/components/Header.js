import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../css/header.css';
const Header = () => {
    return (
        <>
            <nav >
                <ul className='navigation'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Header;