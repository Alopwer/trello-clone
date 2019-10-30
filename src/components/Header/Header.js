import React from 'react';
import { Link } from 'react-router-dom';
import  './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <Link to='/' className='header__logo-link'>Trello Clone</Link>
            </div>
            <div className='header-btn'>
                <button>+</button>
            </div>
        </div>
    )
}

export default Header;