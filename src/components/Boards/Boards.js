import React from 'react';
import { Link } from 'react-router-dom';
import './Boards.css';

import { setCurrentBoard } from '../../actions/index';
import { connect } from 'react-redux';
import CreateBoard from './Boards-modal/Create-board';

const Boards = (props) => {
    return (
        <div className='boards'>
            <div className='container'>
                <h2 className='boards-title'>Personal Boards</h2>
                <div className='boards__wrapper'>
                    {
                        props.boards.map(board => (
                            <BoardsView 
                                key={board.id} 
                                board={board} 
                                setCurrentBoard={props.setCurrentBoard}
                            />
                        ))
                    }
                    <CreateBoard />
                </div>
            </div>
        </div>
    )
}

const BoardsView = ({ board, setCurrentBoard }) => {
    return (
        <div className='boards__item' style={{backgroundColor: board.cover}} >
            <div className='boards-fade'>
                <Link 
                    to={`/board/${board.id}`}  
                    onClick={() => setCurrentBoard(board.id)}
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

const mapStateToProps = ({ boards }) => {
    return { boards }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentBoard: (id) => dispatch(setCurrentBoard(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards)