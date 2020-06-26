import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Boards.css';
import CreateBoard from './BoardsModal/ModalCreateBoard';
import BoardsCells from './BoardsCells';
import { setDefaultColor } from '../../actions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Boards = ({ boards, setDefaultColor, uid }) => {
    useEffect(() => {
        setDefaultColor()
    }, [])

    const boardsItems = boards && Object.entries(boards)
        .filter(board => board[1]?.uid === uid)
        .map(board => (
            board[1] && <div key={board[0]}>
                <BoardsCells board={board[1]} boardId={board[0]}/>
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

const mapStateToProps = ({ firestore, firebase : { auth } }) => ({ 
    boards : firestore.data.boards,
    uid: auth.uid
})

const mapDispatchToProps = (dispatch) => ({
    setDefaultColor : () => dispatch(setDefaultColor())
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'boards', orderBy: ['createdAt', 'asc'] }
    ])
)(Boards)
