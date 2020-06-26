import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import  './Header.css';
import { signOutTA } from '../../actions/thunkCreators';
import { compose } from 'redux';

const Header = ({ currentColor, signOutTA, isLoggedIn, history }) => (
    <div style={{ background : currentColor }} className='header'>
        <div className='header__wrapper'>
            <div className='header__logo'>
                <Link to='/' className='header__logo-link'>Trello Clone</Link>
            </div>
            {
                isLoggedIn ? <div>
                    <button onClick={signOutTA}>Logout</button>
                </div>
                : <div>
                    <button onClick={() => history.push('/login')}>Sign In</button>
                    <button onClick={() => history.push('/signup')}>Sign Up</button>
                </div>
            }
        </div>
    </div>
)


const mapStateToProps = ({ currentColor, auth }) => ({
    currentColor,
    isLoggedIn : auth.isLoggedIn
})

export default compose(
    withRouter,
    connect(mapStateToProps, {
        signOutTA
    })
)(Header)