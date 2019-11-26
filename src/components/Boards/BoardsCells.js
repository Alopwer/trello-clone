import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteBoard, setCurrentColor } from '../../actions';
import Times from '../svg/Times';

const BoardsCells = ({ board, deleteBoard }) => {
    return (
        <div className='boards__item' style={{backgroundColor: board.cover}} >
            <div className='boards-fade'>
                <Link 
                    to={`/board/${board.boardId}`}  
                    className='boards__item-link'
                    // onClick={() => setCurrentColor(board.cover)}
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
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId))
    }
}

export default connect(null, mapDispatchToProps)(BoardsCells);