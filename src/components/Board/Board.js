import React from 'react';
import './Board.css';
import { connect } from 'react-redux';
import ListsPage from '../../pages/ListsPage/ListsPage'

const Board = ({ currentBoard }) => {
    return (
        <div style={{background: currentBoard.cover}} className='board'>
            <h3>
                {currentBoard.title}
            </h3>
            <ListsPage />
        </div>
    )
}

const mapStateToProps = ({ currentBoard }) => {
    return { currentBoard }
}

export default connect(mapStateToProps)(Board)