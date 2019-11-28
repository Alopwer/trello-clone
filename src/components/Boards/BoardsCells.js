import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteBoard, setCurrentColor } from '../../actions';

import Times from '../svg/Times';

const BoardsCells = ({ board, deleteBoard, setCurrentColor }) => {
    return (
        <div className='board__cell' style={{backgroundColor: board.cover}} >
            <div className='board-fade'>
                <Link 
                    to={`/board/${board.boardId}`}  
                    className='board__cell-link'
                    onClick={() => setCurrentColor(board.cover)}
                >
                    <span>{board.title}</span>
                </Link>
                <div className='board-times' onClick={() => deleteBoard(board.boardId)}>
                    <Times width={10}/>
                </div>
            </div>
        </div>
    )   
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
        setCurrentColor: (color) => dispatch(setCurrentColor(color))
    }
}

export default connect(null, mapDispatchToProps)(BoardsCells);