import React from 'react';
import './Boards.css';

import { setCurrentBoard } from '../../actions/index';
import { connect } from 'react-redux';
import CreateBoard from './BoardsModal/ModalCreateBoard';
import BoardsCells from './BoardsCells';

const Boards = ({ boards, setCurrentBoard }) => {
    const boardsItems = boards.map(board => (
        <BoardsCells
            key={board.id} 
            board={board} 
            setCurrentBoard={setCurrentBoard}
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

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentBoard: (id) => dispatch(setCurrentBoard(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards)