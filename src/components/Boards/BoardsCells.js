import React from 'react';
import { Link } from 'react-router-dom';

const BoardsCells = ({ board, setCurrentBoard }) => {
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
                    <div className='boards__item-content'>
                        <span>{board.title}</span>
                    </div>
                </Link>
            </div>
        </div>
    )   
}

export default BoardsCells;