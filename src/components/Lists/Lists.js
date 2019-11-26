import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import List from '../List';
import AddNewItem from '../AddNewItem';
import './Lists.css';

const Lists = ({ lists, match }) => {
    const [inputOpened, setInputOpened] = useState(false)

    const toggleInput = () => {
        setInputOpened(!inputOpened)
    }
    
    const items = lists &&
        Object.values(lists).map(list => list.boardId === match.params.id &&
            <div className='lists-item' key={list.listId}>
                <List list={list} />
            </div>
        )

    const addListItem = inputOpened ? 
        <AddNewItem 
            currentParent={'list'} 
            toggleInput={toggleInput} 
            setInputOpened={setInputOpened}
        /> 
            :  
        <button className='lists-btn' onClick={toggleInput}>
            <span>+</span> Add another list
        </button>

    return (
        <div className='lists__wrapper'>
            { items }
            { addListItem }
        </div>
    )
}

const mapStateToProps = ({ lists : { byId } }) => {
    return { lists : byId }
}

export default withRouter(connect(mapStateToProps)(Lists));