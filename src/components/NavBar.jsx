// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={navStyle}>
            <Link style={linkStyle} to="/">
                Home
            </Link>
            <Link style={linkStyle} to="/saved">
                Saved
            </Link>
        </nav>
    );
};

const navStyle = {
    padding: '1rem',
    backgroundColor: '#f0f0f0',
};

const linkStyle = {
    marginRight: '1rem',
    textDecoration: 'none',
    color: '#333',
};

export default NavBar;
