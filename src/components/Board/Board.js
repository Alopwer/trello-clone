import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListsPage from '../../pages/ListsPage/ListsPage';
import './Board.css';

const Board = ({ boards, match }) => {
    const currentBoard = boards.find(board => board.boardId === +match.params.id)
    
    return (
        <div style={{background: currentBoard.cover}} className='board'>
            <h3>
                {currentBoard.title}
            </h3>
            <ListsPage />
        </div>
    )
}

const mapStateToProps = ({ boards }) => {
    return { boards }
}

export default withRouter(connect(mapStateToProps)(Board));