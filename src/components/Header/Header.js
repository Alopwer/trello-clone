import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  './Header.css';

const Header = ({ cover }) => {
    return (
        <div style={{background: cover}} className='header'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <Link to='/' className='header__logo-link'>Trello Clone</Link>
                </div>
                <div className='header-btn'>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ currentBoard : { cover } }) => {
    return { cover }
}

export default connect(mapStateToProps)(Header);