import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Boards.css';
import CreateBoard from './BoardsModal/ModalCreateBoard';
import BoardsCells from './BoardsCells';
import { setDefaultColor } from '../../actions';

const Boards = ({ boards, setDefaultColor }) => {
    useEffect(() => {
        setDefaultColor()
    }, [])

    const boardsItems = Object.values(boards).map(board => (
        <div key={board.boardId}>
            <BoardsCells board={board} />
        </div>
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

const mapStateToProps = ({ boards : { byId } }) => {
    return { boards : byId }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDefaultColor: () => dispatch(setDefaultColor())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards)