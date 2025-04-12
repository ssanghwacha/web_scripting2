// src/components/NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// HoverLink 컴포넌트: 마우스 오버시 색상과 위치가 변경되도록 함
const HoverLink = ({ to, children, style }) => {
    const [hover, setHover] = useState(false);

    // 기본 스타일과 호버 시 스타일 병합
    const combinedStyle = {
        ...style,
        ...(hover && {
            color: '#0070c9',
            transform: 'translateY(-2px)',
        }),
    };

    return (
        <Link
            to={to}
            style={combinedStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children}
        </Link>
    );
};

const NavBar = () => {
    const navStyle = {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        fontFamily: "'Apple SD Gothic Neo',  sans-serif",
    };

    const linkStyle = {
        margin: '0 1rem',
        fontSize: '1.1rem',
        fontWeight: '500',
        color: '#333',
        textDecoration: 'none',
        transition: 'color 0.3s, transform 0.2s',
    };

    return (
        <nav style={navStyle}>
            <HoverLink to="/" style={linkStyle}>
                Home
            </HoverLink>
            <HoverLink to="/saved" style={linkStyle}>
                Saved
            </HoverLink>
        </nav>
    );
};

export default NavBar;
