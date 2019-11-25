import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import  './Header.css';

const Header = ({ currentColor }) => {
    return (
        <div style={{background: currentColor}} className='header'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <Link to='/' className='header__logo-link'>Trello Clone</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ currentColor }) => {
    return { currentColor }
}

export default withRouter(connect(mapStateToProps)(Header));