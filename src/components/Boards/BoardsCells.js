import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteBoard } from '../../actions';
import { setCurrentBoard } from '../../actions/index';
import Times from '../svg/Times';

const BoardsCells = ({ board, setCurrentBoard, deleteBoard }) => {
    return (
        <div className='boards__item' style={{backgroundColor: board.cover}} >
            <div className='boards-fade'>
                <Link 
                    to={`/board/${board.boardId}`}  
                    onClick={() => {
                        setCurrentBoard(board.boardId)
                    }}
                    className='boards__item-link'
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
        setCurrentBoard: (id) => dispatch(setCurrentBoard(id)),
        deleteBoard: (id) => dispatch(deleteBoard(id))
    }
}

export default connect(null, mapDispatchToProps)(BoardsCells);