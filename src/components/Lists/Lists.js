import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import List from '../List';
import AddNewItem from '../AddNewItem';
import './Lists.css';

const Lists = ({ boards, match }) => {
    const [inputOpened, setInputOpened] = useState(false)
    const currentBoard = boards.find(board => board.boardId === +match.params.id)
    const lists = currentBoard.lists || false

    const toggleInput = () => {
        setInputOpened(!inputOpened)
    }

    const items = lists &&
        lists.map((list, i) => 
            <div className='lists-item' key={i}>
                <List list={list} />
            </div>
        )

    const addListItem = inputOpened ? 
        <AddNewItem 
            currentParent={currentBoard} 
            toggleInput={toggleInput} 
            setInputOpened={setInputOpened}
        /> 
            :  
        <button className='lists-btn' onClick={toggleInput}>
            <span>+</span> Add another list
        </button>

    return (
        <div className='lists__wrapper'>
            {items}
            {addListItem}
        </div>
    )
}

const mapStateToProps = ({ boards }) => {
    return { boards }
}

export default withRouter(connect(mapStateToProps)(Lists));