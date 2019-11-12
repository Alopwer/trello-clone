import React from 'react';
import './Boards.css';

import { connect } from 'react-redux';
import CreateBoard from './BoardsModal/ModalCreateBoard';
import BoardsCells from './BoardsCells';

const Boards = ({ boards }) => {
    
    const boardsItems = boards.map(board => (
        <BoardsCells
            key={board.boardId} 
            board={board} 
        />
    ))

    return (
        <div className='boards'>
            <div className='container'>
                <h2 className='boards-title'>Personal Boards</h2>
                <div className='boards__wrapper'>
                    { boardsItems }
                    <CreateBoard />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ boards }) => {
    return { boards }
}

export default connect(mapStateToProps)(Boards)