import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Lists from '../Lists';
import './Board.css';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Board = ({ boards, match }) => {
    const currentBoard = Object.keys(boards).length && Object.entries(boards).find(item => item[0] === match.params.id)

    return currentBoard && Object.keys(boards).length ?
        <div style={{ background: currentBoard[1].cover }} className='board'>
            <h3>{currentBoard[1].title}</h3>
            <Lists />
        </div>
        // : <Redirect to='/' />
        : <p>Loading</p>
}

const mapStateToProps = ({ boards }) => {
    return { boards: boards.byId }
}

export default compose(
    withRouter,
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'boards', orderBy: ['createdAt', 'asc'] }
    ])
)(Board);