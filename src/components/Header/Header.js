import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  './Header.css';

const Header = ({ currentColor }) => {
    console.log(currentColor)
    return (
        <div style={{background : currentColor}} className='header'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <Link to='/' className='header__logo-link'>Trello Clone</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ currentColor }) => ({
    currentColor
})

export default connect(mapStateToProps)(Header);