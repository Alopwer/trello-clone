import React from 'react';
import { Link } from 'react-router-dom';
import './Boards.css';

import { setCurrentBoard } from '../../actions/index';
import { connect } from 'react-redux';

const Boards = (props) => {
    return (
        <div>
            {
                props.boards.map(board => (
                    <BoardView 
                        key={board.id} 
                        board={board} 
                        setCurrentBoard={props.setCurrentBoard}/>
                ))
            }
        </div>
    )
}

const BoardView = ({ board, setCurrentBoard }) => {
    return (
        <div>
            <Link to={`/board/${board.id}`} style={{backgroundColor: board.cover}}>
                <span onClick={() => setCurrentBoard(board.id)}>{board.title}</span>
            </Link>
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